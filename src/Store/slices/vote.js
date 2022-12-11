import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    bookId: null,
    voteSessionId: null,

}

const vote = createSlice({
    name: 'vote',

})