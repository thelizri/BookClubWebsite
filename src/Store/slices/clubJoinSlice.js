import {FULFILLED, IDLE, PENDING, REJECTED} from "../../Constants/promiseStatus";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get, getDatabase, ref} from "firebase/database";
import {firebaseApp} from "../store";
import {searchClubs} from "./clubSearchSlice";


const initialState = {
    clubToBeJoined: {
        clubId: null,
        userId: null,
        memberIds: [],
        clubIds: [],
    },

    updateMemberIds: {
        status : IDLE,
        requestId : null,
        error : "",
    }
}

export const updateMemberAndClubIds = createAsyncThunk(
    'clubJoin/updateMemberIds',
    async (
        {
            clubId,
            userId,
            clubIds
        } ) => {
        const firebaseDb = getDatabase( firebaseApp );
        const clubsRef = ref(firebaseDb, 'clubs');
        const allClubsSnapshot = await get(clubsRef);
        const allClubs = allClubsSnapshot.val();
        const joinedClub = allClubs[clubId];
        const updatedMemberIds = [ ...joinedClub.memberIds, userId ];

        const updatedClubIds = [ ...clubIds, clubId]

        return {
            clubId: clubId,
            userId: userId,
            memberIds: updatedMemberIds,
            clubIds: updatedClubIds,
        }
    }
)

export const clubJoin = createSlice({
    name: 'clubJoin',
    initialState,
    reducers: {},
    extraReducers : {
        [updateMemberAndClubIds.pending]: (state, {meta}) => {
            state.updateMemberIds.requestId = meta.requestId;
            state.updateMemberIds.status = PENDING;
        },
        [updateMemberAndClubIds.fulfilled]: (state, {meta, payload}) => {
            if (state.updateMemberIds.requestId !== meta.requestId) return;

            state.updateMemberIds.status = FULFILLED;

            state.clubToBeJoined.clubId = payload.clubId;
            state.clubToBeJoined.userId = payload.userId;
            state.clubToBeJoined.memberIds = payload.memberIds;
            state.clubToBeJoined.clubIds = payload.clubIds;
        },
        [updateMemberAndClubIds.rejected]: (state, {meta, error}) => {
            if (state.updateMemberIds.requestId !== meta.requestId) return;

            state.updateMemberIds.error = error.message;
            state.updateMemberIds.status = REJECTED;
        },
    }
})