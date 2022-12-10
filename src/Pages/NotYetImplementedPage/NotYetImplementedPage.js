import {Link} from "react-router-dom";
import React from 'react';
import "./NotYetImplementedPageStyle.css";

/**
 * String Constants
 */
const MESSAGE = "Error. This page has yet to be implemented. We apologize for the inconvenience!"

export const NotYetImplementedPage = function () {
    return (
        <div className={"image"}>
            <img className={"image_img"} src={require("../../Images/errorpage.jpg")} alt={"cant load image"}/>
            <div className={"image_overlay"}>
                <h1 className={"error-header"}>{MESSAGE}</h1>
            </div>
        </div>
    );
}