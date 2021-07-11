import React from "react";
import {useLocation} from "react-router";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    const email = location.state?.email;
    return <div className="padding-past-nav">{email}</div>;
};

export default SignUp;
