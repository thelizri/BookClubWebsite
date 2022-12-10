
export const handleError = function (err) {
    if(!err) return;
    let errorMessage;
    switch(err.code) {
        case 'auth/internal-error': errorMessage = 'Please enter a password';
            break;
        case 'auth/invalid-email': errorMessage = 'User does not exist';
            break;
        case 'auth/wrong-password': errorMessage = 'You entered the incorrect password';
            break;
        default: errorMessage = 'Unknown error';
    }

    const signupForm = document.querySelector('#basicFormLogin');
    signupForm.querySelector('.formBasicPasswordFeedback').innerHTML = errorMessage;
}