const setValidationMessage = (parentElementId, childElementClass, message) => {
    const parentElement = document.querySelector( `#${parentElementId}` );
    parentElement.querySelector( `.${childElementClass}` ).innerHTML = message;
}

export const validateEmail = function( err, login = false ) {
    if( !err ) return false;
    let errorMessage;

    switch( err ) {
        case 'auth/invalid-email' :
            errorMessage = 'The email you entered is invalid';
            break;
        case 'auth/user-not-found' :
            errorMessage = 'User does not exist';
            break;
        case 'auth/email-already-exists' :
            errorMessage = 'User is already registered';
            break;
        case 'auth/email-already-in-use' :
            errorMessage = 'User is already registered';
            break;
        default :
            return false;
    }

    if( login ) {
        const signInForm = document.querySelector( '#basicFormLogin' );
        signInForm.querySelector( '.formBasicEmailFeedback' ).innerHTML =
            errorMessage;
    } else {
        const regForm = document.querySelector( '#registrationForm' );
        regForm.querySelector( '.regFormEmailFeedback' ).innerHTML =
            errorMessage;
    }

    return true;
}

export const validatePassword = function( err, login = false ) {
    if( !err ) return false;
    let errorMessage;

    switch( err ) {
        case 'auth/internal-error' :
            errorMessage = 'Please enter a password';
            break;
        case 'auth/wrong-password' :
            errorMessage = 'You have entered the incorrect password';
            break;
        case 'auth/invalid-password' :
            errorMessage = 'Password must be at least six characters';
            break;
        case 'auth/weak-password' :
            errorMessage = "Please choose a stronger password"
            break;
        case 'Passwords do not match' :
            errorMessage = err;
            break;
        default :
            return false;
    }

    if( login ) {
        const signInForm = document.querySelector( '#basicFormLogin' );
        signInForm.querySelector( '.formBasicPasswordFeedback' ).innerHTML =
            errorMessage;
    } else {
        const regForm = document.querySelector( '#registrationForm' );
        regForm.querySelector( '.regFormPasswordFeedback' ).innerHTML =
            errorMessage;
    }
    return true;
}

export const validateUniqueClubName = function( clubName, existentClubNames ) {
    if(!existentClubNames.hasOwnProperty(clubName)) return;

    setValidationMessage(
        '#clubCreation',
        '.clubNameFeedback',
        'Club name is already taken'
    );

    throw new Error("clubname");
}

export const validateStringLength = function( str, maxLength, parentElementId, childElementClass ) {
    if( str.length < maxLength ) return;

    setValidationMessage(
        parentElementId,
        childElementClass,
        `Club name must be less than ${maxLength} characters`
    )
    throw new Error("clubname");
}

export const validateGender = function( clubGender, creatorGender, parentElementId, childElementClass ) {
    if(clubGender === "All" || clubGender === creatorGender) return;
    setValidationMessage(
        parentElementId,
        childElementClass,
        "Selected gender is not matching your own"
    )
    throw new Error("gender");
}