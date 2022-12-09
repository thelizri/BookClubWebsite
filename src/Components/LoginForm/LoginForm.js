import { useEffect } from "react";
import { useMatch } from "react-router";


import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting, selectUser,
} from "../../Store/slices/authSlice";
import LoginFormView from "./LoginFormView";

const LoginForm = function() {
    const error = useSelector(selectAuthenticationError);
    const waiting = useSelector(selectAuthenticationIsWaiting);
    const loginStatus = useSelector(selectUser);
    const dispatch = useDispatch();
    const signupMode = false;
    const passwordConfirm = "";

    useEffect(() => {
        dispatch(resetAuthenticationStatus());
    }, [dispatch, signupMode]);

    const handleSubmit = (email, password) => {
        dispatch(
        authenticate({ signup: signupMode, email, password, passwordConfirm })
        );
    };

    return(
        <div>
            <LoginFormView loginStatus={loginStatus} error={error} waiting={waiting} onSubmit={handleSubmit} />
        </div>
    )
}

export default LoginForm;