import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {validateGender, validateStringLength, validateUniqueClubName} from "../../Utils/validationUtil";
import { firebaseApp } from "../store";
import {getDatabase, ref, query, orderByKey, limitToLast, get} from "firebase/database";
import firebase from 'firebase/compat/app';
import {
    FULFILLED,
    IDLE,
    PENDING,
    REJECTED
} from "../../Constants/promiseStatus";
import {authenticate} from "./userSlice";


const initialState = {
    clubToBeCreated: {
        clubId : null,
        clubOwnerId : null,
        clubName : "",
        currentlyReadingId : null,
        genres : [],
        language : null,
        maxMemberCount : 1,
        meetings : [],
        meetingType : null,
        memberIds : [],
        readingList : [],
        voteDeadline : null,
        votes : [],
    },

    latestCreatedClubId: null,

    createClub: {
        status : IDLE,
        requestId : null,
        error : "",
    }
}

export const createClub = createAsyncThunk(
    "clubCreation/fetchLatestCludId",
    async(
        {
            clubName,
            language,
            maxMemberCount,
            gender,
            genres,
            meetingType,
            userId,
            userGender
        }
    ) => {
        const firebaseDb = getDatabase(firebaseApp);
        const latestCreatedClubIfRef = ref(firebaseDb, "clubMetaData/latestCreatedClubId");
        let snapshot = await get(latestCreatedClubIfRef);
        const latestCreatedClubId = snapshot.val();
        const newClubId = latestCreatedClubId ? latestCreatedClubId + 1 : 1;

        const existentClubNamesRef = ref(firebaseDb, "clubMetaData/clubNames");
        snapshot = await get(existentClubNamesRef);
        const existentClubNames = snapshot.val();

        try {
            validateUniqueClubName(
                clubName,
                existentClubNames
            );
            validateStringLength(
                clubName,
                30,
                "#clubCreation",
                ".clubNameFeedback"
            );
            validateGender(
                gender,
                userGender,
                "#clubCreation",
                ".clubNameFeedback"
            );
        } catch(err) {
            throw err;
        }

        return {
            clubId: newClubId,
            clubName,
            language,
            maxMemberCount,
            gender,
            genres,
            meetingType,
            userId,
            userGender
        }
    }
)

export const clubCreation = createSlice({
    name: 'clubCreation',
    initialState,
    reducers: {
        resetClubCreateStatus : ( state ) => {
            state.createClub.status = IDLE;
        },
        setLatestCreatedClubId : ( state, { payload } ) => {
            state.latestCreatedClubId = payload;
        },
    },
    extraReducers : {
        [createClub.pending]: (state, {meta}) => {
            state.createClub.requestId = meta.requestId;
            state.createClub.status = PENDING;
        },
        [createClub.fulfilled]: (state, {meta, payload}) => {
            if (state.createClub.requestId !== meta.requestId) return;

            return {
                ...state,
                clubToBeCreated: {
                    ...state.clubToBeCreated,
                    clubId: payload.clubId,
                    clubName: payload.clubName,
                    clubOwnerId: payload.userId,
                    language: payload.language,
                    genres: [ ...payload.genres ],
                    maxMemberCount: payload.maxMemberCount,
                    meetingType: payload.meetingType,
                    memberIds: [ payload.userId ]
                },
                latestCreatedClubId: payload.clubId,
                createClub: {
                    ...state.createClub,
                    status: FULFILLED
                }
            }
        },
        [createClub.rejected]: (state, {meta, error}) => {
            if (state.createClub.requestId !== meta.requestId) return;

            state.createClub.error = error.message;
            state.createClub.status = REJECTED;
        },
    }
} );

export const { resetClubCreateStatus, setLatestCreatedClubId } = clubCreation.actions;

export const selectClubCreationError = state => state.clubCreation.error;

export const selectClubCreationSuccess = data => data.clubCreation.status === FULFILLED