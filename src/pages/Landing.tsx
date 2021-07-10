import React from "react";
import LandingStart from "@components/LandingStart";

/**
 * <strong>Page - Landing</strong>
 * <p>Component that represents the home page.</p>
 * <p>Using Components:</p>
 * <ul>
 *     <li>{@link LandingStart}</li>
 * </ul>
 */
export const Landing = () => {
    return (
        <div className="container-fluid">
            <LandingStart learnMoreHref="#learn-more"/>
            <a id="learn-more"/>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <h1 className="display-1">Hello, world!</h1>
            </div>
        </div>
    );
};

export default Landing;
