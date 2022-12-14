import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSearchResultsQuery } from "../../../../../Store/slices/apiSlice";
import {
    selectBook,
    setSelectedBook
} from "../../../../../Store/slices/bookSlice";
import { addBookToReadingList } from "../../../../../Store/slices/clubSlice";
import { LoadingIcon } from "../../../../LoadingIcon/LoadingIcon";
import { SearchBarView } from "../../../../SearchBar/SearchBarView";
import { SearchResultsView } from "./SearchResultsView";


/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const Search = () => {
    const book = useSelector( selectBook );
    // State of query
    const [ searchQuery, setSearchQuery ] = React.useState( "!#%%c€!!" );

    // State of API request
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        useGetSearchResultsQuery( searchQuery );

    useEffect( () => {
        if( book.pageCount !== 0 ) {
            dispatch( addBookToReadingList( book ) );
        }
    }, [ book ] )

    let preliminaryQuery = "";
    const storeSearchQuery = ( query ) => {
        preliminaryQuery = query;
    }

    const executeQuery = () => {
        if( preliminaryQuery === "" ) return;
        setSearchQuery( preliminaryQuery )
    }

    // Optional chaining
    const isEmpty = !data?.items || data?.items.length === 0;

    const noResultsMsg = isEmpty ? 'No books found :-/' : null;
    const errorMsg = isError ? 'Search failed :-(' : null;

    let content = null;
    const dispatch = useDispatch();

    const addSelectedBookToReadingList = ( googleBooksId, title, author, pageCount ) => {
        dispatch(
            setSelectedBook( { googleBooksId, title, author, pageCount } ) );
    }

    if( isLoading || isFetching ) {
        content = <LoadingIcon/>
    } else if( isSuccess && !isEmpty && searchQuery === "!#%%c€!!" ) {
        content = null;
    } else if( isSuccess && !isEmpty && searchQuery !== "!#%%c€!!" ) {
        content = <SearchResultsView
            foundBooks={ data.items }
            error={ errorMsg }
            onSubmit={ addSelectedBookToReadingList }/>
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