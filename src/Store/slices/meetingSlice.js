import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: null,
    address: null,
    creationDate: null,
    meetingLink: "",
    meetingTime: null,
    voteDeadline: null,
}

const meetingSlice = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        setMeetingId: ( state, { payload } ) => {
            state.id = payload;
        },
        setAddress: ( state, { payload } ) => {
            state.address = payload;
        },
        setCreationDate: ( state, { payload } ) => {
            state.creationDate = payload;
        },
        setMeetingLink: ( state, { payload } ) => {
            state.meetingLink = payload;
        },
        setMeetingTime: ( state, { payload } ) => {
            state.meetingTime = payload;
        },
        setVoteDeadline: ( state, { payload } ) => {
            state.voteDeadline = payload;
        },
    }
})

export const { setMeetingId, setAddress, setCreationDate, setMeetingLink, setMeetingTime, setVoteDeadline } = meetingSlice.actions;

