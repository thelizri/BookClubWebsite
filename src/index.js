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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RegistrationForm/>
  </Provider>
);
