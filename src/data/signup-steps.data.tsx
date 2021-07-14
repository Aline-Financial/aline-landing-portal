import {SignUpFormStep} from "@interfaces";
import React from "react";
import SignUpFormField from "@components/SignUpFormField";
import {Field} from "formik";
import InputMask from "react-input-mask";
import SignUpFormError from "@components/SignUpFormError";

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

const basicInfo: SignUpFormStep = (props) => (
    <>
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
    </>
);

const dateOfBirth: SignUpFormStep = (props) => (
    <>
        <StepText header="Date of Birth" message="When were you born?"/>
        <div className="row">
            <div className="col">
                <InputMask mask={"99-99-9999"}  type="text" alwaysShowMask maskPlaceholder="MM/DD/YYYY">
                    <SignUpFormField {...props} field="dateOfBirth" placeholder="Date of Birth"/>
                </InputMask>
            </div>
        </div>
    </>
);

const SignupStepsData: SignUpFormStep[] = [

    basicInfo,
    dateOfBirth

];

export default SignupStepsData;
