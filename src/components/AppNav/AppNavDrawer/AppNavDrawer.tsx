import React from "react";
import "./AppNavDrawer.sass";
import {Link} from "react-router-dom";
import {AppNavDropdowns} from "../app-nav.dropdowns";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class AppNavDrawer extends React.Component<any, any> {
    render() {
        return (
            <div id="app-nav-drawer"
                 className="offcanvas offcanvas-start bg-dark text-light"
                 tabIndex={-1}>
                <div className="offcanvas-header">
                    <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"/>
                </div>
                <div className="offcanvas-body m-0 m-0">
                    <div className="app-nav-drawer-list my-3">
                        <Link to="/" className="drawer-item drawer-item-link fw-bold p-3" data-bs-dismiss="offcanvas">Home <FontAwesomeIcon icon={["fas", "home"]} className="ms-2"/></Link>
                    {
                        AppNavDropdowns.map(dropdown => (
                            <div key={`drawerDropdown${dropdown.label.replace(" ", "")}`}>
                                <a href={`#drawerDropdown${dropdown.label.replace(" ", "")}`}
                                   data-bs-toggle="collapse"
                                   className="drawer-item drawer-header d-flex justify-content-between p-3">
                                    {dropdown.label}
                                    <FontAwesomeIcon icon={["fas", "chevron-down"]} className="mx-2"/>
                                </a>
                                <div className="collapse" id={`drawerDropdown${dropdown.label.replace(" ", "")}`}>
                                    {
                                        dropdown.routes.map(route => (
                                            <Link key={`drawerLink${route.label.replace(" ", "")}`} to={route.route} className="drawer-item drawer-item-link ps-4 p-3" data-bs-dismiss="offcanvas">{route.label}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="row row-cols-2 pb-5">
                        <div className="col">
                            <a href={`${process.env.REACT_APP_MEMBER_DASHBOARD_URL}/login`}>
                                <button className="btn btn-outline-light w-100">Log In</button>
                            </a>
                        </div>
                        <div className="col">
                            <Link to={`/signup`}>
                                <button className="btn btn-primary w-100" data-bs-dismiss="offcanvas">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
