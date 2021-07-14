import React, {Component} from "react";
import {Form, Formik} from "formik";
import {SignUpFormSchema} from "@interfaces";
import {SignUpFormValidationSchema} from "@schemas";
import {SignUpFormStep, SignUpFormButtons} from "aline-signup-form";
import SignupStepsData from "@data/signup-steps.data";
import {Prompt} from "react-router";

class SignUpForm extends Component<{email: string}, {currentStep: number}> {

    initialValues: SignUpFormSchema = {
        address: "",
        applicationType: 0,
        city: "",
        dateOfBirth: "",
        driversLicense: "",
        email: "",
        firstName: "",
        gender: undefined,
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
        zipcode: "",
        phone: ""
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
                {({errors, touched, dirty, values}) => (
                    <Form>
                        <Prompt when={dirty} message="You've already started signing up. Are you sure you want to leave?"/>
                        <SignUpFormStep errors={errors}
                                        touched={touched}
                                        step={SignupStepsData[this.state.currentStep]}/>
                        <div className="col-md-8 col-12 mx-auto mt-4 bottom-0">
                            <SignUpFormButtons onNextStep={this.nextStep}
                                               onPrevStep={this.prevStep}
                                               fields={SignupStepsData[this.state.currentStep][1]}
                                               values={values}
                                               schema={SignUpFormValidationSchema}
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
