import React, {Component} from "react";
import {Form, Formik, FormikValues} from "formik";
import {SignUpFormSchema} from "@interfaces";
import {SignUpFormValidationSchema} from "@schemas";

class SignUpFormik extends Component<{email: string}, any> {

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
        this.initialValues.email = props.email ? props.email : "";
    }

    onSubmit(values: SignUpFormSchema) {
        console.table(values);
    }

    render() {
        return (
            <Formik initialValues={this.initialValues}
                    onSubmit={this.onSubmit}>

            </Formik>
        );
    }
}

export default SignUpFormik;
