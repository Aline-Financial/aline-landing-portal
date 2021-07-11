import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <a className="d-block text-muted fw-bold mb-3 text-decoration-none fs-5" href={"/about#team"}>Team Aline</a>
                                <a className="d-block text-muted fw-bold mb-3 text-decoration-none fs-5" href={"/login"}>Log In</a>
                                <a className="d-block text-muted fw-bold mb-3 text-decoration-none fs-5" href={"/signup"}>Sign Up</a>
                            </div>
                            <div className="col">
                                <h5 className="text-muted fw-bold">Contact</h5>
                                <a className="text-muted fs-6 text-decoration-none d-inline-block my-2" href="mailto:aline-financial@mail.com">aline-financial@mail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
