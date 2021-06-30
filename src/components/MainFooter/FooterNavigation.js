import React from "react";

import "./FooterNavigation.css";

const FooterNavigation = (props) => {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="/Social">Social</a>
                </li>
                <li>
                    <a href="/Search">Search</a>
                </li>
                <li>
                    <a href="/Locations">Locations</a>
                </li>
                <li>
                    <a href="/About-Us">About Us</a>
                </li>
            </ul>
        </div>
    );
};

export default FooterNavigation;
