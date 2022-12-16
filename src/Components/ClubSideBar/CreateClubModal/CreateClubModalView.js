import Form from "react-bootstrap/Form";
import "./CreateClubModalStyle.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import React, {useRef} from "react";

export const CreateClubModalView = function ({  invalidClubName,
                                                mismatchingGender,
                                                onSubmit,
                                             }) {
    const clubName = useRef();
    const language = useRef();
    const maxMemberCount = useRef();
    const genres = useRef();
    const gender = useRef();
    const meetingType = useRef();

    const handleSubmit = event => {
        onSubmit(
            clubName.current.value,
            language.current.value,
            maxMemberCount.current.value,
            gender.current,
            genres.current,
            meetingType.current
        )
        event.preventDefault();
    }

    return ( <>
        {/*Button trigger modal*/ }
        <button type="button" class="btn btn-primary create-club-button"
                id="create-club-button" data-bs-toggle="modal"
                data-bs-target="#createClubModal">
            Create new club
        </button>

        {/*Modal*/ }
        <div class="modal fade" id="createClubModal" tabindex="-1"
             aria-labelledby="createClubModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header head-footer-modal">
                        <h5 class="modal-title" id="createClubModalLabel">Create
                            club</h5>
                        <button type="button" class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Form id={ "clubCreation" }>
                            <Form.Group className={ "m-2" }
                                        controlId="formText">
                                <Form.Label>Club name</Form.Label>
                                <Form.Control type="text"
                                              isInvalid={invalidClubName}
                                              ref={clubName}
                                              placeholder="Give the club a name"/>
                                <Form.Control.Feedback type="invalid"
                                                       className={ "clubNameFeedback" }>
                                    ClubName error message
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className={ "m-2" }
                                        controlId="formText">
                                <Form.Label>Max member capacity (optional)</Form.Label>
                                <Form.Control type="number"
                                              min="1"
                                              max="100"
                                              onChange={e => console.log(e.target.value)}
                                              ref={maxMemberCount}
                                              defaultValue="1"/>
                            </Form.Group>
                            <Form.Group controlId={"createClubFormLanguage"} className={ "m-2" }>
                                <Form.Label>Language (optional)</Form.Label>
                                <Form.Select aria-label="Default select example"
                                             className={ "m-2" }
                                             placeholder="In what language will your club read?"
                                             ref={ language }>
                                    <option>Open this select menu</option>
                                    <option value="Swedish">Swedish</option>
                                    <option value="English">English</option>
                                    <option value="Arabic">Arabic</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="German">German</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Korean">Korean</option>
                                    <option value="Polish">Polish</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Urdu">Urdu</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="createClubFormGenres" className={ "m-2" }>
                                <Form.Label>Genres (optional)</Form.Label>
                                <DropdownMultiselect
                                    placeholder={"What genres will your club read?"}
                                    options={ [ "Action", "Biography", "Business", "Children's",
                                        "Classics", "Comics", "Fantasy", "Historical Fiction",
                                        "History", "Horror", "Mystery", "Non-fiction", "Poetry",
                                        "Psychology", "Romance", "Science", "Science Fiction",
                                        "Self Help"] }
                                    name="languages"
                                    ref={ genres }
                                />
                            </Form.Group>
                            <Form.Group controlId="createClubFormGender" className={ "m-2" }>
                                <Form.Label>Gender (optional)</Form.Label>
                                <div key={ "inline-radio" }
                                     onChange={ event => gender.current =
                                         event.target.value }>
                                    <Form.Check inline name={ "gender1" } value="Male"
                                                type="radio" label="Male"
                                                id={ "male-radio" }
                                                isInvalid={mismatchingGender}/>
                                    <Form.Check inline name={ "gender1" } value="Female"
                                                type="radio" label="Female"
                                                id={ "female-radio" }
                                                isInvalid={mismatchingGender}/>
                                    <Form.Check inline name={ "gender1" } value="All"
                                                type="radio" label="All"
                                                id={ "other-radio" }
                                                isInvalid={mismatchingGender}/>
                                    <Form.Control.Feedback type="invalid"
                                                           className={ "clubGenderFeedback" }>
                                        ClubName error message
                                    </Form.Control.Feedback>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="createClubFormMeetingType" className={ "m-2" }>
                                <Form.Label>Meeting Type</Form.Label>
                                <div key={ "inline-radio" }
                                     onChange={ event => meetingType.current =
                                         event.target.value }>
                                    <Form.Check inline name={ "meetingType1" } value="Physical"
                                                type="radio" label="Physical"
                                                id={ "male-radio" }/>
                                    <Form.Check inline name={ "meetingType1" } value="Online"
                                                type="radio" label="Online"
                                                id={ "female-radio" }/>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                    <div class="modal-footer head-footer-modal">
                        <button type="button"
                                class="btn btn-secondary close-modal"
                                data-bs-dismiss="modal">Close
                        </button>
                        <button type="button"
                                class="btn btn-primary create-club-button"
                                onClick={handleSubmit}>
                            Create club
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
