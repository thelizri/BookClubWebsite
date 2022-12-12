import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    firstName: "",
    lastName: "",
    gender: null,
    languages: [],
}
export const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setRegistrationData: ( state, { payload } ) => {
            state.email = payload.email;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        },
        setUserEmail: ( state, { payload } ) => {
            state.email = payload;
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

export const { setUserId, setFirstName, setLastName, setGender, setLanguages, setRegistrationData,
                removeClub, removeLanguage } = userInfo.actions;

export const selectUser = (state) => state.userInfo;