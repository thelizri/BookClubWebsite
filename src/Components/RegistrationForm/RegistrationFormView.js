import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { NavigationBarView } from "../NavigationBar/NavigationBarView";

export const RegistrationFormView = function( {
                                                  error = "",
                                                  waiting = false,
                                                  validEmail = () => {},
                                                  validPassword = () => {},
                                                  onSubmit = ( email, password, passwordConfirm ) => {},
                                              } ) {
    const firstName = useRef();
    const lastName = useRef();
    const gender = useRef();
    const languages = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();

    const handleSubmit = ( event ) => {
        onSubmit(
            firstName.current.value,
            lastName.current.value,
            gender.current,
            languages.current,
            email.current.value,
            password.current.value,
            passwordConfirm.current.value
        );
        event.preventDefault();
    };

    const data = [ { value : 'One', selected : true }, { value : 'Two' },
        { value : 'Three' } ];

    return ( <>
        <NavigationBarView/>
        <div className={ "container" }>
            <Form id={ "registrationForm" }>
                {/*First Name*/ }
                <Form.Group controlId="formRegFirstName" className={ "m-2" }>
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" ref={ firstName }/>
                </Form.Group>

                {/*Last Name*/ }
                <Form.Group controlId="formRegLastName" className={ "m-2" }>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" ref={ lastName }/>
                </Form.Group>

                {/*Gender*/ }
                <Form.Group controlId="formRegGender" className={ "m-2" }>
                    <Form.Label>Gender (optional)</Form.Label>
                    <div key={ "inline-radio" }
                         onChange={ event => gender.current =
                             event.target.value }>
                        <Form.Check inline name={ "gender1" } value="Male"
                                    type="radio" label="Male"
                                    id={ "male-radio" }/>
                        <Form.Check inline name={ "gender1" } value="Female"
                                    type="radio" label="Female"
                                    id={ "female-radio" }/>
                        <Form.Check inline name={ "gender1" } value="Other"
                                    type="radio" label="Other"
                                    id={ "other-radio" }/>
                    </div>
                </Form.Group>

                {/*Languages*/ }
                <Form.Group controlId="formRegLanguages" className={ "m-2" }>
                    <Form.Label>Languages</Form.Label>
                    <DropdownMultiselect
                        options={ [ "Swedish", "English", "Arabic", "Chinese",
                            "German", "Korean", "Japanese", "Spanish",
                            "Urdu" ] }
                        name="languages"
                        ref={ languages }
                    />
                </Form.Group>

                {/*Email*/ }
                <Form.Group controlId="formRegEmail" className={ "m-2" }>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                  ref={ email } isInvalid={ validEmail() }/>
                    <Form.Control.Feedback type="invalid"
                                           className={ "regFormEmailFeedback" }>
                        Email error message
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/*Password*/ }
                <Form.Group controlId="formRegPassword" className={ "m-2" }>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  ref={ password }
                                  isInvalid={ validPassword() }/>
                    <Form.Control.Feedback type="invalid"
                                           className={ "regFormPasswordFeedback" }>
                        Password error message
                    </Form.Control.Feedback>
                </Form.Group>

                {/*Password confirm*/ }
                <Form.Group controlId="formRegConfirmPassword"
                            className={ "m-2" }>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  ref={ passwordConfirm }/>
                </Form.Group>

                {/*Submit button*/ }
                <Button type="submit" className="btn btn-primary m-2"
                        onClick={ handleSubmit }>SIGN UP</Button>
            </Form>
        </div>
    </> );
};