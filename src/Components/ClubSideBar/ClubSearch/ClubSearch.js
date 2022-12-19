import {SearchBarView} from "../../SearchBar/SearchBarView";
import ClubSearchResultsView from "./ClubSearchResultsView";
import {useDispatch, useSelector} from "react-redux";
import {addClubId, selectUser} from "../../../Store/slices/userSlice";
import {searchClubs} from "../../../Store/slices/clubSearchSlice";
import {updateMemberAndClubIds} from "../../../Store/slices/clubJoinSlice";

/**
 * Presenter for searching for clubs.
 */
function ClubSearch() {
    const dispatch = useDispatch();
    const results = useSelector(state => state.clubSearch.searchResults);
    const user = useSelector( selectUser );

    function joinClub(clubId) {
        dispatch(updateMemberAndClubIds({
            userId: user.uid,
            clubId,
            clubIds: user.clubIds,
        }));
    }

    function searchClubsWithQuery(query) {
        dispatch(searchClubs(query));
    }
    
    return (
        <div>
            <SearchBarView onSubmit={searchClubsWithQuery}/>
            <ClubSearchResultsView
                foundClubs={results}
                joinClub={joinClub}
            />
        </div>
    );
}

export default ClubSearch;
