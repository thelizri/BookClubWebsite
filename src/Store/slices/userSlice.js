import {
    createAsyncThunk,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    FULFILLED,
    IDLE,
    PENDING,
    REJECTED
} from "../../Constants/promiseStatus";
import { firebaseApp } from "../store";

const initialState = {
    user : {
        uid : null,
        email : null,
        displayName : null,
        clubIds : [],
        gender : "Male",
        languages : [],
    },

    firebaseAuthReady : false,
    firebaseReady : false,

    authenticate : {
        status : IDLE,
        requestId : null,
        error : "",
    },
};

export const authenticate = createAsyncThunk(
    "auth/authenticate",
    async(
        {
            displayName,
            languages,
            gender,
            email,
            password,
            passwordConfirm,
            signup
        }
    ) => {
        if( signup && password !== passwordConfirm ) throw new Error(
            "Passwords do not match" );

        const auth = getAuth( firebaseApp );
        let userCredential;

        try {
            userCredential = signup ?
                             await createUserWithEmailAndPassword( auth, email,
                                 password ) :
                             userCredential =
                                 await signInWithEmailAndPassword( auth, email,
                                     password );
        } catch( err ) {
            throw err;
        }

        if( signup ) return {
            uid : userCredential.user.uid,
            email : userCredential.user.email,
            displayName,
            gender,
            languages,
            signup
        }

        return {
            uid : userCredential.user.uid,
            email : userCredential.user.email,
        };
    }
);

export const user = createSlice( {
    name : "auth",
    initialState,
    reducers : {
        resetAuthenticationStatus : ( state ) => {
            state.authenticate.status = IDLE;
        },
        setDisplayName : ( state, { payload } ) => {
            state.user.displayName = payload;
        },
        setUserId : ( state, { payload } ) => {
            state.user.uid = payload;
        },
        setUser : ( state, { payload } ) => {
            state.user.uid = payload.uid;
            state.user.email = payload.email;
        },
        setFirebaseAuthReady : ( state ) => {
            state.firebaseAuthReady = true;
        },
        setFirebaseReady : ( state ) => {
            state.firebaseReady = true;
        },
        setClubIds : ( state, { payload } ) => {
            state.clubIds = payload;
        },
        setGender : ( state, { payload } ) => {
            state.user.gender = payload;
        },
        setLanguages : ( state, { payload } ) => {
            return {
                ...state,
                user : {
                    ...state.user,
                    languages : [ ...state.user.languages, payload ]
                }
            }
        },
        removeLanguage : ( state, { payload } ) => {
            return {
                ...state,
                user : {
                    ...state.user,
                    languages : state.languages.filter(
                        ( language ) => language !== payload )
                }
            }
        },
    },
    extraReducers : {
        [ authenticate.pending ] : ( state, { meta } ) => {
            state.authenticate.requestId = meta.requestId;
            state.authenticate.status = PENDING;
        },
        [ authenticate.fulfilled ] : ( state, { meta, payload } ) => {
            if( state.authenticate.requestId !== meta.requestId ) return;

            state.user.uid = payload.uid;
            state.user.email = payload.email;
            if( payload.signup ) {
                state.user.displayName = payload.displayName;
                state.user.gender = payload.gender;
                state.user.languages = payload.languages
            }
            state.user.displayName = payload.displayName;
            state.authenticate.status = FULFILLED;
        },
        [ authenticate.rejected ] : ( state, { meta, error } ) => {
            if( state.authenticate.requestId !== meta.requestId ) return;

            state.authenticate.error = error.code;
            state.authenticate.status = REJECTED;
        },

        RESET : () => initialState,
    },
} );

export const {
    setClubIds,
    setDisplayName,
    setGender,
    setUserId,
    setUser,
    setFirebaseAuthReady,
    resetAuthenticationStatus,
    setFirebaseReady,
    setLanguages,
    removeLanguage
} = user.actions;

export const listenToAuthenticationChanges = () =>
    ( dispatch, _ ) => {
        const auth = getAuth( firebaseApp );

        onAuthStateChanged( auth, ( user ) => {

            if( user ) { // if state is fulfilled, update profile, displayName: user.displayName
                dispatch( setUser( { uid : user.uid, email : user.email } ) );
            }
            console.log( "test" );

            dispatch( setFirebaseAuthReady() );
        } );
    };

export const logout = () =>
    ( dispatch, _ ) => {
        dispatch( { type : "RESET" } );

        signOut( getAuth( firebaseApp ) );
    };

// export default authSlice.reducer;

const selectAuth = ( state ) => state.auth;

export const selectAuthenticationSuccess = createSelector(
    selectAuth,
    ( data ) => data.authenticate.status === FULFILLED
);

export const selectAuthenticationIsWaiting = createSelector(
    selectAuth,
    ( data ) => data.authenticate.status === PENDING
);

export const selectAuthenticationError = createSelector( selectAuth, ( data ) =>
    data.authenticate.status === REJECTED ? data.authenticate.error : null
);

export const selectUser = createSelector( selectAuth, ( data ) => data.user );

export const selectFirebaseAuthReady = createSelector(
    selectAuth,
    ( data ) => data.firebaseAuthReady
);

export const selectFirebaseReady = createSelector(
    selectAuth,
    ( data ) => data.firebaseReady
);