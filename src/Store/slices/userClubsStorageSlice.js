import {firebaseApp} from "../store";
import { getDatabase, ref, get } from "firebase/database";
import {FULFILLED, IDLE, PENDING, REJECTED} from "../../Constants/promiseStatus";
import {createClub} from "./clubCreationSlice";
import {validateGender, validateStringLength, validateUniqueClubName} from "../../Utils/validationUtil";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    userClubs: [],

    loadClubs: {
        status : IDLE,
        requestId : null,
        error : "",
    }
}

export const loadClubs = createAsyncThunk(
    "userClubsStorage/loadClubs",
    async(clubIds) => {
        const firebaseDb = getDatabase( firebaseApp );
        const clubsRef = ref(firebaseDb, 'clubs');
        const allClubsSnapshot = await get(clubsRef);
        const allClubs = allClubsSnapshot.val();
        const userClubs = [];
        if(clubIds?.length !== 0) {
            for(const clubId of clubIds) {
                userClubs.push(allClubs[clubId]);
            }
        }
        return { userClubs }
    }
)

export const userClubsStorage = createSlice( {
    name: 'userClubsStorage',
    initialState,
    reducers: {},
    extraReducers : {
        [loadClubs.pending]: (state, {meta}) => {
            state.loadClubs.requestId = meta.requestId;
            state.loadClubs.status = PENDING;
        },
        [loadClubs.fulfilled]: (state, {meta, payload}) => {
            if (state.loadClubs.requestId !== meta.requestId) return;

            state.loadClubs.status = FULFILLED;
            state.userClubs = [...payload.userClubs];
        },
        [loadClubs.rejected]: (state, {meta, error}) => {
            if (state.loadClubs.requestId !== meta.requestId) return;

            state.loadClubs.status = REJECTED;
        }
    }
} );

