import { SearchBarView } from "./SearchBarView";

/**
 * Search bar component
 */
export const SearchBar = () => {
    return <SearchBarView
        setSearchText = {(text) => console.log(text)}
        onSubmit = {(event) => console.log(event)}
    />;
};