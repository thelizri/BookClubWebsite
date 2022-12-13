import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSearchResultsQuery } from "../../Store/api/apiSlice";
import { selectBook, setSelectedBook } from "../../Store/slices/bookSlice";
import { addBookToReadingList } from "../../Store/slices/club";
import { SearchModalView } from "../SearchModal/SearchModalView";

/**
 * Presenter for SearchResultsView.
 * @returns {JSX.Element}
 */
export const Search = () => {
    const dispatch = useDispatch();
    const book = useSelector( selectBook );

    // State of query
    const [ searchQuery, setSearchQuery ] = React.useState();

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
        setSearchQuery( preliminaryQuery )
    }

    // Optional chaining
    const isEmpty = !data?.items || data?.items.length === 0;

    const noResultsMsg = isEmpty ? 'No books found :-/' : null;
    const errorMsg = isError ? 'Search failed :-(' : null;

    let content = null;

    function addSelectedBookToReadingList( googleBooksId, title, author, pageCount ) {
        dispatch(
            setSelectedBook( { googleBooksId, title, author, pageCount } ) );
    }

    if( isLoading || isFetching ) {
        // content = <LoadingImage /> or similar
    } else if( isSuccess && !isEmpty ) {
        content = <SearchModalView
            foundBooks={ data.items }
            error={ errorMsg }
            onSelection={ addSelectedBookToReadingList }
            onSubmit={ executeQuery }
            inputQuery={ storeSearchQuery }/>
    } else if( isSuccess && isEmpty ) {
        content = <SearchModalView
            foundBooks={ noResultsMsg }
            error={ errorMsg }
            onSelection={ addSelectedBookToReadingList }
            onSubmit={ executeQuery }
            inputQuery={ storeSearchQuery }/>
    }

    return (
        <section className='book-search'>{ content }</section>
    )
}