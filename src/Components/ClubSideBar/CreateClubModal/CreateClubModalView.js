import Form from "react-bootstrap/Form";
import "./CreateClubModalStyle.css";

export default function CreateClubModalView() {
    return ( <>
        {/*Button trigger modal*/ }
        <button type="button" className="btn btn-primary create-club-button"
                id="create-club-button" data-bs-toggle="modal"
                data-bs-target="#createClubModal">
            Create new club
        </button>

        {/*Modal*/ }
        <div className="modal fade" id="createClubModal" tabIndex="-1"
             aria-labelledby="createClubModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header head-footer-modal">
                        <h5 className="modal-title" id="createClubModalLabel">Create
                            club</h5>
                        <button type="button" className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form>
                            <Form.Group className={ "m-2" }
                                        controlId="formClub">
                                <Form.Label>Club name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Enter club name"/>
                            </Form.Group>
                            <Form.Group className={ "m-2" }
                                        controlId="formLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Enter language"/>
                            </Form.Group>
                            <Form.Group className={ "m-2" }
                                        controlId="formText">
                                <Form.Label>Group Size</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Enter max capacity"/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="modal-footer head-footer-modal">
                        <button type="button"
                                className="btn btn-secondary close-modal"
                                data-bs-dismiss="modal">Close
                        </button>
                        <button type="button"
                                className="btn btn-primary create-club-button">Create
                            club
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
