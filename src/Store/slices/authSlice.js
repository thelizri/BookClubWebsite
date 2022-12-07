import {
    createSlice,
    createSelector,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../Constants/promiseStatus";

const initialState = {
    user: {
        uid: null,
        email: null,
    },

    firebaseAuthReady: false,
    firebaseReady: false,

    authenticate: {
        status: IDLE,
        requestId: null,
        error: "",
    },
};

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (
    { email, password, passwordConfirm, signup },
    { extra: { firebaseApp } }
  ) => {
    if (signup && password !== passwordConfirm)
      throw new Error("Passwords do not match :-/");

    const auth = getAuth(firebaseApp);

    const userCredential = signup ? 
    await createUserWithEmailAndPassword(auth, email, password) : 
    await signInWithEmailAndPassword(auth, email, password);

    return { uid: userCredential.user.uid, email: userCredential.user.email };
  }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      resetStatus: (state) => {
        state.authenticate.status = IDLE;
      },
      setUser: (state, { payload }) => {
        state.user.uid = payload.uid;
        state.user.email = payload.email;
      },
      setFirebaseAuthReady: (state) => {
        state.firebaseAuthReady = true;
      },
      setFirebaseReady: (state) => {
        state.firebaseReady = true;
      },
    },
    extraReducers: {
      [authenticate.pending]: (state, { meta }) => {
        state.authenticate.requestId = meta.requestId;
        state.authenticate.status = PENDING;
      },
      [authenticate.fulfilled]: (state, { meta, payload }) => {
        if (state.authenticate.requestId !== meta.requestId) return;
  
        state.user.uid = payload.uid;
        state.user.email = payload.email;
        state.authenticate.status = FULFILLED;
      },
      [authenticate.rejected]: (state, { meta, error }) => {
        if (state.authenticate.requestId !== meta.requestId) return;

        state.authenticate.error = error.message;
        state.authenticate.status = REJECTED;
      },
      
      RESET: () => initialState,
    },
  });

const setUser = authSlice.actions.setUser;
const setFirebaseAuthReady = authSlice.actions.setFirebaseAuthReady;

export const listenToAuthenticationChanges = () =>
  (dispatch, _, { firebaseApp }) => {
    const auth = getAuth(firebaseApp);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      }

      dispatch(setFirebaseAuthReady());
    });
  };

export const logout = () =>
  (dispatch, _, { firebaseApp }) => {
    dispatch({ type: "RESET" });

    signOut(getAuth(firebaseApp));
  };

// export default authSlice.reducer;

const selectAuth = (state) => state.auth;

export const selectAuthenticationIsWaiting = createSelector(
  selectAuth,
  (data) => data.authenticate.status === PENDING
);

export const selectAuthenticationError = createSelector(selectAuth, (data) =>
  data.authenticate.status === REJECTED ? data.authenticate.error : null
);

export const selectUser = createSelector(selectAuth, (data) => data.user);

export const selectFirebaseAuthReady = createSelector(
  selectAuth,
  (data) => data.firebaseAuthReady
);

export const selectFirebaseReady = createSelector(
  selectAuth,
  (data) => data.firebaseReady
);

export const resetAuthenticationStatus = authSlice.actions.resetStatus;
export const setFirebaseReady = authSlice.actions.setFirebaseReady;