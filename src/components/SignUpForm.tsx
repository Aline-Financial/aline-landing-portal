import React, {Component} from "react";
import {SignUpFormProps} from "@props";
import Brand from "@components/Brand";
import {FormStep, MultiStepForm} from "@modules/multi-step-form";
import {SignUpFormValidationSchema} from "@schemas";

class SignUpForm extends Component<SignUpFormProps, {currentStep: number}> {

    constructor(props: SignUpFormProps) {
        super(props);
        this.state = {
            currentStep: 0
        };

        const step1 = new FormStep({
            email: "arjay.07.ly@gmail.com",
            firstName: "Leandro",
            lastName: "Yabut"
        });

        new MultiStepForm(SignUpFormValidationSchema, step1);

        console.log(step1.validate());

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        this.setState({currentStep: this.state.currentStep + 1});
    }

    prevStep() {
        this.setState({currentStep: this.state.currentStep - 1});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto">
                        <div className="bg-light rounded-3 p-4 shadow-sm">
                            <div className="w-100 text-center">
                                <Brand scale={1.5} light/>
                            </div>
                            <div className="display-4 text-center py-5">{this.state.currentStep}</div>
                            <div className="row">
                                <div className="d-flex justify-content-between col-lg-5 col-12 mx-auto">
                                    <button className="btn btn-outline-secondary btn-lg"
                                            onClick={this.prevStep}>Back</button>
                                    <button className="btn btn-primary btn-lg"
                                            onClick={this.nextStep}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
