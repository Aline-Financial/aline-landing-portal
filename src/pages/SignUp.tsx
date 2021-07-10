import React from "react";
import {useLocation} from "react-router";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    return <div>{location.state.email}</div>;
};

export default SignUp;
