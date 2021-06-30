import React from "react";

import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="/">Walkers</a>
                </li>
                <li>
                    <a href="/">Owners</a>
                </li>
                <li>
                    <a href="/">Signup</a>
                </li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
