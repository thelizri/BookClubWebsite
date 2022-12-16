import ClubListView from "./ClubListView";
import {useDispatch, useSelector} from "react-redux";
import {setClub} from "../../../Store/slices/clubSlice";
import {useEffect} from "react";
import {loadClubs} from "../../../Store/slices/userClubsStorageSlice";

function ClubList() {
    const dispatch = useDispatch();
    let userClubsInfo = useSelector(state => state.userClubsStorage.userClubs);
    const clubIds = useSelector(state => state.auth.user.clubIds);
    const currentClub = useSelector(state => state.club);

    useEffect( () => {
        dispatch(loadClubs(clubIds));
    }, [clubIds])

    useEffect( () => {
        dispatch(setClub(userClubsInfo[0]));
    }, [userClubsInfo])

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