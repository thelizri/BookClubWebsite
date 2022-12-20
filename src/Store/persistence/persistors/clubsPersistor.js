import {get, onValue, ref} from "firebase/database";
import {
    setClubId,
    setClubOwnerId, setCurrentlyReadingId, setGender,
    setGenres,
    setLanguage,
    setMaxMembers, setMeeting,
    setMeetingType, setMembers, setReadingList, setVotes
} from "../../slices/clubSlice";
import {setParentData, setChildData} from "../../../Utils/persistenceUtil";
import {setLatestCreatedClubId} from "../../slices/clubCreationSlice";

const getRefs = (firebaseDb, state) => {
    const clubPath = `clubs/${state.club.clubId}/`;
    const clubRef = ref(firebaseDb, clubPath);

    const createdClubPath = `clubs/${state.clubCreation.latestCreatedClubId}`;
    const createdClubRef = ref(firebaseDb, createdClubPath);

    const clubMetaDataPath = "clubMetaData/";
    const clubMetaDataRef = ref(firebaseDb, clubMetaDataPath);
    const clubNamesRef = ref(firebaseDb, clubMetaDataPath + "/clubNames");

    const clubToBeJoinedPath = `clubs/${state.clubJoin.clubToBeJoined.clubId}`
    const clubToBeJoinedRef = ref(firebaseDb, clubToBeJoinedPath);

    return {
        clubRef,
        createdClubRef,
        clubMetaDataRef,
        clubNamesRef,
        clubToBeJoinedRef
    }
}

const toFirebase = (firebaseDb, state, prevState) => {
    const {
        clubRef,
        createdClubRef,
        clubMetaDataRef,
        clubNamesRef,
        clubToBeJoinedRef} = getRefs(firebaseDb, state);

    const createdClub = state.clubCreation.clubToBeCreated;
    const prevCreatedClub = prevState.clubCreation.clubToBeCreated;

    const latestCreatedClubId = state.clubCreation.latestCreatedClubId;
    let clubName = state.clubCreation.clubToBeCreated.clubName;

    if( createdClub !== prevCreatedClub ) {
        setParentData(createdClub, createdClubRef);
        setChildData({latestCreatedClubId}, clubMetaDataRef);
        setChildData(clubName, clubNamesRef);
    }

    let memberIds = state.clubJoin.clubToBeJoined.memberIds;
    if( memberIds !== prevState.clubJoin.clubToBeJoined.memberIds) {
        setChildData({memberIds}, clubToBeJoinedRef)
    }

    const club = state.club;
    const prevClub = prevState.club;

    const clubId = club.clubId;
    if (clubId !== prevClub.clubId) {
        setChildData({clubId}, clubRef);
    }

    clubName = club.clubName;
    if(clubName !== prevClub.clubName) {
        setChildData({clubName}, clubRef);
    }

    const clubOwnerId = club.clubOwnerId;
    if (clubOwnerId !== prevClub.clubOwnerId) {
        setChildData({clubOwnerId}, clubRef);
    }

    if( club.currentlyReadingId ) {
        const currentlyReadingId = club.currentlyReadingId;
        if( currentlyReadingId !== prevClub.currentlyReadingId ) {
            setChildData( { currentlyReadingId }, clubRef );
        }
    }

    if( club.gender ) {
        const gender = club.gender;
        if( gender !== prevClub.gender ) {
            setChildData( { gender }, clubRef );
        }
    }

    if( club.genres ) {
        const genres = club.genres;
        if( genres !== prevClub.genres ) {
            setChildData( { genres }, clubRef );
        }
    }

    if( club.language ) {
        const language = club.language;
        if( language !== prevClub.language ) {
            setChildData( { language }, clubRef );
        }
    }

    const maxMemberCount = club.maxMemberCount;
    if (maxMemberCount !== prevClub.maxMemberCount) {
        setChildData({maxMemberCount}, clubRef);
    }

    if( club.meeting ) {
        const meeting = club.meeting;
        if( meeting !== prevClub.meeting ) {
            setChildData( { meeting }, clubRef );
        }
    }

    const meetingType = club.meetingType;
    if (meetingType !== prevClub.meetingType) {
        setChildData({meetingType}, clubRef);
    }

    memberIds = club.memberIds;
    if (memberIds !== prevClub.memberIds) {
        setChildData({memberIds}, clubRef);
    }

    if( club.readingList ) {
        const readingList = club.readingList;
        if( readingList !== prevClub.readingList ) {
            setChildData( { readingList }, clubRef )
        }
    }

    if( club.votes ) {
        const votes = club.votes;
        if( votes !== prevClub.votes ) {
            setChildData( { votes }, clubRef );
        }
    }
};

const fromFirebase = (dispatch, clubData, createdClubData) => {
    if (createdClubData?.latestCreatedClubId) dispatch(setLatestCreatedClubId(createdClubData.latestCreatedClubId));
    if (clubData?.clubId) dispatch(setClubId(clubData.clubId));
    if (clubData?.clubOwnerId) dispatch(setClubOwnerId(clubData.clubOwnerId));
    if (clubData?.gender) dispatch(setGender(clubData.gender));
    if (clubData?.genres) dispatch(setGenres(clubData.genres));
    if (clubData?.language) dispatch(setLanguage(clubData.language));
    if (clubData?.maxMemberCount) dispatch(setMaxMembers(clubData.maxMemberCount));
    if (clubData?.meeting) dispatch(setMeeting(clubData.meeting));
    if (clubData?.meetingType) dispatch(setMeetingType(clubData.meetingType));
    if (clubData?.memberIds) dispatch(setMembers(clubData.memberIds));
    if (clubData?.readingList) dispatch(setReadingList(clubData.readingList));
    if (clubData?.votes) dispatch(setVotes(clubData.votes));
    if (clubData?.currentlyReadingId) dispatch(setCurrentlyReadingId(clubData.currentlyReadingId));
}

const fromFirebaseOnce = async (firebaseDb, state, dispatch) => {
    const { clubRef, createdClubRef } = getRefs(firebaseDb, state);

    const clubSnapshot = await get(clubRef);
    const clubData = clubSnapshot.val();
    const createdClubSnapshot = await get(createdClubRef);
    const createdClubData = createdClubSnapshot.val();

    fromFirebase(dispatch, clubData, createdClubData);
}

const fromFirebaseSub = (firebaseDb, state, dispatch) => {
    const { clubRef, createdClubRef } = getRefs(firebaseDb, state);

    const clubUnsub = onValue(clubRef, snapshot => {
        const clubData = snapshot.val();

        fromFirebase(dispatch, clubData);
    })

    const createdClubUnsub = onValue(createdClubRef, snapshot => {
        const createdClubData = snapshot.val();

        if (createdClubData?.latestCreatedClubId)
            dispatch(setLatestCreatedClubId(createdClubData.latestCreatedClubId));
    })

    return [clubUnsub, createdClubUnsub]
}

const persistClubs = {
    toFirebase,
    fromFirebaseOnce,
    fromFirebaseSub
}

export default persistClubs