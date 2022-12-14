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

const persistors = [
    ["clubs", clubsPersistor],
    ["users", usersPersistor]
]

export const persistence = function (store, firebaseApp) {
    let prevState = store.getState();
    let unsubscriptions = [];
    const dispatch = store.dispatch;

    const firebaseDb = getDatabase(firebaseApp);

    store.subscribe(() => {
        const state = store.getState();
        const userId = state.auth.user.uid;
        const prevUserId = prevState.auth.user.uid;

        const clubPath = `clubs/${state.clubId}/`;
        const clubRef = ref(firebaseDb, clubPath);

        const userPath = `users/${state.auth.user.uid}/`;
        const userRef = ref(firebaseDb, userPath);

        if (userId && state.auth.firebaseReady) {
            clubsPersistor.toFirebase(
                clubRef,
                state,
                prevState
            )

            usersPersistor.toFirebase(
                userRef,
                state,
                prevState
            )
        }
        if (prevUserId && !userId) unsubscriptions.forEach(unsubscription => unsubscription());
        if (userId && !prevUserId) {
            (
                async () => {
                    await clubsPersistor.fromFirebaseOnce(
                        clubRef,
                        dispatch
                    );
                    await usersPersistor.fromFirebaseOnce(
                        userRef,
                        dispatch
                    )
                    dispatch(setFirebaseReady());
                    unsubscriptions = [
                        clubsPersistor.fromFirebaseSub(
                            clubRef,
                            dispatch
                        ),
                        usersPersistor.fromFirebaseSub(
                            clubRef,
                            dispatch
                        )
                    ]

                })();
        }
        prevState = store.getState();
    })
}