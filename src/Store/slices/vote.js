import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    bookId: null,
    voteSessionId: null,
}

const vote = createSlice({
    name: 'vote',
    initialState,
    reducers: {
        setUserId: ( state, { payload } ) => {
            state.userId = payload;
        },
        setBookId: ( state, { payload } ) => {
            state.bookId = payload;
        },
        setVoteSessionId: ( state, { payload } ) => {
            state.voteSessionId = payload;
        },
    }
})