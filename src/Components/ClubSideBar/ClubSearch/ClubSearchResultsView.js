/**
 * Club Search Results View
 *
 * @param {foundClubs} - search results.
 * @param {joinClub} - join club callback.
 * @param {joinClub} - join club callback.
 */
const ClubSearchResultsView = ({
   foundClubs = [],
   joinClub = (id) => console.log({joinClub: id}),
}) => {
    function renderListItem(club, index) {
        const ID = `club-search-results-${club.clubId}`;
        const ModalID = ID + "-modal";
        const ModalLabelID = ModalID + "-label";

        function handleSubmit(event) {
            joinClub(club.clubId);
            event.preventDefault();
        }
        
        return (
            <div key={index}>
                <li
                    className="list-group-item list-group-item-action"
                    id={ID}
                    href={"#" + ModalID}
                    key={club.clubId}
                    data-bs-toggle="modal"
                >
                    {club.clubName}
                </li>
                {/*Modal*/}
                <div className="modal fade" id={ModalID} tabIndex="-1"
                     aria-labelledby={ModalLabelID} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header head-footer-modal">
                                <h5 className="modal-title" id={ModalLabelID}>{club.clubName}</h5>
                                <button type="button" className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer head-footer-modal">
                                <button type="button"
                                        className="btn btn-secondary close-modal"
                                        data-bs-dismiss="modal">Close
                                </button>
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                >
                                    Join Club
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <ul className="list-group">{ foundClubs.map(renderListItem) }</ul>
    );
}

export default ClubSearchResultsView;
