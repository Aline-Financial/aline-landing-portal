import React from "react";
import "./AppNav.scss";
import {AppNavDropdowns} from "./app-nav.dropdowns";
import {AppNavDropdown} from "./AppNavDropdown/AppNavDropdown";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo.svg";

export class AppNav extends React.Component<any, any> {

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
                <div className="container">
                    <div className="navbar-nav d-inline-flex d-lg-none">
                        <button className="btn btn-outline-light">
                            <FontAwesomeIcon icon={["fas", "bars"]}/>
                        </button>
                    </div>
                    <Link to="/" className="navbar-brand align-items-center">Aline
                        <img draggable={false} src={logo} className="mb-1" alt="$"/>
                        Financial</Link>
                    <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                        {AppNavDropdowns.map((dropdown) => (
                            <AppNavDropdown key={`dropdownMenu${dropdown.label}`} label={dropdown.label} routes={dropdown.routes}/>
                        ))}
                        <li key="login" className="nav-item mx-2">
                            <a href={`${process.env.REACT_APP_MEMBER_DASHBOARD_URL}/login`}>
                                <button className="btn btn-outline-light rounded-pill">Log In</button>
                            </a>
                        </li>
                        <li key="signup" className="nav-item mx-2">
                            <Link to={`/signup`}>
                                <button className="btn btn-primary rounded-pill">Sign Up</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
