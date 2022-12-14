import { NavigationBarView } from "./NavigationBarView";
import {logout} from "../../Store/slices/userSlice";
import {useDispatch} from "react-redux";


export const NavigationBar = function() {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(logout());
    }

    return (
        <NavigationBarView logOut={handleLogout}/>
    )
}