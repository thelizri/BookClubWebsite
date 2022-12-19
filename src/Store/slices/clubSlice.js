import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    clubId : null,
    clubOwnerId : null,
    clubName : null,
    currentlyReadingId : null,
    gender : null,
    genres : [],
    language : null,
    maxMemberCount : null,
    meetings : [],
    meetingType : null,
    memberIds : [],
    readingList : [],
    voteDeadline : null,
    votes : [],
}

export const club = createSlice( {
    name : 'club',
    initialState,
    reducers : {
        addBookToReadingList : ( state, { payload } ) => {
            if( !state.readingList )
                state.readingList = [ payload ]
            else {
                return {
                    ...state,
                    readingList : [ ...state.readingList, payload ],
                }
            }
        },
        addGenre : ( state, { payload } ) => {
            return {
                ...state,
                genres : [ ...state.genres, payload ],
            }
        },
        addMember : ( state, { payload } ) => {
            return {
                ...state,
                memberIds : [ ...state.memberIds, payload ],
            }
        },
        addVote : ( state, { payload } ) => {
            if(!state.votes) state.votes = [];
            let currentVotes = state.votes;

            if(currentVotes[payload.userId] !== payload.votedBookId) {
                currentVotes[payload.userId] = payload.votedBookId;
            }
        },
        setClub : ( state, { payload } ) => {
            return { ...payload }
        },
        setClubId : ( state, { payload } ) => {
            state.clubId = payload;
        },
        setClubName : ( state, { payload } ) => {
            state.clubName = payload;
        },
        setClubOwnerId : ( state, { payload } ) => {
            state.clubOwnerId = payload;
        },
        setCurrentlyReadingId : ( state, { payload } ) => {
            state.currentlyReadingId = payload;
        },
        setGender : ( state, { payload } ) => {
            state.gender = payload;
        },
        setGenres : ( state, { payload } ) => {
            return {
                ...state,
                genres : [ ...payload ]
            }
        },
        setLanguage : ( state, { payload } ) => {
            state.language = payload;
        },
        setMaxMembers : ( state, { payload } ) => {
            state.maxMemberCount = payload;
        },
        setMembers : ( state, { payload } ) => {
            return {
                ...state,
                memberIds : [ ...payload ]
            }
        },
        setMeetings : ( state, { payload } ) => {
            return {
                ...state,
                meetings : [ ...payload ]
            }
        },
        setMeetingType : ( state, { payload } ) => {
            state.meetingType = payload;
        },
        setReadingList : ( state, { payload } ) => {
            return {
                ...state,
                readingList : [ ...payload ]
            }
        },
        setVotes : ( state, { payload } ) => {
            return {
                ...state,
                votes : [ ...payload ]
            }
        },
        setVoteDeadline : ( state, { payload } ) => {
            state.voteDeadline = payload;
        },
        removeBookFromReadingList : ( state, { payload } ) => {
            return {
                ...state,
                readingList : state.readingList.filter(
                    book => book.id !== payload ),
            }
        },
        removeGenre : ( state, { payload } ) => {
            return {
                ...state,
                genres : state.genres.filter( genre => genre !== payload ),
            }
        },
        removeMember : ( state, { payload } ) => {
            return {
                ...state,
                members : state.members.filter(
                    member => member.id !== payload ),
            }
        },
    }
} );

export const {
    addBookToReadingList,
    addGenre,
    addMember,
    addVote,
    setClub,
    setClubId,
    setClubName,
    setClubOwnerId,
    setCurrentlyReadingId,
    setGender,
    setGenres,
    setLanguage,
    setMeetings,
    setMaxMembers,
    setMembers,
    setMeetingType,
    setReadingList,
    setVoteDeadline,
    setVotes,
    removeBookFromReadingList,
    removeGenre,
    removeMember
} = club.actions;

export const selectClub = state => state.club;

export const selectClubId = state => state.club.id;

export const selectClubName = state => state.club.clubName;

export const selectLanguage = state => state.club.language;

export const selectMaxMembers = state => state.club.maxMemberCount;

export const selectMeetingType = state => state.club.meetingType;

export const selectMembers = state => state.club.members;

export const selectReadingList = state => state.club.readingList;