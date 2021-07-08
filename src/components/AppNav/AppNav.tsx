import React from "react";
import {AppNavDropdowns} from "./app-nav.dropdowns";
import {AppNavDropdown} from "./AppNavDropdown/AppNavDropdown";
import {Link} from "react-router-dom";

export class AppNav extends React.Component<any, any> {

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">Aline Financial</Link>
                    <ul className="navbar-nav ms-auto">
                        {AppNavDropdowns.map((dropdown) => (
                            <AppNavDropdown key={`dropdownMenu${dropdown.label}`} label={dropdown.label} routes={dropdown.routes}/>
                        ))}
                        <li key="login" className="nav-item mx-2">
                            <a href={`${process.env.REACT_APP_MEMBER_DASHBOARD_URL}/login`}>
                                <button className="btn btn-outline-light rounded-pill">Log In</button>
                            </a>
                        </li>
                        <li key="signup" className="nav-item mx-2">
                            <a href={`/signup`}>
                                <button className="btn btn-primary rounded-pill">Sign Up</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
