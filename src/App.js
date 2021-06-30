import React, { useContext, useState } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import FooterHeader from "./components/MainFooter/FooterHeader";

// the below module is used to provide a way to determine which menu/access to show as a result of being loggedin/logged out.
import AuthContext from "./store/auth-context";

function App() {
    // determine if someone is logged in
    const [isLoggedIn, setisLoggedIn] = useState(false);

    // this function handles a succesful login
    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setisLoggedIn(true);
    };

    const logoutHander = () => {
        localStorage.removeItem("isLoggedIn");
        setisLoggedIn(false);
    };

    return (
        <>
            <MainHeader />
            <main>
                <Login />
                <Home />
            </main>
            <FooterHeader />
        </>
    );
}

export default App;
