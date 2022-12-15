import {SearchBarView} from "../../SearchBar/SearchBarView";
import ClubSearchResultsView from "./ClubSearchResultsView";

/**
 * Presenter for searching for clubs.
 */
function ClubSearch() {
    // DUMMY
    let results = [
        {
            clubName: "Club A",
            id: 1,
        },
        {
            clubName: "Club B",
            id: 2,
        }
    ];
    
    return (
        <div>
            <SearchBarView/>
            <ClubSearchResultsView foundClubs={results}/>
        </div>
    );
}

export default ClubSearch;
