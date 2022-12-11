import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = {
    id: null,
    language: "",
    maxMembers: 1,
    meetingType: "",
    members: [],
    readingList: [],
}

const club = createSlice({
    name: 'club',
    initialState,
    reducers: {
        setClubId: ( state, { payload } ) => {
            state.id = payload;
        },
        setLanguage: ( state, { payload } ) => {
            state.language = payload;
        },
        setMaxMembers: ( state, { payload } ) => {
            state.maxMembers = payload;
        },
        setMeetingType: ( state, { payload } ) => {
            state.meetingType = payload;
        },
        setMembers: ( state, { payload } ) => {
            state.members = [...state.members, payload];
        },
        setReadingList: ( state, { payload } ) => {
            state.members = [...state.readingList, payload];
        },
        removeMember: (state, { payload } ) => {
            state.members = state.members.filter((member) => member.id !== payload);
        },
        removeBookFromReadingList: (state, { payload } ) => {
            state.readingList = state.readingList.filter((book) => book.id !== payload);
        },
    }
});

export const { setClubId, setLanguage, setMaxMembers, setMeetingType, setMembers, setReadingList,
                removeMember, removeBookFromReadingList } = club.actions;

export const selectLanguage = state => state.club.language;

export const selectMaxMembers = state => state.club.maxMembers;

export const selectMeetingType = state => state.club.meetingType;

export const selectMembers = state => state.club.members;

export const selectReadingList = state => state.club.readingList;