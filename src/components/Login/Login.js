import React, { useState, useEffect } from "react";
import "./Login.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
    // use State to check for updates and validate credentials
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(
            enteredEmail.includes("&") && enteredPassword.trim().length > 3
        );
        return () => {
            console.log("cleanup");
            console.log("IS Form valid?", formIsValid);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
        console.log("IS email valid?", emailIsValid);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 3);
        console.log("Is password valid? ", passwordIsValid);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        // NEED TO COME BACK TO THIS
    };
    return (
        <div className="login">
            <h2>Please Login</h2>
            <form onSubmit={submitFormHandler}>
                <label htmlFor="loginEmail">
                    Please enter your email address
                </label>
                <br></br>
                <input
                    type="email"
                    name=""
                    id="loginEmail"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <br></br>

                <label htmlFor="loginPassword">Your password</label>
                <br></br>
                <input
                    type="password"
                    name=""
                    id="loginPassword"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <br></br>
                <Button type="submit" disabled={!formIsValid}></Button>
            </form>
        </div>
    );
};

export default Login;
