import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: null,
    addedByUserId: null,
    googleBooksId: null,
    currentlyReading: null,
    finishedReadingDate: null,
    votes: [],
}

const book = createSlice({
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