import React, {Component} from "react";
import AppNavRoutes from "@src/app-nav-routes";
import {Link} from "react-router-dom";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";
import "@styles/AppNav.sass";
import AppNavDrawer from "@components/AppNavDrawer";
import AppNavDropdown from "@components/AppNavDropdown";
import Brand from "@components/Brand";

class AppNav extends Component<any, {scrolled: boolean}> {

    mounted = false;

    constructor(props: any) {
        super(props);
        this.state = {
            scrolled: false
        };
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        const scrollY = window.scrollY;
        if (this.mounted)
            this.setState({
                scrolled: scrollY >= 75
            });
    }

    componentDidMount() {
        this.mounted = true;
        this.setState({
            scrolled: false
        });
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <div className="fixed-top">
                <div aria-label="navigation" className={`animate__animated animate__slideInDown animate__faster app-navbar navbar navbar-expand-lg navbar-dark bg-dark py-3 ${this.state.scrolled ? "nav-shadow" : ""}`}>
                    <div className="container">
                        <div className="navbar-nav d-inline-flex d-lg-none">
                            <button className="btn btn-outline-light"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#app-nav-drawer">
                                <FaIcon icon={["fas", "bars"]}/>
                            </button>
                        </div>
                        <Brand/>
                        <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                            {AppNavRoutes.map((dropdown) => (
                                <AppNavDropdown key={`dropdownMenu${dropdown.label.replace(/\s/g, "")}`} label={dropdown.label} routes={dropdown.routes}/>
                            ))}
                            <li key="login" className="nav-item mx-2">
                                <Link to="/login">
                                    <button className="btn btn-outline-light rounded-pill">Log In</button>
                                </Link>
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

export default AppNav;
