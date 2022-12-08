import SearchBarView from "./SearchBarView";

/**
 * Search bar component
 */
const SearchBar = () => {
    return <SearchBarView
        setSearchText = {(text) => console.log(text)}
        onSubmit = {(event) => console.log(event)}
    />;
};

export default SearchBar;
