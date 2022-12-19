import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get, getDatabase, ref} from "firebase/database";
import {firebaseApp} from "../store";
import {FULFILLED, IDLE, PENDING, REJECTED} from "../../Constants/promiseStatus";
import {loadClubs} from "./storageForUserClubsSlice";

const initialState = {
    members: {
        names: [],
        whoHasOrHasntVoted: [],
    },

    getMemberNames: {
        status : IDLE,
        requestId : null,
        error : "",
    }
}

export const getMemberNames = createAsyncThunk(
    'storageForMembers/getMemberNames',
    async memberIds => {
        const firebaseDb = getDatabase( firebaseApp );
        const usersRef = ref(firebaseDb, 'users');
        const allUsersSnapshot = await get(usersRef);
        const allUsers = allUsersSnapshot.val();
        let memberNames = [];

        if(memberIds.length === 0) throw Error("No members in club");
        for(const memberId of memberIds) {
            memberNames.push({name: allUsers[memberId].displayName, userId: memberId});
        }

        return {
            memberNames : memberNames
        }
    }
)

export const storageForMembers = createSlice({
    name: 'storageForMembers',
    initialState,
    reducers: {
        setWhoHasOrHasntVoted: ( state, { payload } ) => {
            state.members.whoHasOrHasntVoted = payload;
        }
    },
    extraReducers : {
        [getMemberNames.pending]: (state, {meta}) => {
            state.getMemberNames.requestId = meta.requestId;
            state.getMemberNames.status = PENDING;
        },
        [getMemberNames.fulfilled]: (state, {meta, payload}) => {
            if (state.getMemberNames.requestId !== meta.requestId) return;

            state.getMemberNames.status = FULFILLED;
            state.members.names = payload.memberNames;
        },
        [getMemberNames.rejected]: (state, {meta, error}) => {
            if (state.getMemberNames.requestId !== meta.requestId) return;

            state.getMemberNames.status = REJECTED;
        }
    }
});

export const { setWhoHasOrHasntVoted } = storageForMembers.actions;