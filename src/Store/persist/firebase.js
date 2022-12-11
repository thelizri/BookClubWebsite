import { getDatabase, ref } from "firebase/database"
import persistUserClubs from "./persistors/userClubs"

const persistors = [
    ["userClubs", persistUserClubs],
]
const persistData = function (store, firebaseApp) {
    let prevState = store.getState();
    let unsubscribed = [];
    const firebaseDb = getDatabase(firebaseApp);

    store.subscribe(() => {
        const REF = `users`;
        const prevUserID = prevState.auth.user.uid;
        const userID = store.getState().auth.user.uid;

        if(userID && prevUserID === userID) {
            for(const [persistor, { toFirebase }] of persistors) {
                toFirebase(
                    store.getState,
                    prevState,
                    ref(firebaseDb, `${REF}/${userID}/${persistor}`)
                )
            }
        }
    })
}