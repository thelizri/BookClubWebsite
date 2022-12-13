import {child, get, getDatabase, onValue, ref, set} from "firebase/database";
import {setFirebaseReady} from "../slices/userSlice";
import {
    setClubId,
    setClubOwnerId,
    setGenres,
    setLanguage,
    setMaxMembers,
    setMeetings,
    setMeetingType, setMembers, setReadingList, setVoteDeadline, setVotes
} from "../slices/club";
import {setAddress, setCurrentMeeting, setMeetingId, setMeetingLink, setMeetingTime} from "../slices/meetingSlice";


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
        const clubId = club.id;
        const prevClub = prevState.club;

        const book = state.book;
        const bookId = book.googleBooksId;
        const prevBook = prevState.book;

        const meeting = state.meeting;
        const meetingId = meeting.id;
        const prevMeeting = prevState.meeting;

        const clubPath = `clubs/${clubId}/`;
        const clubRef = ref(firebaseDb, clubPath);
        const bookRef = ref(firebaseDb, clubPath + `readingList/${bookId}`);
        const meetingRef = ref(firebaseDb, clubPath + `meetings/${meetingId}`);

        const toFirebase = () => {
            const setData = (payload, dbRef) => {
                const attributePath = `${Object.keys(payload)[0]}`;
                set(child(dbRef, attributePath), payload[attributePath]);
            }

            if(clubId !== prevClub.id) {
                setData({ clubId }, clubRef);
            }

            const clubOwnerId = club.clubOwnerId;
            if(clubOwnerId !== prevClub.clubOwnerId) {
                setData({ clubOwnerId }, clubRef);
            }

            const genres = club.genres;
            if(genres !== prevClub.genres /*&& !arrayEquals(genres, prevClub.genres*/)) {
                setData({ genres }, clubRef);
            }

            const language = club.language;
            if(language !== prevClub.language) {
                setData({ language }, clubRef);
            }

            const maxMemberCount = club.maxMemberCount;
            if(maxMemberCount !== prevClub.maxMemberCount) {
                setData({ maxMemberCount }, clubRef);
            }

            const meetings = club.meetings;
            if(meetings !== prevClub.meetings) {
                setData({ meetings });
            }

            /*if(meetingId !== prevMeeting.id) {
                setData({ meetingId }, meetingRef);
            }

            const address = meeting.address;
            if(address !== prevMeeting.address) {
                setData({ address }, meetingRef);
            }

            const currentMeeting = meeting.currentMeeting;
            if(currentMeeting !== prevMeeting.currentMeeting) {
                setData({ currentMeeting }, meetingRef);
            }

            const meetingLink = meeting.meetingLink;
            if(meetingLink !== prevMeeting.meetingLink) {
                setData({ meetingLink }, meetingRef);
            }

            const meetingTime = meeting.meetingTime;
            if(meetingTime !== prevMeeting.meetingTime) {
                setData({ meetingTime }, meetingRef);
            }*/

            const meetingType = club.meetingType;
            if(meetingType !== prevMeeting.meetingType) {
                setData({ meetingType }, clubRef);
            }

            const memberIds = club.memberIds;
            if(memberIds !== prevClub.memberIds /*&& !arrayEquals(memberIds, prevClub.memberIds*/)) {
                setData({ memberIds }, clubRef);
            }

            const readingList = club.readingList;
            if(readingList !== prevClub.readingList) {
                setData({ readingList }, clubRef)
            }

            /*if(bookId !== prevBook.googleBooksId) {
                setData({ bookId }, bookRef);
            }

            const addedByUserId = book.addedByUserId;
            if(addedByUserId !== prevBook.addedByUserId) {
                setData({ addedByUserId }, bookRef);
            }

            const currentPage = book.currentPage;
            if(currentPage !== prevBook.currentPage) {
                setData({ currentPage }, bookRef);
            }

            const currentlyReading = book.currentlyReading;
            if(currentlyReading !== prevBook.currentlyReading) {
                setData({ currentlyReading }, bookRef);
            }*/

            const voteDeadline = club.voteDeadline;
            if(voteDeadline !== prevClub.voteDeadline) {
                setData({ voteDeadline }, clubRef);
            }

            const votes = club.votes;
            if(votes !== prevClub.votes) {
                setData({ votes }, clubRef);
            }
        };

        const fromFirebaseOnce = async () => {
            const clubData = await get(clubRef).val();
            const meetingData = await get(meetingRef).val();
            const bookData = await get(bookRef).val();

            if(clubData?.id) dispatch(setClubId(clubData.id));
            if(clubData?.clubOwnerId) dispatch(setClubOwnerId(clubData.clubOwnerId));
            if(clubData?.genres) dispatch(setGenres(clubData.genres));
            if(clubData?.language) dispatch(setLanguage(clubData.language));
            if(clubData?.maxMemberCount) dispatch(setMaxMembers(clubData.maxMemberCount));
            if(clubData?.meetings) dispatch(setMeetings(clubData.meetings));
            if(clubData?.meetingType) dispatch(setMeetingType(clubData.meetings));
            if(clubData?.memberIds) dispatch(setMembers(clubData.memberIds));
            if(clubData?.readingList) dispatch(setReadingList(clubData.readingList));
            if(clubData?.voteDeadline) dispatch(setVoteDeadline(clubData.voteDeadline));
            if(clubData?.votes) dispatch(setVotes(clubData.votes));
            /*if(meetingData?.id) dispatch(setMeetingId(meetingData.id));
            if(meetingData?.address) dispatch(setAddress(meetingData.address));
            if(meetingData?.currentMeeting) dispatch(setCurrentMeeting(meetingData.currentMeeting));
            if(meetingData?.meetingLink) dispatch(setMeetingLink(meetingData.meetingLink));
            if(meetingData?.meetingTime) dispatch(setMeetingTime(meetingData.meetingTime));*/
        }

        const fromFirebaseSub = () => {
            return onValue(clubRef, (snapshot) => {
                const clubData = snapshot.val();

                if(clubData?.id) dispatch(setClubId(clubData.id));
                if(clubData?.clubOwnerId) dispatch(setClubOwnerId(clubData.clubOwnerId));
                if(clubData?.genres) dispatch(setGenres(clubData.genres));
                if(clubData?.language) dispatch(setLanguage(clubData.language));
                if(clubData?.maxMemberCount) dispatch(setMaxMembers(clubData.maxMemberCount));
                if(clubData?.meetings) dispatch(setMeetings(clubData.meetings));
                if(clubData?.meetingType) dispatch(setMeetingType(clubData.meetings));
                if(clubData?.memberIds) dispatch(setMembers(clubData.memberIds));
                if(clubData?.readingList) dispatch(setReadingList(clubData.readingList));
                if(clubData?.voteDeadline) dispatch(setVoteDeadline(clubData.voteDeadline));
                if(clubData?.votes) dispatch(setVotes(clubData.votes));
            })
        }

        if(userId) toFirebase();
        if(prevUserId && !userId) unsubscribe();
        if(userId && !prevUserId) {(
            async () => {
                await fromFirebaseOnce();
                dispatch(setFirebaseReady());
                unsubscribe = fromFirebaseSub();
            })()}

        /*if(userId && prevUserId === userId) {
            state.auth.user.clubIds.map(
                toFirebase(
                    store.getState,
                    prevState,
                    ref(firebaseDb, `${REF}/${userId}/${persistor}`)
                )
            )
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
        }*/

        prevState = store.getState();
    })
}