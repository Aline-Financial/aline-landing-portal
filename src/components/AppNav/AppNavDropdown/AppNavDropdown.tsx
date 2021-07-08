import React from "react";
import {AppNavDropdownProps} from "./AppNavDropdown.props";

export class AppNavDropdown extends React.Component<AppNavDropdownProps, any> {

    dropdown: AppNavDropdownProps;

    constructor(props: AppNavDropdownProps) {
        super(props);
        this.dropdown = props;
    }

    render() {
        return (
            <li className="nav-item dropdown">
                <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id={`dropdownLink${this.dropdown.label}`}
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false">
                    {this.dropdown.label}
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                    {
                        this.dropdown.routes.map((route) => (
                            <li>
                                <a className="dropdown-item" href={route.route}>{route.label}</a>
                            </li>
                        ))
                    }
                </ul>
            </li>
        );
    }

}
