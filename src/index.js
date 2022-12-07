import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Search } from "./Components/BookSearch/Search";
import { Provider } from "react-redux";
import { store } from "./Store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Search />
    </Provider>
);
