import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiKey from "../../Config/googleBooksConfig";


/**
 * API service 'slice' that can be used for retrieving top 10 most relevant
 * books to the provided search query, and retrieving details on a specific
 * book.
 */
export const googleBooksApi = createApi( {
    reducerPath: "googleBooksApi",
    baseQuery: fetchBaseQuery( { baseUrl : "https://www.googleapis.com/books/v1/volumes" } ),

    endpoints: ( builder ) => ( {

        getSearchResults : builder.query( {
            query: ( searchQuery ) =>
                `?q=${ searchQuery }&orderBy=relevance&maxResults=10&key=${ apiKey }`
        } ),

        getBookDetails : builder.query( {
            query: ( bookId ) => `/${ bookId }`
        } ),
    } ),
} );

export const { useGetSearchResultsQuery, useGetBookDetailsQuery } = googleBooksApi;