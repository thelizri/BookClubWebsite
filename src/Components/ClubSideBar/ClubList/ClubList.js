import ClubListView from "./ClubListView";
import {useDispatch, useSelector} from "react-redux";
import {setClub} from "../../../Store/slices/clubSlice";
import {useEffect} from "react";
import {loadClubs} from "../../../Store/slices/userClubsStorageSlice";

const CLUB_DUMMY = {
    //clubs : [],
    clubId : 1,
    //clubOwnerId : "irsPW5zlE4SPq5KwvnT3Snq10w63",
    clubName : "KTH deckarklubb",
    //currentlyReadingId : null,
    genres : [ "Western", "Mystery" ],
    language : "Korean",
    maxMemberCount : 3,
    //meetings : [],
    meetingType : "Physical",
    memberIds : [ "irsPW5zlE4SPq5KwvnT3Snq10w63",
        "cdWAiHj65ya8M5JdTQJguZYouZU2" ],
    //readingList : [],
    //voteDeadline : null,
    //votes : [],
}

function ClubList() {
    const dispatch = useDispatch();
    let userClubsInfo = useSelector(state => state.userClubsStorage.userClubs);
    const clubIds = useSelector(state => state.auth.user.clubIds);
    const currentClub = useSelector(state => state.club);

    useEffect( () => {
        dispatch(loadClubs(clubIds));
    }, [clubIds])

    function setCurrentClub(newCurrentClub) {
        dispatch(setClub(newCurrentClub));
    }

    return (
        <ClubListView
            clubs={userClubsInfo}
            currentClub={currentClub}
            setCurrentClub={setCurrentClub}
        />
    );
}

export default ClubList;