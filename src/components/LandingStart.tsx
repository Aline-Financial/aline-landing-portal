import React from "react";

import cardAndPhone from "@images/card_and_phone.png";
import LandingStartForm from "@components/LandingStartForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LandingStart = (props: {learnMoreHref: string}) => {

    const mainGraphic = (
        <img src={cardAndPhone}
             alt="Main Graphic"
             className="img-fluid"
             draggable={false}/>
    );

    const mainText = (
        <div>
            <h1 className="h1 fw-bold">Keep Your <span className="text-primary">Money With You</span></h1>
            <p className="lead">Your money <span className="text-primary">belongs in your pocket</span>. Just like your bank. Apply for an account today!</p>
        </div>
    );

    const learnMoreLink = (
        <div className="position-absolute bottom-0 text-center w-100 d-lg-block d-none">
            <a href={props.learnMoreHref}
               className="d-inline-block link-primary text-decoration-none fs-5 my-3 animate__animated animate__shakeY animate__infinite animate__slowest">
                Learn More
                <br/>
                <FontAwesomeIcon icon={["fas", "chevron-down"]}/>
            </a>
        </div>
    );

    return (
        <div className="container container-fullscreen position-relative">
            <div className="row justify-content-center align-items-baseline col-lg-10 col-sm-8 mx-auto pt-5">
                <div className="col-lg-4 col-12 order-lg-0 order-1">
                    {mainText}
                    <LandingStartForm/>
                </div>
                <div className="col-lg-6 col-12 order-lg-1 order-0">
                    {mainGraphic}
                </div>
            </div>
            {learnMoreLink}
        </div>
    );

};

export default LandingStart;
