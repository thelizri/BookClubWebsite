import { child, set } from "firebase/database";

export const setData = ( payload, dbRef ) => {
    const attributePath = `${ Object.keys( payload )[ 0 ] }`;
    set( child( dbRef, attributePath ), payload[ attributePath ] );
}