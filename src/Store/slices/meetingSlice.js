import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: null,
    address: null,
    currentMeeting: null,
    meetingLink: "",
    meetingTime: null,
}

export const meeting = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        setMeetingId: ( state, { payload } ) => {
            state.id = payload;
        },
        setAddress: ( state, { payload } ) => {
            state.address = payload;
        },
        setCurrentMeeting: ( state, { payload } ) => {
            state.currentMeeting = payload;
        },
        setMeetingLink: ( state, { payload } ) => {
            state.meetingLink = payload;
        },
        setMeetingTime: ( state, { payload } ) => {
            state.meetingTime = payload;
        },
    }
})

export const { setMeetingId, setAddress, setCurrentMeeting, setMeetingLink, setMeetingTime } = meeting.actions;

