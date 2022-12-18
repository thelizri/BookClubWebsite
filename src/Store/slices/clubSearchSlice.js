import {FULFILLED, IDLE, PENDING, REJECTED} from "../../Constants/promiseStatus";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get, getDatabase, ref} from "firebase/database";
import {firebaseApp} from "../store";

const initialState = {
    searchResults: [],

    searchClubs: {
        status : IDLE,
        requestId : null,
        error : "",
    }
}

export const searchClubs = createAsyncThunk(
    "clubSearch/searchClubs",
    async query => {
        const firebaseDb = getDatabase( firebaseApp );
        const clubsRef = ref(firebaseDb, 'clubs');
        const allClubsSnapshot = await get(clubsRef);
        const allClubs = allClubsSnapshot.val();
        const searchResults = [];
        if(allClubs?.length !== 0) {
            for(const clubId in allClubs) {
                const clubName = allClubs[clubId].clubName;
                if(clubName?.includes(query)) searchResults.push(allClubs[clubId]);
            }
        }
        return { searchResults }
    }
)

export const clubSearch = createSlice({
    name: 'clubSearch',
    initialState,
    reducers: {
        resetClubCreateStatus : ( state ) => {
            state.searchClubs.status = IDLE;
        },
    },
    extraReducers : {
        [searchClubs.pending]: (state, {meta}) => {
            state.searchClubs.requestId = meta.requestId;
            state.searchClubs.status = PENDING;
        },
        [searchClubs.fulfilled]: (state, {meta, payload}) => {
            if (state.searchClubs.requestId !== meta.requestId) return;

            state.searchClubs.status = FULFILLED;

            state.searchResults = payload.searchResults
        },
        [searchClubs.rejected]: (state, {meta, error}) => {
            if (state.searchClubs.requestId !== meta.requestId) return;

            state.searchClubs.error = error.message;
            state.searchClubs.status = REJECTED;
        },
    }
} );