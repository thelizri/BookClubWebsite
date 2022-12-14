import {createSlice} from "@reduxjs/toolkit";

//might be redundant
const initialState = {
    userId: null,
    bookId: null,
    voteSessionId: null, //probably want to remove
}

const voteSlice = createSlice({
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