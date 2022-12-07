import React from 'react';
import "./NavigationBarStyle.css";
import {Link} from "react-router-dom";

export const NavigationBarView = function() {
    return(<nav className="navbar navbar-light navbar-expand-lg" id={"navigation-bar"}>
        <span id={"hiddenPadding"}>llll</span>
        <a href="src/components#" className="navbar-brand"><span id={"name1"}>Yomu</span><span id={"name2"}>Bo</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={"navbarCollapse"}>
            <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                    <Link to="/">
                        <a className="nav-link" href="src/components#" id={"navigation"}>Home</a>
                    </Link>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="src/components#" id={"navigation"}>Clubs</a>
                </li>
                <li className="navbar-item">
                    <Link to="/booksearch">
                        <a className="nav-link" href="src/components#" id={"navigation"}>Books</a>
                    </Link>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href={"#"} id={"navigation"}>About Us</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href={"#"} id={"navigation"}>Profile</a>
                </li>
            </ul>
        </div>
        <span id={"hiddenPadding"}>llll</span>
    </nav>);
};