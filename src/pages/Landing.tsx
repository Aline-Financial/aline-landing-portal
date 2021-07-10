import React from "react";
import {LandingStart} from "@components/LandingStart";

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
            <LandingStart/>
        </div>
    );
};
