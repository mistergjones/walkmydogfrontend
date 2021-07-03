import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignUp from "./components/SignUp/SignUp";
import FAQ from "./components/FAQ/FAQ";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <App /> */}
            <Route exact path="/" component={App} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/login" component={Login} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
