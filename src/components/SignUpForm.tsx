import React, {Component} from "react";
import {Form, Formik} from "formik";
import {SignUpFormSchema} from "@interfaces";
import {SignUpFormValidationSchema} from "@schemas";
import {SignUpFormButtons, SignUpFormProgress, SignUpFormStep} from "aline-signup-form";
import SignUpStepsData from "@data/sign-up-steps.data";
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
        this.setStep = this.setStep.bind(this);
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

    setStep(step: number) {
        this.setState({currentStep: step});
    }

    render() {
        return (
            <Formik initialValues={this.initialValues}
                    validationSchema={SignUpFormValidationSchema}
                    onSubmit={this.onSubmit}>
                {({errors, touched, dirty, values, isValid}) => (
                    <Form>

                        <SignUpFormProgress currentStep={this.state.currentStep}
                                            values={values}
                                            schema={SignUpFormValidationSchema}
                                            steps={SignUpStepsData}
                                            setStep={this.setStep}/>

                        <Prompt when={dirty} message="You've already started signing up. Are you sure you want to leave?"/>

                        <SignUpFormStep errors={errors}
                                        touched={touched}
                                        stepNo={this.state.currentStep}
                                        step={SignUpStepsData[this.state.currentStep]}/>

                        <div className="col-md-8 col-12 mx-auto my-4 bottom-0">
                            <SignUpFormButtons onNextStep={this.nextStep}
                                               onPrevStep={this.prevStep}
                                               devMode
                                               fields={SignUpStepsData[this.state.currentStep][1]}
                                               values={values}
                                               schema={SignUpFormValidationSchema}
                                               steps={SignUpStepsData.length}
                                               isValid={isValid}
                                               currentStep={this.state.currentStep}/>
                        </div>
                    </Form>
                )}

            </Formik>
        );
    }
}

export default SignUpForm;
