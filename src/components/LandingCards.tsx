import React from "react";
import landingCardsData from "@data/landing-cards.data";
import LandingCard from "@components/LandingCard";

const LandingCards = () => {
    return (
        <div className="container-fluid bg-light py-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {landingCardsData.map(
                        cardData => (
                            <div className="col my-2" key={`landingCard${cardData.buttonText.replace(/\s/g, "")}`}>
                                <LandingCard cardData={cardData}/>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default LandingCards;
