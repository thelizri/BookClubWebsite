import { useDispatch } from "react-redux";
import { setMaxMembers } from "../../Store/slices/clubSlice";
import { SearchBarView } from "./SearchBarView";

/**
 * Search bar component
 */
export const SearchBar = () => {
    const dispatch = useDispatch();

    function handleClick( event ) {
        dispatch( setMaxMembers( 1 ) );
    }

    return <SearchBarView
        setSearchText={ ( text ) => console.log( text ) }
        onSubmit={ handleClick }
    />;
};