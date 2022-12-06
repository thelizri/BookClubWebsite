import SearchBarView from "../SearchBar/SearchBarView";
import {SearchResults} from "./SearchResults/SearchResults";

/**
 * @param {Object} props - foundBooks: book search results
 */
export default function BookSearchView(props) {
    return (
        <div>
            <SearchBarView/>
            <SearchResults/>
        </div>
    );
}
