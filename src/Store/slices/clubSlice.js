import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = {
    clubs: [],

    club: {
        id: null,
        language: "",
        maxMembers: 1,
        meetings: [],
        meetingType: "",
        members: [],
        readingList: [],
    }
}

const clubSlice = createSlice({
    name: 'club',
    initialState,
    reducers: {
        setClubId: ( state, { payload } ) => {
            state.club.id = payload;
        },
        setLanguage: ( state, { payload } ) => {
            state.club.language = payload;
        },
        setMaxMembers: ( state, { payload } ) => {
            state.club.maxMembers = payload;
        },
        setMeetings: ( state, { payload } ) => {
            state.club.meetings = payload;
        },
        setMeetingType: ( state, { payload } ) => {
            state.club.meetingType = payload;
        },
        setMembers: ( state, { payload } ) => {
            state.club.members = [...state.members, payload];
        },
        setReadingList: ( state, { payload } ) => {
            state.club.members = [...state.readingList, payload];
        },
        removeMember: (state, { payload } ) => {
            state.club.members = state.members.filter((member) => member.id !== payload);
        },
        removeBookFromReadingList: (state, { payload } ) => {
            state.club.readingList = state.readingList.filter((book) => book.id !== payload);
        },
    }
});

export const { setClubId, setLanguage, setMeetings, setMaxMembers, setMeetingType, setMembers, setReadingList,
                removeMember, removeBookFromReadingList } = clubSlice.actions;

export const selectLanguage = state => state.club.language;

export const selectMaxMembers = state => state.club.maxMembers;

export const selectMeetingType = state => state.club.meetingType;

export const selectMembers = state => state.club.members;

export const selectReadingList = state => state.club.readingList;