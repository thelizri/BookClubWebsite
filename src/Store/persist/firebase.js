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
} from "../slices/club";


export const persistClubs = function (store, firebaseApp) {
    let prevState = store.getState();
    let unsubscribe;
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

        if (userId && state.auth.firebaseReady) toFirebase();
        if (prevUserId && !userId) unsubscribe();
        if (userId && !prevUserId) {
            (
                async () => {
                    await fromFirebaseOnce();
                    dispatch(setFirebaseReady());
                    unsubscribe = fromFirebaseSub();
                })();
        }
        prevState = store.getState();
    })
}