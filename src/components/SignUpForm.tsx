import React, {Component} from "react";
import {Form, Formik} from "formik";
import {SignUpFormSchema} from "@interfaces";
import {SignUpFormValidationSchema} from "@schemas";
import SignUpFormButtons from "@components/SignUpFormButtons";
import SignupStepsData from "@data/signup-steps.data";
import SignUpFormStep from "@components/SignUpFormStep";

class SignUpForm extends Component<{email: string}, {currentStep: number}> {

    initialValues: SignUpFormSchema = {
        address: "",
        applicationType: 0,
        city: "",
        dateOfBirth: undefined,
        driversLicense: "",
        email: "",
        firstName: "",
        gender: "Male",
        income: 0,
        incomeFrequency: "",
        initialDeposit: 0,
        lastName: "",
        mailingAddress: "",
        mailingCity: "",
        mailingState: "",
        mailingZipcode: "",
        middleName: "",
        sameAsBilling: false,
        socialSecurity: "",
        state: "",
        zipcode: ""
    };

    constructor(props: {email: string}) {
        super(props);
        this.state = {
            currentStep: 0
        };
        this.initialValues.email = props.email ? props.email : "";
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    onSubmit(values: SignUpFormSchema) {
        console.table(values);
    }

    nextStep() {
        this.setState({currentStep: this.state.currentStep + 1});
    }

    prevStep() {
        this.setState({currentStep: this.state.currentStep - 1});
    }

    render() {
        return (
            <Formik initialValues={this.initialValues}
                    validationSchema={SignUpFormValidationSchema}
                    onSubmit={this.onSubmit}>
                {({errors, touched}) => (
                    <Form>
                        <SignUpFormStep errors={errors}
                                        touched={touched}
                                        step={SignupStepsData[this.state.currentStep]}/>
                        <div className="col-md-8 col-12 mx-auto mt-4">
                            <SignUpFormButtons onNextStep={this.nextStep}
                                               onPrevStep={this.prevStep}
                                               steps={SignupStepsData.length}
                                               currentStep={this.state.currentStep}/>
                        </div>
                    </Form>
                )}

            </Formik>
        );
    }
}

export default SignUpForm;
