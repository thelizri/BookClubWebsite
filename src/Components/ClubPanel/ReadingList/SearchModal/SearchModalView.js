import { Search } from "./BookSearch/Search";
import "./SearchModalStyle.css";


function SearchModalView() {
    return ( <>
        {/*Button trigger modal*/ }
        <button type="button" className="btn" id="search-modal-button"
                data-bs-toggle="modal" data-bs-target="#searchModal">
            Search for new Books
        </button>

        {/*Modal*/ }
        <div className="modal fade" id="searchModal" tabIndex="-1"
             aria-labelledby="searchModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header head-footer-modal">
                        <h5 className="modal-title" id="searchModalLabel">Search for
                            Books</h5>
                        <button type="button" className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/*Start of body*/ }
                        <Search/>

                        {/*End of body*/ }
                    </div>
                    <div className="modal-footer head-footer-modal">
                        <button type="button"
                                className="btn btn-secondary close-modal"
                                data-bs-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default SearchModalView;