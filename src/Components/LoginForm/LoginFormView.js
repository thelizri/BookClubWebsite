import React from 'react';
import "./LoginFormStyle.css";
import { useRef } from "react";
import {Link} from "react-router-dom";

const LoginFormView = function ({
    error = "",
    waiting = false,
    loginStatus = false,
    onSubmit = (email, password, passwordConfirm) => {},
  }) {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (event) => {
        onSubmit(
        email.current.value,
        password.current.value
        );
    };

    return(
        <section className={"form my-4 mx-5"}>
            <div className={"container-fluid"}>
                <div className={"row gx-0"}>
                    <div className={"col mh-100 d-none d-lg-block"}>
                        <img src={require("../../Images/Timeless_Books.jpg")} className={"img-fluid"} alt={"Image Missing"}/>
                    </div>
                    <div className={"col px-5 pt-5"}>
                        <h1><span id={"name1"}>Yomu</span><span id={"name2"}>Bo</span></h1>
                        <h4>Sign into your account</h4>
                        <form>
                            <div className={"form-row"}>
                                <div className={"col"}>
                                    <input type={"email"} className={"form-control my-3"} placeholder={"Email"} required={true} ref={email}/>
                                    <div className="invalid-feedback">
                                        User does not exist
                                    </div>
                                </div>
                            </div>
                            <div className={"form-row"}>
                                <div className={"col"}>
                                    <input type={"password"} className={"form-control my-3"} placeholder={"********"} required={true} ref={password}/>
                                    <div className="invalid-feedback">
                                        Incorrect password
                                    </div>
                                </div>
                            </div>
                            <div className={"form-row"}>
                                <div className={"col"}>
                                    <button type={"submit"} className={"btn1"} onClick={handleSubmit}>Login</button>
                                </div>
                            </div>
                            <a href={"#"}>Forgot password?</a>
                            <Link to="/registration">
                                <p>Don't have an account? <a href={"#"}>Sign up here</a></p>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginFormView;