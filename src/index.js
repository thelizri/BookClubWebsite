import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from "react-dom"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppView from './View/AppView';


// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <AppView />
  </React.StrictMode>
);
