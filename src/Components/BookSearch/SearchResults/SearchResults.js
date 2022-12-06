import * as React from "react";
import { useGetSearchResultsQuery } from "../../../Store/api/apiSlice";
import { SearchResultsView } from "./SearchResultsView";

/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const SearchResults = () => {
    //component states
    // const { query } = , OR separate presenter for SearchForm?;
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        useGetSearchResultsQuery( query );

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
        <section className = 'book-search-results'>
            { content }
        </section>
    )
}