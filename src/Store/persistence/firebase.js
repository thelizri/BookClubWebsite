import {child, get, getDatabase, onValue, ref, set} from "firebase/database";
import {setFirebaseReady} from "../slices/userSlice";
import {
    setClubId,
    setClubOwnerId,
    setGenres,
    setLanguage,
    setMaxMembers,
    setMeetings,
    setMeetingType,
    setMembers,
    setReadingList,
    setVoteDeadline,
    setVotes
} from "../slices/clubSlice";
import clubsPersistor from "./persistors/clubsPersistor";
import usersPersistor from "./persistors/usersPersistor";

export const persistence = function (store, firebaseApp) {
    let prevState = store.getState();
    let unsubscriptions = [];
    const dispatch = store.dispatch;

    const firebaseDb = getDatabase(firebaseApp);

    store.subscribe(() => {
        const state = store.getState();
        const userId = state.auth.user.uid;
        const prevUserId = prevState.auth.user.uid;

        if (userId && state.auth.firebaseReady) {
            clubsPersistor.toFirebase(
                firebaseDb,
                state,
                prevState
            )

            usersPersistor.toFirebase(
                firebaseDb,
                state,
                prevState
            )
        }
        if (prevUserId && !userId) unsubscriptions.forEach(unsubscription => unsubscription());
        if (userId && !prevUserId) {
            (
                async () => {
                    await clubsPersistor.fromFirebaseOnce(
                        firebaseDb,
                        state,
                        dispatch
                    );
                    await usersPersistor.fromFirebaseOnce(
                        firebaseDb,
                        state,
                        dispatch
                    );
                    dispatch(setFirebaseReady());
                    unsubscriptions = [
                        clubsPersistor.fromFirebaseSub(
                            firebaseDb,
                            state,
                            dispatch
                        ),
                        usersPersistor.fromFirebaseSub(
                            firebaseDb,
                            state,
                            dispatch
                        )
                    ].flat();

                })();
        }
        prevState = store.getState();
    })
}