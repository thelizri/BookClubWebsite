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

const persistUsers = {
    toFirebase,
    fromFirebaseOnce,
    fromFirebaseSub
}

const toFirebase = (userRef, state, prevState) => {
    const user = state.auth.user;
    const prevUser = prevState.auth.user;

    const userId = user.uid;
    if (userId !== prevClub.clubId) {
        setData({clubId}, clubRef);
    }

    const clubOwnerId = user.clubOwnerId;
    if (clubOwnerId !== prevClub.clubOwnerId) {
        setData({clubOwnerId}, clubRef);
    }

    const genres = user.genres;
    if (genres !== prevClub.genres /*&& !arrayEquals(genres, prevClub.genres*/) {
        setData({genres}, clubRef);
    }

    const language = user.language;
    if (language !== prevClub.language) {
        setData({language}, clubRef);
    }

    const maxMemberCount = user.maxMemberCount;
    if (maxMemberCount !== prevClub.maxMemberCount) {
        setData({maxMemberCount}, clubRef);
    }

    const meetings = user.meetings;
    if (meetings !== prevClub.meetings) {
        setData({meetings});
    }

    const meetingType = user.meetingType;
    if (meetingType !== prevClub.meetingType) {
        setData({meetingType}, clubRef);
    }

    const memberIds = user.memberIds;
    if (memberIds !== prevClub.memberIds /*&& !arrayEquals(memberIds, prevClub.memberIds*/) {
        setData({memberIds}, clubRef);
    }

    const readingList = user.readingList;
    if (readingList !== prevClub.readingList) {
        setData({readingList}, clubRef)
    }

    const voteDeadline = club.voteDeadline;
    if (voteDeadline !== prevClub.voteDeadline) {
        setData({voteDeadline}, clubRef);
    }

    const votes = club.votes;
    if (votes !== prevClub.votes) {
        setData({votes}, clubRef);
    }
};

const fromFirebaseOnce = async (clubRef, dispatch) => {
    const clubSnapshot = await get(clubRef);
    const clubData = clubSnapshot.val();

    if (clubData?.clubId) dispatch(setClubId(clubData.clubId));
    if (clubData?.clubOwnerId) dispatch(setClubOwnerId(clubData.clubOwnerId));
    if (clubData?.genres) dispatch(setGenres(clubData.genres));
    if (clubData?.language) dispatch(setLanguage(clubData.language));
    if (clubData?.maxMemberCount) dispatch(setMaxMembers(clubData.maxMemberCount));
    if (clubData?.meetings) dispatch(setMeetings(clubData.meetings));
    if (clubData?.meetingType) dispatch(setMeetingType(clubData.meetings));
    if (clubData?.memberIds) dispatch(setMembers(clubData.memberIds));
    if (clubData?.readingList) dispatch(setReadingList(clubData.readingList));
    if (clubData?.voteDeadline) dispatch(setVoteDeadline(clubData.voteDeadline));
    if (clubData?.votes) dispatch(setVotes(clubData.votes));
}

const fromFirebaseSub = (clubRef, dispatch) => {
    return onValue(clubRef, (snapshot) => {
        const clubData = snapshot.val();

        if (clubData?.clubId) dispatch(setClubId(clubData.clubId));
        if (clubData?.clubOwnerId) dispatch(setClubOwnerId(clubData.clubOwnerId));
        if (clubData?.genres) dispatch(setGenres(clubData.genres));
        if (clubData?.language) dispatch(setLanguage(clubData.language));
        if (clubData?.maxMemberCount) dispatch(setMaxMembers(clubData.maxMemberCount));
        if (clubData?.meetings) dispatch(setMeetings(clubData.meetings));
        if (clubData?.meetingType) dispatch(setMeetingType(clubData.meetings));
        if (clubData?.memberIds) dispatch(setMembers(clubData.memberIds));
        if (clubData?.readingList) dispatch(setReadingList(clubData.readingList));
        if (clubData?.voteDeadline) dispatch(setVoteDeadline(clubData.voteDeadline));
        if (clubData?.votes) dispatch(setVotes(clubData.votes));
    })
}

export default persistUsers