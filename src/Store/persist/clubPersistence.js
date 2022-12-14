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

        const club = state.club;
        const clubId = club.clubId;
        const prevClub = prevState.club;

        const clubPath = `clubs/${clubId}/`;
        const clubRef = ref(firebaseDb, clubPath);

        const toFirebase = () => {
            const setData = (payload, dbRef) => {
                const attributePath = `${Object.keys(payload)[0]}`;
                set(child(dbRef, attributePath), payload[attributePath]);
            }

            if (clubId !== prevClub.clubId) {
                setData({clubId}, clubRef);
            }

            const clubOwnerId = club.clubOwnerId;
            if (clubOwnerId !== prevClub.clubOwnerId) {
                setData({clubOwnerId}, clubRef);
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
                setData({meetings});
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

        const fromFirebaseOnce = async () => {
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

        const fromFirebaseSub = () => {
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

