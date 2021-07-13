import React from "react";
import {useLocation} from "react-router";
import SignUpFormik from "@components/SignUpFormik";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    const email = location.state?.email;

    return (
        <SignUpFormik email={email}/>
    );
};

export default SignUp;
