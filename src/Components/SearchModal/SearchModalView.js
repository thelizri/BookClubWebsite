import { SearchResultsView } from "../BookSearch/SearchResultsView";
import { SearchBarView } from "../SearchBar/SearchBarView";
import "./SearchModalStyle.css";


export const SearchModalView = function( {
                                             foundBooks,
                                             error,
                                             onSelection,
                                             onSubmit,
                                             inputQuery
                                         } ) {
    const onQuery = ( query ) => {
        inputQuery( query )
    }

    const onSubmisson = () => {
        onSubmit()
    }

    return ( <>
        {/*Button trigger modal*/ }
        <button type="button" class="btn" id="search-modal-button"
                data-bs-toggle="modal" data-bs-target="#searchModal">
            Search for new Books
        </button>

        {/*Modal*/ }
        <div class="modal fade" id="searchModal" tabindex="-1"
             aria-labelledby="searchModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header head-footer-modal">
                        <h5 class="modal-title" id="searchModalLabel">Search for
                            Books</h5>
                        <button type="button" class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {/*Start of body*/ }
                        <SearchBarView onQuery={ inputQuery }
                                       onSubmisson={ onSubmit }/>
                        <SearchResultsView/>
                        {/*End of body*/ }
                    </div>
                    <div class="modal-footer head-footer-modal">
                        <button type="button"
                                class="btn btn-secondary close-modal"
                                data-bs-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </> );
}