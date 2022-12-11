import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: null,
    voteId: null,
    meetingId: null,
}

const voteSession = createSlice({
    name: 'voteSession',
    initialState,
    reducers: {
        setVoteSessionId: ( state, { payload } ) => {
            state.id = payload;
        },
        setVoteId: ( state, { payload } ) => {
            state.voteId = payload;
        },
        setMeetingId: ( state, { payload } ) => {
            state.meetingId = payload;
        },
    }
})