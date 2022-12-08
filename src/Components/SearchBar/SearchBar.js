import SearchBarView from "./SearchBarView";

const SearchBar = () => {
    return <SearchBarView
        onSubmit = {(event) => console.log(event)}
    />;
};

export default SearchBar;
