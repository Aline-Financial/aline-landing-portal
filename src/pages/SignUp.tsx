import React from "react";
import {useLocation} from "react-router";

export const SignUp = () => {
    const location = useLocation<{email: string}>();
    return <div>{location.state?.email}</div>;
};
