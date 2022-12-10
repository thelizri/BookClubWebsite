// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookSearchPage } from "./Pages/BookSearch/BookSearchPage";
import { ClubPage } from "./Pages/ClubPage/ClubPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegistrationPage } from "./Pages/RegistrationPage/RegistrationPage";
import {NotYetImplementedPage} from "./Pages/NotYetImplementedPage/NotYetImplementedPage";
import store from "./Store/store"


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LandingPage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/registration" element={ <RegistrationPage/> }/>
                <Route path="/booksearch" element={ <BookSearchPage/> }/>
                <Route path="/club" element={ <ClubPage/> }/>
                <Route path="/error" element={ <NotYetImplementedPage/> }/>
            </Routes>
        </BrowserRouter>
    </Provider>
);
