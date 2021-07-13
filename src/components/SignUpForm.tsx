import React, {Component} from "react";
import {SignUpFormProps} from "@props";

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
            <div>
                <div>{this.state.step}</div>
                <button onClick={this.prevStep}>Prev</button>
                <button onClick={this.nextStep}>Next</button>
            </div>
        );
    }
}

export default SignUpForm;
