import React from "react";

import "./LandingStart.sass";
import cardAndPhone from "@images/card_and_phone.png";
import {LandingStartForm} from "@components/LandingStartForm";

export const LandingStart = () => {

    const mainGraphic = () => {
        return (
            <img src={cardAndPhone}
                 alt="Main Graphic"
                 className="img-fluid"
                 draggable={false}/>
        );
    };

    const mainText = () => {
        return (
            <div>
                <h1 className="h3 fw-bold">Keep Your <span className="text-primary">Money With You</span></h1>
                <p className="lead">Your money <span className="text-primary">belongs in your pocket</span>. Just like your bank. Apply for an account today!</p>
            </div>
        );
    };

    return (
        <div className="container container-fullscreen position-relative">
            <div className="row justify-content-center align-items-baseline">
                <div className="col-lg-4 col-12 order-lg-0 order-1">
                    {mainText()}
                    <LandingStartForm/>
                </div>
                <div className="col-lg-6 col-12 order-lg-1 order-0">
                    {mainGraphic()}
                </div>
            </div>
        </div>
    );

};
