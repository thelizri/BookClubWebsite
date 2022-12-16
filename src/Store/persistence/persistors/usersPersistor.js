import {child, get, onValue, ref, set} from "firebase/database";
import {
    setClubId,
    setClubOwnerId,
    setGenres,
    setLanguage,
    setMaxMembers,
    setMeetings,
    setMeetingType, setMembers, setReadingList, setVoteDeadline, setVotes
} from "../../slices/clubSlice";
import {setChildData} from "../../../Utils/persistenceUtil";
import {setClubIds, setDisplayName, setGender, setLanguages, setUserId} from "../../slices/userSlice";

const getRefs = (firebaseDb, state) => {
    const userPath = `users/${state.auth.user.uid}/`;
    const userRef = ref(firebaseDb, userPath);

    return userRef;
}

const toFirebase = (firebaseDb, state, prevState) => {
    const userRef = getRefs(firebaseDb, state);

    const user = state.auth.user;
    const prevUser = prevState.auth.user;

    const userId = user.uid;
    if (userId !== prevUser.uid) {
        setChildData({userId}, userRef);
    }

    const clubIds = user.clubIds;
    if (clubIds !== prevUser.clubIds) {
        setChildData({clubIds}, userRef);
    }

    const displayName = user.displayName;
    if (displayName !== prevUser.displayName /*&& !arrayEquals(genres, prevClub.genres*/) {
        setChildData({displayName}, userRef);
    }

    const gender = user.gender;
    if (gender !== prevUser.gender) {
        setChildData({gender}, userRef);
    }

    const languages = user.languages;
    if (languages !== prevUser.maxMemberCount) {
        setChildData({languages}, userRef);
    }
};

const fromFirebase = (userData, dispatch) => {
    if (userData?.userId) dispatch(setUserId(userData.userId));
    if (userData?.clubIds) dispatch(setClubIds(userData.clubIds));
    if (userData?.displayName) dispatch(setDisplayName(userData.displayName));
    if (userData?.gender) dispatch(setGender(userData.gender));
    if (userData?.languages) dispatch(setLanguages(userData.languages));
}

const fromFirebaseOnce = async (firebaseDb, state, dispatch) => {
    const userRef = getRefs(firebaseDb, state);
    const userSnapshot = await get(userRef);
    const userData = userSnapshot.val();

    fromFirebase(userData, dispatch);
}

const fromFirebaseSub = (firebaseDb, state, dispatch) => {
    const userRef = getRefs(firebaseDb, state);

    return onValue(userRef, async (snapshot) => {
        const userData = snapshot.val();

        fromFirebase(userData, dispatch);
    })
}

const persistUsers = {
    toFirebase,
    fromFirebaseOnce,
    fromFirebaseSub
}

export default persistUsers