import React, {ReactFragment} from "react";
import "./LandingSection.sass";
import {Link} from "react-router-dom";

type LandingSectionProps = {
    image: string;
    title: ReactFragment;
    body: ReactFragment;
    buttonText: string;
    buttonRoute: string;
    align: "start" | "end";
    light?: boolean;
};

const LandingSection = (props: LandingSectionProps) => {
    const {image, title, body, buttonText, buttonRoute, align, light} = props;
    return (
        <div className={`container-fluid ${light ? "bg-light " : " "}py-section`}>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className={`col ${align == "end" ? "order-md-1" : ""} text-md-${align}`}>
                        <img draggable={false} src={image} className="img-fluid" alt={image}/>
                    </div>
                    <div className={`col ${align == "end" ? "order-md-0" : ""} text-md-${align == "end" ? "start" : "end"} text-start mt-5 mt-md-0`}>
                        <h2 className="display-6 fw-bold">{title}</h2>
                        <p className="lead">{body}</p>
                        <Link to={buttonRoute}>
                            <button className="btn btn-lg btn-primary my-md-5">{buttonText}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
