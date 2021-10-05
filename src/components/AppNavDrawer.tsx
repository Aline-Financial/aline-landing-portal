import React from "react";
import "@styles/AppNavDrawer.sass";
import {Link} from "react-router-dom";
import AppNavRoutes from "@src/app-nav-routes";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";
import {AppNavDropdownProps} from "@props";

const AppNavDrawer = () => {

    const generateDrawerDropdowns = (routes: AppNavDropdownProps[]) => {
        return routes.map(dropdown => (
            <div key={`drawerDropdown${dropdown.label.replace(/\s/g, "")}`}>
                <a href={`#drawerDropdown${dropdown.label.replace(/\s/g, "")}`}
                   data-bs-toggle="collapse"
                   className="drawer-item drawer-header d-flex justify-content-between p-3">
                    {dropdown.label}
                    <FaIcon icon={["fas", "chevron-down"]} className="mx-2"/>
                </a>
                <div className="collapse drawer-dropdown" id={`drawerDropdown${dropdown.label.replace(/\s/g, "")}`}>
                    {
                        dropdown.routes.map(route => (
                            <Link key={`drawerLink${route.label.replace(/\s/g, "")}`} to={route.route} className="drawer-item drawer-item-link ps-4 p-3" data-bs-dismiss="offcanvas">{route.label}</Link>
                        ))
                    }
                </div>
            </div>
        ));
    };

    return (
        <div id="app-nav-drawer"
             className="offcanvas offcanvas-start bg-dark text-light"
             tabIndex={-1}>
            <div className="offcanvas-header">
                <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>
            <div className="offcanvas-body m-0 m-0">
                <div className="app-nav-drawer-list my-3">
                    <Link to="/" className="drawer-item drawer-item-link fw-bold p-3" data-bs-dismiss="offcanvas">Home <FaIcon icon={["fas", "home"]} className="ms-2"/></Link>
                {
                    generateDrawerDropdowns(AppNavRoutes)
                }
                </div>
            </div>
            <div className="row row-cols-2 p-4">
                <div className="col">
                    <Link to="/login">
                        <button className="btn btn-outline-light w-100 rounded-pill">Log In</button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"/signup"}>
                        <button className="btn btn-primary w-100 rounded-pill" data-bs-dismiss="offcanvas">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppNavDrawer;
