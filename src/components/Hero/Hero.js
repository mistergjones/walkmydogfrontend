import React from "react";
import "./Hero.css";

import Button from "../UI/Button/Button";

const Hero = () => {
    return (
        <div className="hero">
            <h1>Search for an experienced dog walker</h1>
            <h3>Who really are pet friendly</h3>
            <div className="searchBar">
                <form className="searchForm" action="">
                    <div>
                        <label htmlFor="searchDropDownBox">
                            I'm looking for:
                        </label>

                        <select name="" id="searchDropDownBox">
                            <option value="0">30 minute walker</option>
                            <option value="1">60 minute walker</option>
                            <option value="2">30 minute home visitor</option>
                            <option value="3">60 minute home visitor</option>
                        </select>

                        <label htmlFor="searchLocation">Near:</label>

                        <input
                            type="text"
                            name=""
                            id="searchLocation"
                            placeholder="Suburb"
                        />

                        <input type="button" value="Search" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;
