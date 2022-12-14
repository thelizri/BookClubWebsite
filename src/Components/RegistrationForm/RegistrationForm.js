import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting,
    selectAuthenticationSuccess,
    selectUser,
    setUser,
} from "../../Store/slices/userSlice";

import { RegistrationFormView } from "./RegistrationFormView";
import {validateEmail, validatePassword} from "../../Utils/validationUtil";

export const RegistrationForm = function() {
    const error = useSelector( selectAuthenticationError );
    const waiting = useSelector( selectAuthenticationIsWaiting );
    const user = useSelector( selectUser )
    const dispatch = useDispatch();
    const signupMode = true;

    useEffect( () => {
        dispatch( resetAuthenticationStatus() );
    }, [] );

    const handleSubmit = ( firstName, lastName, gender, email, password, passwordConfirm ) => {
        const displayName = firstName + " " + lastName;
        dispatch(
            authenticate(
                { signup : signupMode, displayName, gender, email, password, passwordConfirm }
            )
        );
    };

    const validEmail = () => {
        return validateEmail(error);
    }

    const validPassword = () => {
        return validatePassword(error);
    }

    return (
        <div>
            <RegistrationFormView error={ error } waiting={ waiting }
                                  validEmail={ validEmail } validPassword={ validPassword }
                                  onSubmit={ handleSubmit }/>
        </div>
    )
}
