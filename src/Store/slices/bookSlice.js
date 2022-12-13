import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    addedByUserId: "irsPW5zlE4SPq5KwvnT3Snq10w63", //for future usage
    currentPage: 1,
    googleBooksId: null,
    currentlyReading: null,
}

export const book = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBookId: ( state, { payload } ) => {
            state.id = payload;
        },
        setAddedByUserId: ( state, { payload } ) => {
            state.id = payload;
        },
        setGoogleBooksId: ( state, { payload } ) => {
            state.googleBooksId = payload;
        },
        setCurrentlyReading: ( state, { payload } ) => {
            state.currentlyReading = payload;
        },
    }
})

export const { setBookId, setAddedByUserId, setGoogleBooksId, setCurrentlyReading } = book.actions;
