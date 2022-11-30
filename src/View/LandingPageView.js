/**
 * String Constants
 */
const TEXT = {
    TITLE : "Organizing book clubs has never been this easy.",
    MESSAGE : "Find readers with similar book tastes to co-read books with.\
        Propose and vote for which book to read next and let YomuBo calculate the\
        book with most votes.",
    SIGN_UP : "SIGN UP",
    SIGN_IN : "Already registered? Sign in here!",
}

/**
 * Landing Page View
 */
export default function LandingPageView(props) {
    return (
        <div>
            <div>
                <h1>{ TEXT.TITLE }</h1>
                <p>{ TEXT.MESSAGE }</p>
            </div>
            <div>
                <button id="sign-up-button">{ TEXT.SIGN_UP }</button>
                <a>{ TEXT.SIGN_IN }</a>
            </div>
        </div>
    );
}
