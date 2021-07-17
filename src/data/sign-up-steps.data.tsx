import {SignUpFormStep} from "@interfaces";
import React, {ReactFragment} from "react";
import {SignUpFormCurrencyField, SignUpFormField, SignUpFormMaskedField} from "aline-signup-form";
import states from "./states.data.json";

const StepText = ({message, header}: {message: string | ReactFragment, header: string | ReactFragment}) => {
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
        <StepText header={<><span className="text-primary">Hello</span> there!</>} message="Let's start with some basic information."/>
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
                <SignUpFormField label="Email" name="email" inputMode="email"/>
            </div>
        </div>
    </>,
    ["fas", "user"]
];


const dateOfBirth: SignUpFormStep = [
    "More About You",
    ["dateOfBirth", "socialSecurity", "gender"],
    <>
        <StepText header={<>More <span className="text-primary">about you</span>...</>} message="You must be at least 18 years old to be a member."/>
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
    </>,
    ["fas", "id-badge"]
];

const phoneNumber: SignUpFormStep = [
    "Phone Number",
    ["phone"],
    <>
        <StepText header={<>Phone <span className="text-primary">Number</span></>} message={<>If we need to reach you, what is your <span className="text-primary">phone number</span>?</>}/>
        <div className="row row-cols-1">
            <div className="col col-md-7 mx-auto">
                <SignUpFormMaskedField mask="(999) 999-9999"
                                       autoFocus
                                       className="form-control-lg pt-5 pb-4"
                                       maskPlaceholder={" "}
                                       name="phone"
                                       label="Phone Number"/>
            </div>
        </div>
    </>,
    ["fas", "phone"]
];

const income: SignUpFormStep = [
    "Income",
    ["income", "incomeFrequency"],
    <>
        <StepText header={<>How much do you <span className="text-primary">make?</span></>} message={<>We know this is personal. But we are <span className="text-primary">a bank.</span></>}/>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormCurrencyField label="Income" name="income" autoFocus/>
            </div>
            <div className="col">
                <SignUpFormField label="Pay Frequency"
                                 name="incomeFrequency"
                                 inputMode="numeric"
                                 as="select">
                    <option value="Annually">Annually</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Bi-Weekly">Bi-Weekly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Hourly">Hourly</option>
                </SignUpFormField>

            </div>
        </div>
    </>,
    ["fas", "money-check-alt"]
];

const address: SignUpFormStep = [
    "Address",
    ["address", "city", "state", "zipcode"],
    <>
        <StepText message={<>Please enter your current address. <div className="fs-6 text-muted fst-italic">This information will also help us find a local branch near you.</div></>} header={<>Where do <span className="text-primary">you live</span>?</>}/>
        <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
                <SignUpFormField label="Address" name="address" autoFocus/>
            </div>
            <div className="col">
                <SignUpFormField label="City" name="city"/>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormField label="State" name="state" as="select">
                    <option value={undefined}>Select</option>
                    {<>
                        {states.map(state => <option key={state} value={state}>{state}</option>)}
                    </>}
                </SignUpFormField>
            </div>
            <div className="col">
                <SignUpFormMaskedField label="Zipcode" name="zipcode" mask="99999" maskPlaceholder={null}/>
            </div>
        </div>
    </>,
    ["fas", "house-user"]
];

const mailingAddress: SignUpFormStep = [
    "Mailing Address",
    ["mailingAddress", "mailingCity", "mailingState", "mailingZipcode"],
    <>
        <StepText header={<>Mailing <span className="text-primary">Address</span></>}
                  message="Can we send you mail at that address?" />
        <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
                <SignUpFormField label="Address" name="address" autoFocus/>
            </div>
            <div className="col">
                <SignUpFormField label="City" name="city"/>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormField label="State" name="state" as="select">
                    <option value={undefined}>Select</option>
                    {<>
                        {states.map(state => <option key={state} value={state}>{state}</option>)}
                    </>}
                </SignUpFormField>
            </div>
            <div className="col">
                <SignUpFormMaskedField label="Zipcode" name="zipcode" mask="99999" maskPlaceholder={null}/>
            </div>
        </div>
    </>,
    ["fas", "house-user"]
];


const SignUpStepsData: SignUpFormStep[] = [
    basicInfo,
    dateOfBirth,
    phoneNumber,
    income,
    address
];

export default SignUpStepsData;
