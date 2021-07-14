import React from "react";
import logo from "@images/logo.svg";
import logoLight from "@images/logo-light.svg";
import {Link} from "react-router-dom";

const Brand = ({light, scale, iconOnly}: {light?: boolean, scale?: number, iconOnly?: boolean}) => {
    return (
        <><Link to="/"
                className="d-inline-block py-1 ms-1 fs-5 text-decoration-none text-nowrap align-items-center"
                style={{transform: `scale(${scale})`}}>
            { !iconOnly ? <span className="text-primary">Aline</span> : null}
            <img draggable={false} src={light ? logoLight : logo} className="mb-1" alt="$"/>
            { !iconOnly ? <span className={light ? "text-primary" : "text-light"}>Financial</span> : null}
        </Link></>
    );
};

export default Brand;
