import React from "react";
import creditCard from "@images/credit_card.png";
import LandingStart from "@components/LandingStart";
import LandingCards from "@components/LandingCards";
import LandingSection from "@components/LandingSection";

/**
 * <strong>Page - Landing</strong>
 * <p>Component that represents the home page.</p>
 * <p>Using Components:</p>
 * <ul>
 *     <li>{@link LandingStart}</li>
 * </ul>
 */
export const Landing = () => {

    const platinumCardTitle = <>Get Approved for <span className="text-primary">Platinum</span></>;
    const platinumCardBody = <>Apply for a checking account today and get approved for an <span className="text-primary fw-bold">Aline Financial Platinum</span> credit card with <span className="text-primary">APR as low as 3%.</span></>;

    return (
        <div className="container-fluid">
            <LandingStart learnMoreHref="#learn-more"/>
            <a id="learn-more"/>
            <LandingCards/>
            <LandingSection image={creditCard}
                            title={platinumCardTitle}
                            body={platinumCardBody}
                            buttonText="Get Started"
                            buttonRoute="/signup"
                            align="start"/>
            <LandingSection image={creditCard}
                            title={platinumCardTitle}
                            body={platinumCardBody}
                            buttonText="Get Started"
                            buttonRoute="/signup"
                            align="end"
                            light/>
        </div>
    );
};

export default Landing;
