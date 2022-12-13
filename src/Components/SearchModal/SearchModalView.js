import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {Search} from "../BookSearch/Search";


function SearchModalView() {
    return(<>
        {/*Button trigger modal*/}
        <button type="button" class="btn btn-primary" id="search-modal" data-bs-toggle="modal" data-bs-target="#searchModal">
            Search for new Books
        </button>

        {/*Modal*/}
        <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header head-footer-modal">
                        <h5 class="modal-title" id="searchModalLabel">Search for Books</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {/*Start of body*/}
                        <Search />

                        {/*End of body*/}
                    </div>
                    <div class="modal-footer head-footer-modal">
                        <button type="button" class="btn btn-secondary close-modal" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default SearchModalView;