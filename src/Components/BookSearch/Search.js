import * as React from "react";
import { useGetSearchResultsQuery } from "../../Store/api/apiSlice";
import { SearchBarView } from "../SearchBar/SearchBarView";
import { SearchResultsView } from "./SearchResultsView";
import {useDispatch, useSelector} from "react-redux";
import {addBookToReadingList} from "../../Store/slices/club";
import {selectBook, setSelectedBook} from "../../Store/slices/bookSlice";
import {useEffect} from "react";

/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const Search = () => {
    const book = useSelector(selectBook);
    // State of query
    const [ searchQuery, setSearchQuery ] = React.useState( "Harry Potter" );

    // State of API request
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        useGetSearchResultsQuery( searchQuery );

    useEffect(() => {
        if(book.pageCount !== -1) {
            dispatch(addBookToReadingList(book));
        }
    }, [ book ])

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
    const dispatch = useDispatch();

    function addSelectedBookToReadingList(googleBooksId, title, author, pageCount) {
        if(!pageCount) pageCount = null;
        dispatch(setSelectedBook( { googleBooksId, title, author, pageCount } ));
    }

    if( isLoading || isFetching ) {
        // content = <LoadingImage /> or similar
    } else if( isSuccess && !isEmpty ) {
        content = <SearchResultsView
            foundBooks={ data.items }
            error={ errorMsg }
            onSubmit={ addSelectedBookToReadingList }/>
    } else if( isSuccess && isEmpty ) {
        content = <SearchResultsView
            foundBooks={ noResultsMsg }
            error={ errorMsg } />
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