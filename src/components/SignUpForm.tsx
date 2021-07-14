import React, {Component} from "react";
import {Field, Form, Formik, FormikErrors, FormikTouched} from "formik";
import {SignUpFormSchema} from "@interfaces";
import {SignUpFormValidationSchema} from "@schemas";

const fragementTest = (errors: FormikErrors<SignUpFormSchema>, touched: FormikTouched<SignUpFormSchema>) => (<>
    <Field
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="form-control"/>
    {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : ""}
</>);
const fragementTest2 = (errors: FormikErrors<SignUpFormSchema>, touched: FormikTouched<SignUpFormSchema>) => (<>
    <Field
        type="firstName"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className="form-control"/>
    {errors.firstName && touched.firstName ? <div className="text-danger">{errors.firstName}</div> : ""}
</>);

const fragments = [fragementTest, fragementTest2];

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
                        {fragments[this.state.currentStep](errors, touched)}
                        <button onClick={this.prevStep}>Prev</button>
                        <button onClick={this.nextStep}>Next</button>
                    </Form>
                )}

            </Formik>
        );
    }
}

export default SignUpForm;
