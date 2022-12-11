import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: null,
    clubs: [],
    firstName: "",
    lastName: "",
    gender: null,
    languages: [],
}

const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserId: ( state, { payload } ) => {
            state.id = payload;
        },
        setClubs: ( state, { payload } ) => {
            state.clubs = [...state.clubs, payload];
        },
        setFirstName: ( state, { payload } ) => {
            state.firstName = payload;
        },
        setLastName: ( state, { payload } ) => {
            state.lastName = payload;
        },
        setGender: ( state, { payload } ) => {
            state.gender = payload;
        },
        setLanguages: ( state, { payload } ) => {
            state.languages = [...state.languages, payload];
        },
        removeClub: (state, { payload } ) => {
            state.clubs = state.clubs.filter((club) => club.id !== payload);
        },
        removeLanguage: ( state, { payload } ) => {
            state.languages = state.languages.filter((language) => language !== payload);
        }
    }
});

export const { setUserId, setFirstName, setLastName, setGender, setLanguages,
                removeClub, removeLanguage } = userInfo.actions;