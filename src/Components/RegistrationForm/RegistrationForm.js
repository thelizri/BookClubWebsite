import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting,
} from "../../Store/slices/authSlice";
import {
    selectUser,
    setFirstName,
    setLastName,
} from "../../Store/slices/userInfo";
import {
    selectUsers,
    setUsers,
} from "../../Store/slices/metaData";

import { RegistrationFormView } from "./RegistrationFormView";

export const RegistrationForm = function() {
    const error = useSelector( selectAuthenticationError );
    const waiting = useSelector( selectAuthenticationIsWaiting );
    const user = useSelector( selectUser )
    const users = useSelector( selectUsers );
    const dispatch = useDispatch();
    const signupMode = true;

    useEffect( () => {
        dispatch( resetAuthenticationStatus() );
    }, [ dispatch, signupMode ] );

    const handleSubmit = ( firstName, lastName, email, password, passwordConfirm ) => {
        dispatch(
            authenticate(
                { signup : signupMode, email, password, passwordConfirm } )
        );
        dispatch(
            setFirstName( firstName )
        );
        dispatch(
            setLastName( lastName )
        );
        dispatch(
            setUsers(
                user
            )
        );
    };

    return (
        <div>
            <RegistrationFormView error={ error } waiting={ waiting }
                                  onSubmit={ handleSubmit }/>
        </div>
    )
}
