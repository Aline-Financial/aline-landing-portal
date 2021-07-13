import React from "react";
import logo from "@images/logo.svg";
import logoLight from "@images/logo-light.svg";
import {Link} from "react-router-dom";

const Brand = ({light, scale}: {light?: boolean, scale?: number}) => {
    return (
        <Link to="/"
              className="d-inline-block py-1 ms-1 fs-5 text-decoration-none text-nowrap align-items-center"
              style={{transform: `scale(${scale})`}}>
            <span className="text-primary">Aline</span>
            <img draggable={false} src={light ? logoLight : logo} className="mb-1" alt="$"/>
            <span className={light ? "text-primary" : "text-light"}>Financial</span>
        </Link>
    );
};

export default Brand;
