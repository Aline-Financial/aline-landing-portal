import React from "react";
import smoothstackImg from "@images/smoothstack-black.png";
import LandingStart from "@components/LandingStart";
import LandingCards from "@components/LandingCards";
import LandingSection from "@components/LandingSection";
import landingSectionsData from "@data/landing-sections.data";

/**
 * <strong>Page - Landing</strong>
 * <p>Component that represents the home page.</p>
 * <p>Using Components:</p>
 * <ul>
 *     <li>{@link LandingStart}</li>
 *     <li>{@link LandingCards}</li>
 *     <li>{@link LandingSection}</li>
 * </ul>
 */
export const Landing = () => {

    const [creditCardData, safePocketData] = landingSectionsData;
    const SmoothstackSection = () => <div className="container-fluid bg-light">
        <div className="container d-flex flex-row justify-content-center align-items-center">
            <div className="py-5 opacity-25">
                <img draggable="false" src={smoothstackImg} alt="Smoothstack" className="img-fluid" />
            </div>
        </div>
    </div>;

    return (
        <div className="container-fluid bg-white">
            <LandingStart learnMoreHref="#learn-more"/>
            <a id="learn-more" className="d-inline-block pt-5"/>
            <LandingCards/>
            <LandingSection image={creditCardData.image}
                            title={creditCardData.title}
                            body={creditCardData.body}
                            buttonText={creditCardData.buttonText}
                            buttonRoute={creditCardData.buttonRoute}
                            align={creditCardData.align}
                            key={creditCardData.buttonText.replace(/\s/g, "")}/>
            <SmoothstackSection/>
            <LandingSection image={safePocketData.image}
                            title={safePocketData.title}
                            body={safePocketData.body}
                            buttonText={safePocketData.buttonText}
                            buttonRoute={safePocketData.buttonRoute}
                            align={safePocketData.align}
                            key={safePocketData.buttonText.replace(/\s/g, "")}/>
        </div>
    );
};

export default Landing;
