import React, {Component} from "react";
import {SignUpFormProps} from "@props";
import Brand from "@components/Brand";

class SignUpForm extends Component<SignUpFormProps, {step: number}> {

    constructor(props: SignUpFormProps) {
        super(props);
        this.state = {
            step: 0
        };

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        this.setState({step: this.state.step + 1});
    }

    prevStep() {
        this.setState({step: this.state.step - 1});
    }

    render() {
        return (
            <div className="container bg-light">
                <Brand light/>
            </div>
        );
    }
}

export default SignUpForm;
