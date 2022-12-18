import {SearchBarView} from "../../SearchBar/SearchBarView";
import ClubSearchResultsView from "./ClubSearchResultsView";
import {useDispatch, useSelector} from "react-redux";
import {addClubId} from "../../../Store/slices/userSlice";
import {searchClubs} from "../../../Store/slices/clubSearchSlice";

/**
 * Presenter for searching for clubs.
 */
function ClubSearch() {
    const dispatch = useDispatch();
    const results = useSelector(state => state.clubSearch.searchResults);

    function joinClub(club) {
        dispatch(addClubId(club));
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
