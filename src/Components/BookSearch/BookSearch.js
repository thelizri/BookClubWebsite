import * as React from "react";
import { useGetSearchResultsQuery } from "../../Store/api/apiSlice";
import { SearchResultsView } from "./SearchResults/SearchResultsView";
import { SearchFormView } from "./SearchForm/SearchFormView";

/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const BookSearch = () => {
    // State of API request
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        useGetSearchResultsQuery();

    // Called by SearchFormView on search query submission
    const HandleSubmit = ( searchQuery ) => {
        useGetSearchResultsQuery( searchQuery )
    }

    // Optional chaining
    const isEmpty = !data?.items || data?.items.length === 0;

    const noResultsMsg = 'No books found :-/';
    const errorMsg = 'Search failed :-(';

    let content = null;

    if ( isLoading || isFetching ) {
        // content = <LoadingImage /> or similar
    } else if ( isSuccess && !isEmpty ) {
        content = <SearchResultsView foundBooks={ data.items }/>
    } else if ( isSuccess && isEmpty ) {
        content = <SearchResultsView foundBooks={ noResultsMsg }/>
    } else if ( isError ) {
        content = <SearchResultsView error = { errorMsg } />
        console.log( error?.data?.error?.message );
    }

    return (
        <section className = 'book-search'>
            <SearchFormView onSubmit = {HandleSubmit}/>
            { content }
        </section>
    )
}