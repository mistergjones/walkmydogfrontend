import React from "react";
import "./SignUp.css";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/FooterHeader";
import Button from "../../components/UI/Button/Button";
import Card from "../UI/Card/Card";

const SignUp = () => {
    const signUpEmailHandler = (e) => {
        // this function shows the hidden email fields should a user sign up via email
        e.preventDefault();
        const showEmailFields = document.getElementsByClassName(
            "showEmailFields"
        );
        showEmailFields[0].style.visibility = "visible";
    };

    return (
        <>
            <MainHeader />
            <div className="signUp">
                <h1>SIGN UP HERE</h1>
                <h3>IT'S COMPLETELY FREE</h3>
                <form className="signUpFormFacebook" action="">
                    <label htmlFor="countryDropDownBox">
                        Choose Country and language
                    </label>
                    <select name="" id="countryDropDownBox">
                        <option value="0">Australia (EN)</option>
                        <option value="1">UK (EN)</option>
                        <option value="2">France (FR)</option>
                        <option value="3">Japanese (JP)</option>
                    </select>
                    <hr></hr>
                    <button type="submit">Continue with Facebook</button>
                </form>
                OR
                <form className="signUpFormEmail" action="">
                    <button
                        // type="submit"
                        className="hideEmail"
                        onClick={signUpEmailHandler}
                    >
                        Sign Up with Email
                    </button>
                    <div className="showEmailFields">
                        <input type="text" placeholder="Firstname" />
                        <input type="text" placeholder="Lastname" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat Password" />
                        <button type="submit">Create Account</button>
                    </div>
                </form>
            </div>

            <MainFooter />
        </>
    );
};

export default SignUp;
