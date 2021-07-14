import {SignUpFormStep} from "@interfaces";
import React from "react";
import SignUpFormField from "@components/SignUpFormField";
import {Field} from "formik";
import SignUpFormError from "@components/SignUpFormError";

const StepText = ({message}: {message: string}) => {
    return <div className="fw-light m-2 mb-5 fs-5 animate__animated animate__fadeIn animate__delay-1s">
        {message}
    </div>;
};

const basicInfo: SignUpFormStep = (props) => (
    <>
        <StepText message="Let's start with some basic information."/>
        <div className="row row-cols-1 row-cols-md-2 my-2">
            <div className="col">
                <SignUpFormField {...props} field="firstName" placeholder="First Name"/>
            </div>
            <div className="col">
                <SignUpFormField {...props} field="lastName" placeholder="Last Name"/>
            </div>
        </div>
        <div className="row row-cols-1 my-2">
            <div className="col">
                <SignUpFormField {...props} field="email" placeholder="Email"/>
            </div>
        </div>
    </>
);

const DateInput = (props: any) => (
    <input className="form-control"
           type="date" {...props}/>
);

const dateOfBirth: SignUpFormStep = (props) => (
    <>
        <StepText message="When were you born?"/>
        <div className="row">
            <div className="col-5 mx-auto">
                <Field name="dateOfBirth" as={DateInput} placeholder="Date of Birth"/>
                <SignUpFormError {...props} field="dateOfBirth"/>
            </div>
        </div>
    </>
);

const SignupStepsData: SignUpFormStep[] = [

    basicInfo,
    dateOfBirth

];

export default SignupStepsData;
