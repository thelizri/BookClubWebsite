import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addedByUserId : "irsPW5zlE4SPq5KwvnT3Snq10w63", //for future usage
    author : "",
    title : "",
    currentPage : 1,
    googleBooksId : null,
    pageCount : 0,
}

export const book = createSlice( {
    name : 'book',
    initialState,
    reducers : {
        setAddedByUserId : ( state, { payload } ) => {
            state.id = payload;
        },
        setGoogleBooksId : ( state, { payload } ) => {
            state.googleBooksId = payload;
        },
        setSelectedBook : ( state, { payload } ) => {
            return {
                ...state,
                author : payload.author,
                pageCount : payload.pageCount,
                title : payload.title,
                googleBooksId : payload.googleBooksId,
            }
        },
    }
} )

export const selectBook = state => state.book;

export const {
    setBookId,
    setAddedByUserId,
    setGoogleBooksId,
    setCurrentlyReading,
    setSelectedBook
} = book.actions;
