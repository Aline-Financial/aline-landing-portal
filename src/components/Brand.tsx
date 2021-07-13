import React from "react";
import logo from "@images/logo.svg";
import logoLight from "@images/logo-light.svg";
import {Link} from "react-router-dom";

const Brand = (props: {light?: boolean}) => {
    return (
        <Link to="/" className="py-1 ms-1 fs-5 text-decoration-none text-nowrap align-items-center">
            <span className="text-primary">Aline</span>
            <img draggable={false} src={props.light ? logoLight : logo} className="mb-1" alt="$"/>
            <span className={props.light ? "text-primary" : "text-light"}>Financial</span>
        </Link>
    );
};

export default Brand;
