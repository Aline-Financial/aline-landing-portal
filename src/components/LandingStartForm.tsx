import React, {ChangeEvent, FormEvent, useState} from "react";
import {useHistory} from "react-router";

const LandingStartForm = () => {

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
            <div className="input-group">
                <input id="email-get-started"
                       name="email"
                       type="text"
                       className="form-control"
                       onChange={handleChange}
                       placeholder="Enter Your Email"/>
                <button className="btn btn-primary" type="submit">Get Started</button>
            </div>
        </form>
    );
};

export default LandingStartForm;
