import { child, set } from "firebase/database";

export const setChildData = (payload, dbRef ) => {
    let path = payload;
    let value = payload;

    if(typeof payload === 'object') {
        path = `${ Object.keys( payload )[ 0 ] }`;
        value = payload[ path ];
    }

    set( child( dbRef, path ), value );
}

export const setParentData = (payload, dbRef ) => {
    set( dbRef , payload );
}