import React, {ChangeEvent, FormEvent, useState} from "react";
import {useHistory} from "react-router";

export const LandingStartForm = () => {

    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        history.push("signup", {email});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-7 col-12">
                    <div className="form-floating">
                        <input id="email-get-started"
                               name="email"
                               type="text"
                               className="form-control"
                               onChange={handleChange}
                               placeholder="Enter Your Email"/>
                        <label htmlFor="email-get-started">Enter Your Email</label>
                    </div>
                </div>
                <div className="col-lg-5 col-12 my-auto">
                    <button className="btn btn-primary btn-lg" type="submit">Get Started</button>
                </div>
            </div>
        </form>
    );
};
