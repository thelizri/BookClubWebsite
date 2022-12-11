import { child, get, onValue, set } from "firebase/database";

const toFirebase = function( state, prevState, dbRef ) {

};

const fromFirebase = function( state, dispatch, dbRef ) {

};

const persistUserClubs = {
    toFirebase,
    fromFirebase,
};

export default persistUserClubs;