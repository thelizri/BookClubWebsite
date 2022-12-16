import {getDatabase } from "firebase/database";
import {setFirebaseReady, setRegistrationStatus} from "../slices/userSlice";
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
        const registrationCompleted = state.auth.registrationCompleted;

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
        if (registrationCompleted) {
            usersPersistor.toFirebase(
                firebaseDb,
                state,
                prevState
            )
            dispatch(setRegistrationStatus(false));
        }
        if (userId && !prevUserId && !state.auth.registrationCompleted) {
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