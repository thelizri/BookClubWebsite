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
import {setData} from "../../../Utils/persistenceUtil";
import {setClubIds, setDisplayName, setGender, setLanguages, setUserId} from "../../slices/userSlice";

const toFirebase = (clubRef, state, prevState) => {
    const club = state.club;
    const prevClub = prevState.club;

    const clubId = club.clubId;
    if (clubId !== prevClub.clubId) {
        setData({clubId}, clubRef);
    }

    const clubOwnerId = club.clubOwnerId;
    if (clubOwnerId !== prevClub.clubOwnerId) {
        setData({clubOwnerId}, clubRef);
    }

    const currentlyReadingId = club.currentlyReadingId;
    if (currentlyReadingId !== prevClub.currentlyReadingId) {
        setData({currentlyReadingId}, clubRef)
    }

    const genres = club.genres;
    if (genres !== prevClub.genres /*&& !arrayEquals(genres, prevClub.genres*/) {
        setData({genres}, clubRef);
    }

    const language = club.language;
    if (language !== prevClub.language) {
        setData({language}, clubRef);
    }

    const maxMemberCount = club.maxMemberCount;
    if (maxMemberCount !== prevClub.maxMemberCount) {
        setData({maxMemberCount}, clubRef);
    }

    const meetings = club.meetings;
    if (meetings !== prevClub.meetings) {
        setData({meetings}, clubRef);
    }

    const meetingType = club.meetingType;
    if (meetingType !== prevClub.meetingType) {
        setData({meetingType}, clubRef);
    }

    const memberIds = club.memberIds;
    if (memberIds !== prevClub.memberIds /*&& !arrayEquals(memberIds, prevClub.memberIds*/) {
        setData({memberIds}, clubRef);
    }

    const readingList = club.readingList;
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

const fromFirebase = (clubData, dispatch) => {
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

const fromFirebaseOnce = async (clubRef, dispatch) => {
    const clubSnapshot = await get(clubRef);
    const clubData = clubSnapshot.val();

    fromFirebase(clubData, dispatch);
}

const fromFirebaseSub = (clubRef, dispatch) => {
    return onValue(clubRef, (snapshot) => {
        const clubData = snapshot.val();

        fromFirebase(clubData, dispatch);
    })
}

const persistClubs = {
    toFirebase,
    fromFirebaseOnce,
    fromFirebaseSub
}

export default persistClubs