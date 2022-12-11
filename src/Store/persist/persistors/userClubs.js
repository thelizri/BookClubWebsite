import { child, get, onValue, set } from "firebase/database";

const toFirebase = ( state, prevState, dbRef ) => {
    const clubs = state.userInfo
    set(child(dbRef, "clubs"), clubs)
};

const fromFirebaseOnce = ( state, dispatch, dbRef ) => {

};

const fromFirebaseSub = (state, dispatch, dbRef) => {

}

const persistUserClubs = {
    toFirebase,
    fromFirebaseOnce,
    fromFirebaseSub,
};

export default persistUserClubs;