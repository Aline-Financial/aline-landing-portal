import React from "react";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="container-fluid py-5 bg-light mt-5">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="d-inline-block text-muted fw-bold mb-3 text-decoration-none fs-5" href={"/about#team"}>Team Aline</a>
                                    </li>
                                    <li>
                                        <a className="d-inline-block text-muted fw-bold mb-3 text-decoration-none fs-5" href={"/login"}>Log In</a>
                                    </li>
                                    <li>
                                        <a className="d-inline-block text-muted fw-bold mb-3 text-decoration-none fs-5" href={"/signup"}>Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5 className="text-muted fw-bold">Contact</h5>
                                <a className="text-muted fs-6 text-decoration-none d-inline-block my-2" href="mailto:aline-financial@mail.com">aline-financial@mail.com</a>
                                <h5 className="text-muted fw-bold mt-3">Source Code</h5>
                                <a className="text-muted text-decoration-none d-inline-block" href="https://github.com/Aline-Financial">
                                    <FaIcon icon={["fab", "github"]} className="fs-4"/> <span className="d-inline-block py-2">Github</span>
                                </a>
                            </div>
                        </div>
                        <div className="row py-5 align-items-center text-muted">
                            &copy; Aline Financial
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
