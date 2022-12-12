import { child, get, onValue, set } from "firebase/database";

const toFirebase = ( state, prevState, dbRef ) => {
    const prevClubs = prevState.authSlice.user.clubIds.map(clubId =>
        prevState.clubSlice.clubs.map(club =>
            club.id === clubId));
    const clubs = state.clubSlice.clubs;
    set(child(dbRef, "clubs"), clubs);
};

const fromFirebaseOnce = async ( state, dispatch, dbRef ) => {
    const data = await get(dbRef).val();

};

const fromFirebaseSub = (state, dispatch, dbRef) => {
    return onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
    })
}

const persistUserClubs = {
    toFirebase,
    fromFirebaseOnce,
    fromFirebaseSub,
};

export default persistUserClubs;