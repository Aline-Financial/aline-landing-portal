import React from "react";
import {SignUpFormStepProps} from "@props";

const SignUpFormStep = ({errors, touched, step}: SignUpFormStepProps) => {
    return (
        <div className="animate__animated animate__fadeIn">
            {step({errors, touched})}
        </div>
    );
};

export default SignUpFormStep;
