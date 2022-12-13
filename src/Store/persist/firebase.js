import { getDatabase, ref } from "firebase/database"
import persistClubs from "./persistors/clubsPersistor"
import firebase from "firebase/compat";
import {setFirebaseReady} from "../slices/userSlice";

const persistors = [
    ["clubs", persistClubs],
]
const persistData = function (store, firebaseApp) {
    let prevState = store.getState();
    let unsubscribers = [];
    const firebaseDb = getDatabase(firebaseApp);

    store.subscribe(() => {
        const REF = `yomubo`;
        const prevUserId = prevState.auth.user.uid;
        const userId = store.getState().auth.user.uid;

        if(userId && prevUserId === userId) {
            for(const [persistor, { toFirebase }] of persistors) {
                toFirebase(
                    store.getState,
                    prevState,
                    ref(firebaseDb, `${REF}/${userId}/${persistor}`)
                )
            }
        }

        //user logs out
        if(prevUserId && !userId) unsubscribers.forEach((unsubscriber) => unsubscriber());

        if (userId && !prevUserId) {
            (async () => {
                for (const [persistor, { fromFirebaseOnce }] of persistors) {
                    await fromFirebaseOnce(
                        store.getState(),
                        store.dispatch,
                        ref(firebaseDb, `${REF}/${userId}/${persistor}`)
                    )
                }

                store.dispatch(setFirebaseReady());

                unsubscribers = persistors.flatMap(([persistor, { fromFirebaseSub }]) => {
                    fromFirebaseSub(
                        store.getState(),
                        store.dispatch,
                        ref(firebaseDb, `${REF}/${userId}/${persistor}`)
                    )
                })
            })();
        }

        prevState = store.getState();
    })
}