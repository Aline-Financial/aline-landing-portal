import {SignUpFormApplication, SignUpFormSchema, SignUpFormStep} from "@interfaces";
import React, {ReactFragment} from "react";
import {Field} from "formik";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";
import {SignUpFormCurrencyField, SignUpFormField, SignUpFormMaskedField, SignUpFormSelect} from "@src/modules/SignUpFormComponents";
import states from "./states.data.json";

const StepText = ({message, header}: { message: string | ReactFragment, header: string | ReactFragment }) => {
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
        <StepText header={<><span className="text-primary">Hello</span> there!</>}
                  message="Let's start with some basic information."/>
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
    ["dateOfBirth", "gender", "phone"],
    <>
        <StepText header={<>More <span className="text-primary">about you</span>...</>}
                  message="You must be at least 18 years old to be a member."/>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormMaskedField mask="99/99/9999"
                                       autoFocus
                                       maskPlaceholder={null}
                                       name="dateOfBirth"
                                       label="Date of Birth"/>
            </div>
            <div className="col">
                <SignUpFormField name="gender" label="Gender" as="select">
                    <option value={undefined} className="text-muted">Select a gender...</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                    <option value="UNSPECIFIED">Prefer not to say...</option>
                </SignUpFormField>
            </div>
        </div>
        <div className="row row-cols-1">
            <div className="col">
                <p className="mt-4 small fst-italic text-muted">Just in case we need to reach you... <FaIcon icon={["fas", "phone"]}/></p>
                <SignUpFormMaskedField mask="(999) 999-9999"
                                       maskPlaceholder={" "}
                                       name="phone"
                                       label="Phone Number"/>
            </div>
        </div>
    </>,
    ["fas", "ellipsis-h"]
];

const identification: SignUpFormStep = [
    "Identification",
    ["socialSecurity", "driversLicense"],
    <>
        <StepText header={<>Your <span className="text-primary">Identification</span></>}
                  message="We need some sensitive information to start an account for you."/><div className="row row-cols-1 row-cols-md-2">
        <div className="col">
                <SignUpFormMaskedField mask="999-99-9999"
                                       autoFocus
                                       maskPlaceholder={null}
                                       name="socialSecurity"
                                       label="Social Security #"/>
            </div>
            <div className="col">
                <SignUpFormField label="Drivers License" name="driversLicense"/>
            </div>
        </div>

        <p className="small fst-italic mt-5 text-muted"><FaIcon icon={["fas", "info-circle"]}/> Your privacy is very important to us. None of your information will be shared.</p>

    </>,
    ["far", "id-card"]
];

const income: SignUpFormStep = [
    "Income",
    ["income", "incomeFrequency"],
    <>
        <StepText header={<>How much do you <span className="text-primary">make?</span></>}
                  message={<>We know this is personal. But we are <span className="text-primary">a bank.</span></>}/>
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <SignUpFormCurrencyField label="Income" name="income" autoFocus/>
            </div>
            <div className="col">
                <SignUpFormField label="Pay Frequency"
                                 name="incomeFrequency"
                                 defaultValue="Annually"
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
    ["fas", "dollar-sign"]
];

const address: SignUpFormStep = [
    "Address",
    ["address", "city", "state", "zipcode"],
    <>
        <StepText
            message={<>Please enter your current address. <div className="fs-6 text-muted fst-italic">This information
                will also help us find a local branch near you.</div></>}
            header={<>Where do <span className="text-primary">you live</span>?</>}/>
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
    ["mailingAddress", "mailingCity", "mailingState", "mailingZipcode", "sameAsBilling"],
    (values: SignUpFormSchema) => {
        return (<>
            <StepText header={<>Mailing <span className="text-primary">Address</span></>}
                      message="Can we send you mail at that address?"/>

            <div role="group" className="row-cols-2 col-6 mb-4">
                <label className="form-label fs-5">
                    <Field id="sameAs" type="radio" name="sameAsBilling" className="d-inline-block mx-2" value="true"/>
                    Yes
                </label>
                <label className="form-label fs-5">
                    <Field id="notSameAs" type="radio" name="sameAsBilling" className="d-inline-block mx-2"
                           value="false"/>
                    No
                </label>
            </div>

            {values.sameAsBilling == "false" ? <div className="revealInX">
                <div className="text-muted fst-italic my-2">Where can we send you mail?</div>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <SignUpFormField label="Address" name="mailingAddress" autoFocus/>
                    </div>
                    <div className="col">
                        <SignUpFormField label="City" name="mailingCity"/>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <SignUpFormField label="State" name="mailingState" as="select">
                            <option value={undefined}>Select</option>
                            {<>
                                {states.map(state => <option key={state} value={state}>{state}</option>)}
                            </>}
                        </SignUpFormField>
                    </div>
                    <div className="col">
                        <SignUpFormMaskedField label="Zipcode" name="mailingZipcode" mask="99999"
                                               maskPlaceholder={null}/>
                    </div>
                </div>
            </div> : null}
        </>);
    },
    ["fas", "mail-bulk"]
];

const applications: SignUpFormApplication[] = [

    {
        title: "Spending",
        description: "Start with a checking account and have access to your money today!",
        icon: "hand-holding-usd",
        appType: "CHECKING"
    },

    {
        title: "Stashing",
        description: "Plan for the future. Stash your cash away into a secure savings account.",
        icon: "piggy-bank",
        appType: "SAVINGS"
    },

    {
        title: "Both",
        description: "Bring your bank wherever you go with both a savings and checking account.",
        icon: "wallet",
        appType: "CHECKING_AND_SAVINGS"
    }

];

const accounts: SignUpFormStep = [
    "Account",
    ["applicationType"],
    <>
        <StepText header={<>How will you use <span className="text-primary">your account?</span></>} message="Select the type of account that best fits your needs."/>
        <SignUpFormSelect name="applicationType" options={applications}/>
        <p className="mx-auto small mt-5 text-muted w-75 fst-italic"><FaIcon icon="info-circle"/> Please note, {"'Spending'"} and {"'Stashing'"} accounts respectively refer to standard Checking and Savings accounts.</p>
    </>,
    ["fas", "piggy-bank"]
];


const SignUpStepsData: SignUpFormStep[] = [
    basicInfo,
    accounts,
    dateOfBirth,
    identification,
    income,
    address,
    mailingAddress
];

export default SignUpStepsData;
