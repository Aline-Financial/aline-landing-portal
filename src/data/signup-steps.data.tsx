import {SignUpFormStep} from "@interfaces";
import React from "react";
import {SignUpFormField, SignUpFormMaskedField} from "aline-signup-form";
import {Field} from "formik";
import CurrencyInput from "react-currency-input-field";

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
    (props) => (<>
        <StepText header="Hello!" message="Let's start with some basic information."/>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormField {...props} autoFocus name="firstName" placeholder="First Name"/>
            </div>
            <div className="col">
                <SignUpFormField {...props} name="lastName" placeholder="Last Name"/>
            </div>
        </div>
        <div className="row row-cols-1">
            <div className="col">
                <SignUpFormField {...props} name="email" placeholder="Email"/>
            </div>
        </div>
    </>)
];


const dateOfBirth: SignUpFormStep = [
    "More About You",
    ["dateOfBirth", "socialSecurity", "gender"],
    (props) => (<>
            <StepText header="More About You..." message="You must be at least 18 years old to be a member."/>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <SignUpFormMaskedField mask="99/99/9999"
                                           autoFocus
                                           name="dateOfBirth"
                                           placeholder="Date of Birth"/>
                </div>
                <div className="col">
                    <SignUpFormMaskedField mask="999-99-9999"
                                           name="socialSecurity"
                                           placeholder="Social Security #"/>
                </div>
            </div>
        <div className="row">
            <div className="col">
                <SignUpFormField {...props} name="gender" placeholder="Gender" is="select">
                    <option value={undefined} className="text-muted">Select a gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Unspecified">Prefer not to say...</option>
                </SignUpFormField>
            </div>
        </div>
        </>)
];

const phoneNumber: SignUpFormStep = [
    "Phone Number",
    ["phone"],
    () => (<>
            <StepText header="Phone Number" message="If we need to reach you, what is your phone number?"/>
            <div className="row row-cols-1">
                <div className="col">
                    <SignUpFormMaskedField mask="(999) 999-9999"
                                           autoFocus
                                           name="phone"
                                           placeholder="Phone Number"/>
                </div>
            </div>
        </>)
];

const income: SignUpFormStep = [
    "Income",
    ["income", "incomeFrequency"],
    () => (<>
        <StepText header="Phone Number" message="If we need to reach you, what is your phone number?"/>
        <div className="row">
            <div className="col">
                <Field name="income">
                    {(props: any) => (
                        <CurrencyInput {...props}
                                       prefix="$"
                                       allowNegativeValue={false}
                                       fixedDecimalLength={2}
                                       groupSeparator=","
                                       decimalSeparator="."/>
                    )}
                </Field>
            </div>
        </div>
    </>)
];



const SignupStepsData: SignUpFormStep[] = [
    basicInfo,
    dateOfBirth,
    phoneNumber,
    income
];

export default SignupStepsData;
