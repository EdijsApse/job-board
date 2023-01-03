import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";

const Index = ReactDOM.createRoot(document.getElementById("app"));

Index.render(
    <Provider store={store}>
        <App />
    </Provider>
);
