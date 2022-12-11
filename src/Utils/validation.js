export const validateEmail = function (err) {
    if(!err) return false;
    let errorMessage;

    switch(err) {
        case 'auth/invalid-email' : errorMessage = 'The email you entered is invalid';
            break;
        case 'auth/user-not-found' : errorMessage = 'User does not exist';
            break;
        case 'auth/email-already-exists' : errorMessage = 'User is already registered';
            break;
        default : return false;
    }

    const signInForm = document.querySelector('#basicFormLogin');
    signInForm.querySelector('.formBasicEmailFeedback').innerHTML = errorMessage;
    return true;
}

export const validatePassword = function (err) {
    if(!err) return false;
    let errorMessage;

    switch(err) {
        case 'auth/internal-error' : errorMessage = 'Please enter a password';
            break;
        case 'auth/wrong-password' : errorMessage = 'You have entered the incorrect password';
            break;
        case 'auth/invalid-password' : errorMessage = 'Password must be at least six characters.';
            break;
        default : return false;
    }

    const signInForm = document.querySelector('#basicFormLogin');
    signInForm.querySelector('.formBasicPasswordFeedback').innerHTML = errorMessage;
    return true;
}