export const validateEmail = function (err, login = false) {
    if(!err) return false;
    let errorMessage;

    switch(err) {
        case 'auth/invalid-email' : errorMessage = 'The email you entered is invalid';
            break;
        case 'auth/user-not-found' : errorMessage = 'User does not exist';
            break;
        case 'auth/email-already-exists' : errorMessage = 'User is already registered';
            break;
        case 'auth/email-already-in-use' : errorMessage = 'User is already registered';
            break;
        default : return false;
    }

    if(login) {
        const signInForm = document.querySelector('#basicFormLogin');
        signInForm.querySelector('.formBasicEmailFeedback').innerHTML = errorMessage;
    } else {
        const regForm = document.querySelector('#registrationForm');
        regForm.querySelector('.regFormEmailFeedback').innerHTML = errorMessage;
    }

    return true;
}

export const validatePassword = function (err, login = false) {
    if(!err) return false;
    let errorMessage;

    switch(err) {
        case 'auth/internal-error' : errorMessage = 'Please enter a password';
            break;
        case 'auth/wrong-password' : errorMessage = 'You have entered the incorrect password';
            break;
        case 'auth/invalid-password' : errorMessage = 'Password must be at least six characters';
            break;
        case 'auth/weak-password' : errorMessage = "Please choose a stronger password"
            break;
        default : return false;
    }

    if(login) {
        const signInForm = document.querySelector('#basicFormLogin');
        signInForm.querySelector('.formBasicPasswordFeedback').innerHTML = errorMessage;
    } else {
        const regForm = document.querySelector('#registrationForm');
        regForm.querySelector('.regFormPasswordFeedback').innerHTML = errorMessage;
    }
    return true;
}