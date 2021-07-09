import React from "react";
import "./AppNav.scss";
import {AppNavRoutes} from "./appNavRoutes";
import {AppNavDropdown} from "./app-nav-dropdown/AppNavDropdown";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "@images/logo.svg";
import {AppNavDrawer} from "./app-nav-drawer/AppNavDrawer";

export class AppNav extends React.Component<any, any> {

    render() {
        return (
            <div className="fixed-top">
                <div className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                    <div className="container">
                        <div className="navbar-nav d-inline-flex d-lg-none">
                            <button className="btn btn-outline-light"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#app-nav-drawer">
                                <FontAwesomeIcon icon={["fas", "bars"]}/>
                            </button>
                        </div>
                        <Link to="/" className="navbar-brand align-items-center">Aline
                            <img draggable={false} src={logo} className="mb-1" alt="$"/>
                            Financial</Link>
                        <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                            {AppNavRoutes.map((dropdown) => (
                                <AppNavDropdown key={`dropdownMenu${dropdown.label.replace(" ", "")}`} label={dropdown.label} routes={dropdown.routes}/>
                            ))}
                            <li key="login" className="nav-item mx-2">
                                <a href={`${process.env.REACT_APP_MEMBER_DASHBOARD_URL}/login`}>
                                    <button className="btn btn-outline-light rounded-pill">Log In</button>
                                </a>
                            </li>
                            <li key="signup" className="nav-item mx-2">
                                <Link to={"/signup"}>
                                    <button className="btn btn-primary rounded-pill">Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <AppNavDrawer/>
            </div>
        );
    }
}
