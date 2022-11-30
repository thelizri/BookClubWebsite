import React from 'react';

function NavigationBarView(props){
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><span id={"name1"}>Yomu</span><span id={"name2"}>Bo</span></a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home</a>
                <a className="nav-item nav-link active" href="#">Clubs</a>
                <a className="nav-item nav-link active" href="#">Books</a>
                <a className="nav-item nav-link active" href={"#"}>About Us</a>
            </div>
        </div>
        <span>Profile</span>
    </nav>);
};

export default NavigationBarView;