import React from "react";
import "./MainHeader.css";
import Navigation from "./Navigtion";

// NOTE: simply prop drilling to Navigation if a successful login
const MainHeader = (props) => {
    return (
        <header className="mainHeader">
            <h1>Dog Walker Logo</h1>
            <Navigation
                isLoggedIn={props.isAuthenticated}
                onLogout={props.onLogout}
            />
        </header>
    );
};

export default MainHeader;
