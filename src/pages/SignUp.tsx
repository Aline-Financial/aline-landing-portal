import React from "react";
import {useLocation} from "react-router";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    const email = location.state?.email;
    return <div>{email}</div>;
};

export default SignUp;
