import React from 'react';

// React-bootstrap imports
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./NavigationBarStyle.css";

export const NavigationBarView = ( {
                                       logOut = () => {console.log( "logout" )}
                                   } ) => {
    // https://react-bootstrap.netlify.app/components/dropdowns/#split-button-dropdowns
    const profileButton = (
        <Dropdown id="profile-button" as={ ButtonGroup }>
            <Button variant="success">Profile</Button>
            <Dropdown.Toggle split variant="success"/>
            <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={ logOut }>Log out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    return ( <nav className="navbar navbar-light navbar-expand-lg"
                  id={ "navigation-bar" }>
        <span id={ "hiddenPadding" }>llll</span>
        <span className="navbar-brand"><strong
            id={ "name1" }>Yomu</strong><strong
            id={ "name2" }>Bo</strong></span>
        <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={ "navbarCollapse" }>
            <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                    <a className="nav-link" href="/"
                       id={ "navigation" }>Home</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="/club"
                       id={ "navigation" }>Clubs</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="/error"
                       id={ "navigation" }>Books</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href={ "/error" }
                       id={ "navigation" }>About Us</a>
                </li>
                <li className="navbar-item">
                    { profileButton }
                </li>
            </ul>
        </div>
        <span id={ "hiddenPadding" }>llll</span>
    </nav> );
};
