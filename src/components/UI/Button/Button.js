import React from "react";

import "./Button.css";

const Button = (props) => {
    return (
        <button
            className="button"
            onClick={props.onLogout}
            type={props.type || "button"}
            // disabled={props.disabled}
        >
            Login
        </button>
    );
};

export default Button;
