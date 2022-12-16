import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    description : "KTH Bibliotek",
    address : "Kistagången 16, 164 40 Kista",
    online : false,
    meetingLink : "https://kth-se.zoom.us/j/3446757312312435",
    meetingDate : "2022-12-21",
    meetingTime : "19:00",
}

export const meeting = createSlice( {
    name : "meeting",
    initialState,
    reducers : {
        setOnline : ( state, { payload } ) => {
            state.online = payload;
        },
        setDescription : ( state, { payload } ) => {
            state.description = payload;
        },
        setAddress : ( state, { payload } ) => {
            state.address = payload;
        },
        setMeetingLink : ( state, { payload } ) => {
            state.meetingLink = payload;
        },
        setMeetingDate : ( state, { payload } ) => {
            state.meetingDate = payload;
        },
        setMeetingTime : ( state, { payload } ) => {
            state.meetingTime = payload;
        },
    }
} )

export const {
    setAddress,
    setDescription,
    setOnline,
    setCurrentMeeting,
    setMeetingLink,
    setMeetingTime,
    setMeetingDate
} = meeting.actions;

