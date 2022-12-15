import {SearchBarView} from "../../SearchBar/SearchBarView";
import SearchResultsView from "../../SearchResults/SearchResultsView";

/**
 * Presenter for searching for clubs.
 */
function ClubSearch() {
    // DUMMY
    let results = [
        {clubName: "Club A"}
    ];

    // Render a single search result.
    function renderResult(club) {
        return (
            <div> {
                club.clubName
            } </div>
        );
    }
    
    return (
        <div>
            <SearchBarView/>
            <SearchResultsView items={results.map(renderResult)}/>
        </div>
    );
}

export default ClubSearch;
