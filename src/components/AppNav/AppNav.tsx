import React from "react";
import {AppNavDropdowns} from "./app-nav.dropdowns";
import {AppNavDropdown} from "./AppNavDropdown/AppNavDropdown";

export class AppNav extends React.Component<any, any> {

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div className="container">
                    <a href="/" className="navbar-brand">Aline Financial</a>
                    <ul className="navbar-nav ms-auto">
                        {AppNavDropdowns.map((dropdown) => (
                            <AppNavDropdown label={dropdown.label} routes={dropdown.routes}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
