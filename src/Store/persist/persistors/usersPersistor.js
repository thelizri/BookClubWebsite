import {child, get, onValue, set} from "firebase/database";
import {
    setClubId,
    setClubOwnerId,
    setGenres,
    setLanguage,
    setMaxMembers,
    setMeetings,
    setMeetingType, setMembers, setReadingList, setVoteDeadline, setVotes
} from "../../slices/club";
import {setData} from "../../../Utils/persistenceUtil";
import {setClubIds, setDisplayName, setGender, setLanguages, setUserId} from "../../slices/userSlice";

const toFirebase = (userRef, state, prevState) => {
    const user = state.auth.user;
    const prevUser = prevState.auth.user;

    const userId = user.uid;
    if (userId !== prevUser.uid) {
        setData({userId}, userRef);
    }

    const clubIds = user.clubIds;
    if (clubIds !== prevUser.clubIds) {
        setData({clubIds}, userRef);
    }

    const displayName = user.displayName;
    if (displayName !== prevUser.displayName /*&& !arrayEquals(genres, prevClub.genres*/) {
        setData({displayName}, userRef);
    }

    const gender = user.gender;
    if (gender !== prevUser.gender) {
        setData({gender}, userRef);
    }

    const languages = user.languages;
    if (languages !== prevUser.maxMemberCount) {
        setData({languages}, userRef);
    }
};

const fromFirebase = (userData, dispatch) => {
    if (userData?.userId) dispatch(setUserId(userData.userId));
    if (userData?.clubIds) dispatch(setClubIds(userData.clubIds));
    if (userData?.displayName) dispatch(setDisplayName(userData.displayName));
    if (userData?.gender) dispatch(setGender(userData.gender));
    if (userData?.languages) dispatch(setLanguages(userData.languages));
}

const fromFirebaseOnce = async (clubRef, dispatch) => {
    const userSnapshot = await get(clubRef);
    const userData = userSnapshot.val();

    fromFirebase(userData, dispatch);
}

const fromFirebaseSub = (userRef, dispatch) => {
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