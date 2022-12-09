import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./Store/store"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./Pages/LandingPage/LandingPage";
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {ClubPage} from "./Pages/ClubPage/ClubPage";
import {RegistrationPage} from "./Pages/RegistrationPage/RegistrationPage";
import {AccessIfAuthenticated} from "./Components/AccessController/AccessIfAuthenticated";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <AccessIfAuthenticated loggedIn>
                      <LandingPage />
                  </AccessIfAuthenticated>
                }
              />
              <Route path="/login" element={
                  <AccessIfAuthenticated loggedIn>
                      <LoginPage />
                  </AccessIfAuthenticated>
                }
              />
              <Route path="/registration" element={
                  <AccessIfAuthenticated loggedIn>
                      <RegistrationPage />
                  </AccessIfAuthenticated>
                }
              />
              <Route path="/club" element={
                  <AccessIfAuthenticated>
                      <ClubPage />
                  </AccessIfAuthenticated>
                }
              />
          </Routes>
      </BrowserRouter>
  </Provider>
);
