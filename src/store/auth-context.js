import React from "react";

// Using createContext returns an object which is like a COMPONENT.
// Components that need to access this need to be WRAPPED inside it.
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    return;
};

export default AuthContext;
