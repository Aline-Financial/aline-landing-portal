import React, {FormEvent} from "react";

export const LandingStartForm = () => {

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating">
                <input id="email-get-started"
                       name="email"
                       type="text"
                       className="form-control"
                       placeholder="Enter Your Email"/>
                <label htmlFor="email-get-started">Enter Your Email</label>
            </div>
            <button className="btn btn-primary" type="submit">Get Started</button>
        </form>
    );
};
