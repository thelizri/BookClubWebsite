import * as React from "react";
import { useGetSearchResultsQuery } from "../../Store/api/apiSlice";
import SearchBarView from "../SearchBar/SearchBarView";
import { SearchResultsView } from "./SearchResults/SearchResultsView";

/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const Search = () => {
    // State of API request
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        useGetSearchResultsQuery( "Harry Potter" );

    // Called by SearchFormView on search query submission
    const HandleSubmit = ( searchQuery ) => {
        useGetSearchResultsQuery( searchQuery )
    }

    // Optional chaining
    const isEmpty = !data?.items || data?.items.length === 0;

    const noResultsMsg = isEmpty ? 'No books found :-/' : null;
    const errorMsg = isError ? 'Search failed :-(' : null ;

    let content = null;

    if ( isLoading || isFetching ) {
        // content = <LoadingImage /> or similar
    }
    else if ( isSuccess && !isEmpty ) {
        content = <SearchResultsView
            foundBooks = { data.items }
            error = { errorMsg }/>
    }
    else if ( isSuccess && isEmpty ) {
        content = <SearchResultsView
            foundBooks={ noResultsMsg }
            error = { errorMsg } />
    }
    else if ( isError ) {
        content = <SearchResultsView foundBooks={ noResultsMsg }
                                     error = { errorMsg } />
        console.log( error?.data?.error?.message );
    }

    return (
        <section className = 'book-search'>
            <SearchBarView onSubmit = {HandleSubmit}/>
            { content }
        </section>
    )
}