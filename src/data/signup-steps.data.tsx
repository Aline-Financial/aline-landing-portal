import {SignUpFormStep} from "@interfaces";
import React from "react";
import {SignUpFormCurrencyField, SignUpFormField, SignUpFormMaskedField} from "aline-signup-form";

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
    ["firstName", "lastName", "email"],
    <>
        <StepText header="Hello!" message="Let's start with some basic information."/>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormField label="First Name" name="firstName" autoFocus/>
            </div>
            <div className="col">
                <SignUpFormField label="Last Name" name="lastName"/>
            </div>
        </div>
        <div className="row row-cols-1">
            <div className="col">
                <SignUpFormField label="Email" name="email"/>
            </div>
        </div>
    </>
];


const dateOfBirth: SignUpFormStep = [
    "More About You",
    ["dateOfBirth", "socialSecurity", "gender"],
    <>
            <StepText header="More About You..." message="You must be at least 18 years old to be a member."/>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <SignUpFormMaskedField mask="99/99/9999"
                                           maskPlaceholder={null}
                                           autoFocus
                                           name="dateOfBirth"
                                           label="Date of Birth"/>
                </div>
                <div className="col">
                    <SignUpFormMaskedField mask="999-99-9999"
                                           maskPlaceholder={null}
                                           name="socialSecurity"
                                           label="Social Security #"/>
                </div>
            </div>
        <div className="row">
            <div className="col">
                <SignUpFormField name="gender" label="Gender" as="select">
                    <option value={undefined} className="text-muted">Select a gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Unspecified">Prefer not to say...</option>
                </SignUpFormField>
            </div>
        </div>
    </>
];

const phoneNumber: SignUpFormStep = [
    "Phone Number",
    ["phone"],
    <>
        <StepText header="Phone Number" message="If we need to reach you, what is your phone number?"/>
        <div className="row row-cols-1">
            <div className="col">
                <SignUpFormMaskedField mask="(999) 999-9999"
                                       autoFocus
                                       name="phone"
                                       label="Phone Number"/>
            </div>
        </div>
    </>
];

const income: SignUpFormStep = [
    "Income",
    ["income"],
    <>
        <StepText header="How much do you make?" message="We know this is personal. But we are a bank."/>
        <div className="row">
            <div className="col">
                <SignUpFormCurrencyField label="Income" name="income"/>
            </div>
        </div>
    </>
];



const SignupStepsData: SignUpFormStep[] = [
    basicInfo,
    dateOfBirth,
    phoneNumber,
    income
];

export default SignupStepsData;
