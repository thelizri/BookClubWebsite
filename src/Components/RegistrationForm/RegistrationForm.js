import { useEffect } from "react";
import { useMatch } from "react-router";

import RegistrationFormView from "./RegistrationFormView";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticate,
  resetAuthenticationStatus,
  selectAuthenticationError,
  selectAuthenticationIsWaiting,
} from "../../Store/slices/authSlice";

const RegistrationForm = function() {
    const error = useSelector(selectAuthenticationError);
    const waiting = useSelector(selectAuthenticationIsWaiting);
    const dispatch = useDispatch();
    const signupMode = true;

    useEffect(() => {
        dispatch(resetAuthenticationStatus());
    }, [dispatch, signupMode]);

    const handleSubmit = (email, password, passwordConfirm) => {
        dispatch(
        authenticate({ signup: signupMode, email, password, passwordConfirm })
        );
    };

    return(
        <div>
            <RegistrationFormView error={error} waiting={waiting} onSubmit={handleSubmit} />
        </div>
    )
}

export default RegistrationForm;
