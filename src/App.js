import React, { useContext, useState, useEffect } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import FooterHeader from "./components/MainFooter/FooterHeader";

// the below module is used to provide a way to determine which menu/access to show as a result of being loggedin/logged out.
import AuthContext from "./store/auth-context";

function App() {
    // determine if someone is logged in
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLogin = localStorage.getItem("isLoggedIm");
        if (storedUserLogin === "1") setisLoggedIn(true);
        console.log("DOES THIS RUN?");
        return () => {};
    }, []);

    // this function handles a succesful login
    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setisLoggedIn(true);
    };

    // handles the logout functionality
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setisLoggedIn(false);
    };

    // need to conditionally render
    return (
        <>
            {/* pass props to mainheader then to navigation. PROP DRILLING */}
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <Hero />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
            <FooterHeader />
        </>
    );
}

export default App;
