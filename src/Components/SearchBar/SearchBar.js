import { SearchBarView } from "./SearchBarView";
import {useDispatch} from "react-redux";
import {setClubId, setLanguage, setMaxMembers} from "../../Store/slices/club";

/**
 * Search bar component
 */
export const SearchBar = () => {
    const dispatch = useDispatch();

    function handleClick(event) {
        dispatch(setMaxMembers(1));
    }

    return <SearchBarView
        setSearchText = {(text) => console.log(text)}
        onSubmit = {handleClick}
    />;
};