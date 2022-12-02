import React from 'react';
import "./NavigationBarStyle.css";

function NavigationBarView(props){
    return (<nav className="navbar navbar-expand-lg navbar-light" id={"navigation-bar"}>
        <a className="navbar-brand" href="src/components#"><span id={"name1"}>Yomu</span><span id={"name2"}>Bo</span></a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className={"navbar-nav"}>
                    <a className="nav-item nav-link active" href="src/components#" id={"navigation"}>Home</a>
                    <a className="nav-item nav-link active" href="src/components#" id={"navigation"}>Clubs</a>
                    <a className="nav-item nav-link active" href="src/components#" id={"navigation"}>Books</a>
                    <a className="nav-item nav-link active" href={"#"} id={"navigation"}>About Us</a>
                    <a className="nav-item nav-link active" href={"#"} id={"navigation"}>Profile</a>
                </div>
            </div>
    </nav>);
};

export default NavigationBarView;