import {Link} from "react-router-dom";

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
export const LandingPage = function() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>{ TEXT.TITLE }</h1>
                    <p>{ TEXT.MESSAGE }</p>
                </div>
                <div className="col-md-4">
                    <Link to="/registration">
                        <button type="button" className="btn btn-primary" id="sign-up-button">{ TEXT.SIGN_UP }</button>
                    </Link>
                    <div className="row">
                        <Link to="/login">
                            <a href="src/pages#">{ TEXT.SIGN_IN }</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
