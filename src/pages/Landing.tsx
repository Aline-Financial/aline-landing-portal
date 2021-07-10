import React from "react";
import LandingStart from "@components/LandingStart";
import LandingCards from "@components/LandingCards";

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
            <LandingCards/>
        </div>
    );
};

export default Landing;
