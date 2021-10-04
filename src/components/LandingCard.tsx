import React from "react";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {LandingCardData} from "@interfaces";

const LandingCard = (props: {cardData: LandingCardData}) => {
    const {icon, title, description, buttonText, buttonRoute} = props.cardData;
    return (
        <div className="card text-center my-2 h-100 px-0">
            <div className="card-header">
                <div className="py-3">
                    <FaIcon icon={icon} size="4x" className="text-primary"/>
                </div>
                <h2 className="h5 fw-bold">{title}</h2>
            </div>
            <div className="card-body pb-5">
                <p className="card-text my-2 px-2">{description}</p>
                <Link to={buttonRoute}><button className="btn btn-primary mt-3 rounded-pill">{buttonText}</button></Link>
            </div>
        </div>
    );
};

export default LandingCard;
