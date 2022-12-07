import { useEffect } from "react";
import { useMatch } from "react-router";

import LoginFormView from "./LoginFormView";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticate,
  resetAuthenticationStatus,
  selectAuthenticationError,
  selectAuthenticationIsWaiting,
} from "../../Store/slices/authSlice";

const LoginForm = function() {
    const error = useSelector(selectAuthenticationError);
    const waiting = useSelector(selectAuthenticationIsWaiting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetAuthenticationStatus());
    }, [dispatch]);

    const handleSubmit = (email, password) => {
        dispatch(
        authenticate({ email, password })
        );
    };

    return(
        <div>
            <LoginFormView error={error} waiting={waiting} onSubmit={handleSubmit} />
        </div>
    )
}

export default LoginForm;