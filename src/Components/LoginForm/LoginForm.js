import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting,
    selectUser,
} from "../../Store/slices/authSlice";
import { handleError } from "../../Utils/errorHandling"
import LoginFormView from "./LoginFormView";

const LoginForm = function() {
    const error = useSelector( selectAuthenticationError );
    const waiting = useSelector( selectAuthenticationIsWaiting );
    const loginStatus = useSelector( selectUser );
    const dispatch = useDispatch();
    let invalidLogin;

    useEffect( () => {
        dispatch( resetAuthenticationStatus() );
    }, [ dispatch ] );

    const handleSubmit = ( email, password ) => {
        dispatch(
            authenticate( { email, password } )
        );
    };

    const showErrorMessage = () => {
        handleError(error);
    }

    return (
        <div>
            <LoginFormView displayError={showErrorMessage} loginStatus={ loginStatus } error={ error }
                           waiting={ waiting } onSubmit={ handleSubmit }/>
        </div>
    )
}

export default LoginForm;