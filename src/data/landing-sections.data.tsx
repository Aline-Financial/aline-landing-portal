import React from "react";
import creditCard from "@images/credit_card.png";
import safePocket from "@images/safe_pocket.png";
import {LandingSectionProps} from "@props";

const landingSectionsData: LandingSectionProps[] = [

    {
        image: creditCard,
        title: <>Get Approved for <span className="text-primary">Platinum</span></>,
        body: <>Apply for a checking account today and get approved for an <span className="text-primary fw-bold">Aline Financial Platinum</span> credit card with <span className="text-primary">APR as low as 3%.</span></>,
        align: "start",
        buttonText: "Go Platinum",
        buttonRoute: "/signup"
    },
    {
        image: safePocket,
        title: <>Safe and <span className="text-primary">Secure.</span> Everywhere.</>,
        body: <>Your money belongs with you <span className="text-primary">anywhere you go.</span> Let us keep your money safe no matter where you are. <span className="fw-bold text-primary">Your pocket</span> has never been <span className="fw-bold text-primary">safer.</span></>,
        align: "end",
        buttonText: "Get Financially Secure",
        buttonRoute: "/signup"
    }

];

export default landingSectionsData;
