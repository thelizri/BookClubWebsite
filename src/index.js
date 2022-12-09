import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//import App from './Pages/AppView';
import { Provider } from "react-redux";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm"
import LoginForm from "./Components/LoginForm/LoginForm"
import store from "./Store/store"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./Pages/LandingPage/LandingPage";
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {ClubPage} from "./Pages/ClubPage/ClubPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import {BookSearchPage} from "./Pages/BookSearch/BookSearchPage";
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
                      <BookSearchPage />
                  </AccessIfAuthenticated>
                }
              />
              {/*<Route path="/club" element={<ClubPage />} />*/}
          </Routes>
      </BrowserRouter>
  </Provider>
);
