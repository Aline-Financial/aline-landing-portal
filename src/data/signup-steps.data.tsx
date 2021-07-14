import {SignUpFormStep} from "@interfaces";
import React from "react";
import {SignUpFormField, SignUpFormMaskedField} from "aline-signup-form";

const StepText = ({message, header}: {message: string, header: string}) => {
    return (
        <div className="m-2">
            <div className="h2 fw-bold">{header}</div>
            <div className="fw-light mb-5 fs-5">
                {message}
            </div>
        </div>
    );
};

const basicInfo: SignUpFormStep = [
    "Basic Information",
    (props) => (<>
        <StepText header="Hello!" message="Let's start with some basic information."/>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormField {...props} field="firstName" placeholder="First Name"/>
            </div>
            <div className="col">
                <SignUpFormField {...props} field="lastName" placeholder="Last Name"/>
            </div>
        </div>
        <div className="row row-cols-1">
            <div className="col">
                <SignUpFormField {...props} field="email" placeholder="Email"/>
            </div>
        </div>
    </>)
];


const dateOfBirth: SignUpFormStep = [
    "More About You",
    (props) => (<>
            <StepText header="More About You..." message="You must be at least 18 years old to be a member."/>
            <div className="row">
                <div className="col">
                    <SignUpFormMaskedField mask="99/99/9999"
                                           name="dateOfBirth"
                                           placeholder="Date of Birth"/>
                </div>
            </div>
        <div className="row">
            <div className="col">
                <SignUpFormField {...props} field="gender" placeholder="Gender"/>
            </div>
        </div>
        </>)
];

const phoneNumber: SignUpFormStep = [
    "Phone Number",
    () => (<>
            <StepText header="Phone Number" message="If we need to reach you, what is your phone number?"/>
            <div className="row">
                <div className="col">
                    <SignUpFormMaskedField mask="(999) 999-9999"
                                           name="phone"
                                           placeholder="Phone Number"/>
                </div>
            </div>
        </>)
];



const SignupStepsData: SignUpFormStep[] = [
    basicInfo,
    dateOfBirth,
    phoneNumber
];

export default SignupStepsData;
