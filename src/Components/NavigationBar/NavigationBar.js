import { useDispatch } from "react-redux";
import { logout } from "../../Store/slices/userSlice";
import { NavigationBarView } from "./NavigationBarView";


export const NavigationBar = function() {
    const dispatch = useDispatch();

    const handleLogout = async() => {
        dispatch( logout() );
    }

    return (
        <NavigationBarView logOut={ handleLogout }/>
    )
}