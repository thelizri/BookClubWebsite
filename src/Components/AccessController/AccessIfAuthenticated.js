import { Navigate } from "react-router-dom";
import {
    selectFirebaseAuthReady,
    selectFirebaseReady,
    selectUser
} from "../../Store/slices/userSlice";
import { useSelector } from "react-redux";
import {LoadingIcon} from "../LoadingIcon/LoadingIcon";

export const AccessIfAuthenticated = function ({ loggedIn: loggedIn = false, children}) {
    const firebaseAuthReady = useSelector(selectFirebaseAuthReady);
    const user = useSelector(selectUser);

    if(!firebaseAuthReady) {
        return <LoadingIcon />;
    }

    if(loggedIn && user.uid !== null) {
        return <Navigate replace to="/club" />
    }

    if(!loggedIn && user.uid === null) {
        return <Navigate replace to="/login" />
    }

    return children;
}