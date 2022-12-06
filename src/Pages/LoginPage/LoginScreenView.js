import React from 'react';
import "./LoginScreenStyle.css";

function LoginScreenView(props){
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
                                    <input type={"email"} className={"form-control my-3"} placeholder={"Email"} required={true}/>
                                    <div className="invalid-feedback">
                                        User does not exist
                                    </div>
                                </div>
                            </div>
                            <div className={"form-row"}>
                                <div className={"col"}>
                                    <input type={"password"} className={"form-control my-3"} placeholder={"********"} required={true}/>
                                    <div className="invalid-feedback">
                                        Incorrect password
                                    </div>
                                </div>
                            </div>
                            <div className={"form-row"}>
                                <div className={"col"}>
                                    <button type={"submit"} className={"btn1"}>Login</button>
                                </div>
                            </div>
                            <a href={"#"}>Forgot password?</a>
                            <p>Don't have an account? <a href={"#"}>Sign up here</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginScreenView;