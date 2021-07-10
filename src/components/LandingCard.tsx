import React from "react";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";
import {LandingCardData} from "@interfaces";

const LandingCard = (props: {landingCardData: LandingCardData}) => {
    const {landingCardData} = props;
    return (
        <div className="card text-center my-2 h-100">
            <div className="card-header">
                <div className="py-3">

                </div>
            </div>
        </div>
    );
};

export default LandingCard;
