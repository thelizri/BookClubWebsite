import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting,
} from "../../Store/slices/userSlice";
import { validateEmail, validatePassword } from "../../Utils/validationUtil";

import { RegistrationFormView } from "./RegistrationFormView";

export const RegistrationForm = function() {
    const error = useSelector( selectAuthenticationError );
    const waiting = useSelector( selectAuthenticationIsWaiting );
    const dispatch = useDispatch();
    const signupMode = true;

    useEffect( () => {
        dispatch( resetAuthenticationStatus() );
    }, [] );

    const handleSubmit = ( firstName, lastName, gender, unprocessedLanguages, email, password, passwordConfirm ) => {
        const displayName = firstName + " " + lastName;
        const languages = unprocessedLanguages.state.selected;
        dispatch(
            authenticate(
                {
                    signup : signupMode,
                    displayName,
                    gender,
                    languages,
                    email,
                    password,
                    passwordConfirm
                }
            )
        );
    };

    const validEmail = () => {
        return validateEmail( error );
    }

    const validPassword = () => {
        return validatePassword( error );
    }

    return (
        <div>
            <RegistrationFormView error={ error } waiting={ waiting }
                                  validEmail={ validEmail }
                                  validPassword={ validPassword }
                                  onSubmit={ handleSubmit }/>
        </div>
    )
}
