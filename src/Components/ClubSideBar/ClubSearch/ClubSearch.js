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
            clubId: 1,
        },
        {
            clubName: "Club B",
            clubId: 2,
        }
    ];
    
    return (
        <div>
            <SearchBarView/>
            <ClubSearchResultsView
                foundClubs={results}
                // joinClub={() => {}}
            />
        </div>
    );
}

export default ClubSearch;
