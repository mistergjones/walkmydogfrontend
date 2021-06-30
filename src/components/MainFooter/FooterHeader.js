import React from "react";

import "./FooterHeader.css";
import FooterNavigation from "./FooterNavigation";

const FooterHeader = (props) => {
    return (
        <div className="footerHeader">
            <h1>Footer Logo here</h1>
            <FooterNavigation />
        </div>
    );
};

export default FooterHeader;
