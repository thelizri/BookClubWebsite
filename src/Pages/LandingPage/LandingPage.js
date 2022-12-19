import React from 'react';
import { Link } from "react-router-dom";
import "./LandingPageStyle.css";

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
        <div className={ "image" }>
            <img className={ "image_img" }
                 src={ require( "../../Images/background.jpg" ) }
                 alt={ "cant load image" }/>
            <div className={ "image_overlay" }>
                <h1 className={ "image-header" }>{ TEXT.TITLE }</h1>
                <p className={ "image-paragraph" }>{ TEXT.MESSAGE }</p>
                <Link to="/registration">
                    <button type="button" className="btn btn-primary"
                            id="sign-up-button">{ TEXT.SIGN_UP }</button>
                </Link>
                <div className="row">
                    <Link to="/login">
                        <p>{ TEXT.SIGN_IN }</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
