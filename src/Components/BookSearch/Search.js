import * as React from "react";
import { useGetSearchResultsQuery } from "../../Store/api/apiSlice";
import { SearchBarView } from "../SearchBar/SearchBarView";
import { SearchResultsView } from "./SearchResultsView";

/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const Search = () => {
    // State of query
    const [ searchQuery, setSearchQuery ] = React.useState( "Harry Potter" );

    // State of API request
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        useGetSearchResultsQuery( searchQuery );

    let preliminaryQuery = "";
    const storeSearchQuery = ( query ) => {
        preliminaryQuery = query;
    }

    const executeQuery = () => {
        setSearchQuery( preliminaryQuery )
    }

    // Optional chaining
    const isEmpty = !data?.items || data?.items.length === 0;

    const noResultsMsg = isEmpty ? 'No books found :-/' : null;
    const errorMsg = isError ? 'Search failed :-(' : null;

    let content = null;

    if( isLoading || isFetching ) {
        // content = <LoadingImage /> or similar
    } else if( isSuccess && !isEmpty ) {
        content = <SearchResultsView
            foundBooks={ data.items }
            error={ errorMsg }/>
    } else if( isSuccess && isEmpty ) {
        content = <SearchResultsView
            foundBooks={ noResultsMsg }
            error={ errorMsg }/>
    } else if( isError ) {
        content = <SearchResultsView foundBooks={ noResultsMsg }
                                     error={ errorMsg }/>
        console.log( error?.data?.error?.message );
    }

    return (
        <section className='book-search'>
            <SearchBarView onSubmit={ executeQuery }
                           inputQuery={ storeSearchQuery }/>
            { content }
        </section>
    )
}