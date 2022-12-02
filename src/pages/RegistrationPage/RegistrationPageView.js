import React from 'react';
import NavigationBarView from "../../components/NavigationBar/NavigationBarView";

function RegistrationPageView(props){
    return (<>
        <NavigationBarView />
        <div className={"container"}>
            <form>
                <div className="mb-2">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-4">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-check form-check-inline mb-4">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Male"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                </div>
                <div className="form-check form-check-inline mb-4">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Female"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                </div>
                <div className="form-check form-check-inline mb-4">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Other"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Other</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">SIGN UP</button>
            </form>
        </div>
    </>);
};

export default RegistrationPageView;