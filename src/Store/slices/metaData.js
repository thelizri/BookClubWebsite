import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    clubs: [],
    users: [],
}

export const metaData = createSlice({
    name: 'metaData',
    initialState,
    reducers: {
        setClubs: ( state, { payload } ) => {
            state.clubs = [...state.clubs, payload];
        },
        setUsers: ( state, { payload } ) => {
            return {
                ...state,
                users: [...state.users, payload]
            }
        },
    }
})

export const { setClubs, setUsers } = metaData.actions;

export const selectUsers = state => state.metaData?.users;