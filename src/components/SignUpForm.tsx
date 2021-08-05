import React, {Component} from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {SignUpFormSchema} from "@interfaces";
import {SignUpFormValidationSchema} from "@schemas";
import {SignUpFormButtons, SignUpFormProgress, SignUpFormStep} from "@src/modules/SignUpFormComponents";
import SignUpStepsData from "@data/sign-up-steps.data";
import {Prompt} from "react-router";
import {AxiosResponse} from "axios";
import ApplyResponse from "@api/model/ApplyResponse";
import CreateApplicant from "@api/model/CreateApplicant";
import ApplyRequest from "@api/model/ApplyRequest";
import SignUpResults from "@components/SignUpResults";
import ApplicationApiService from "@api/service/ApplicationApiService";

class SignUpForm extends Component<{email: string}, {currentStep: number,
                                                     submitted: boolean,
                                                     data?: ApplyResponse,
                                                     errorMessage?: string}> {

    initialValues: SignUpFormSchema = {
        address: "",
        applicationType: "",
        city: "",
        dateOfBirth: "",
        driversLicense: "",
        email: "",
        firstName: "",
        gender: undefined,
        income: 0,
        incomeFrequency: "Annually",
        initialDeposit: 100,
        lastName: "",
        mailingAddress: "",
        mailingCity: "",
        mailingState: "",
        mailingZipcode: "",
        middleName: undefined,
        sameAsBilling: "true",
        socialSecurity: "",
        state: "",
        zipcode: "",
        phone: ""
    };

    apiService: ApplicationApiService;

    constructor(props: {email: string}) {
        super(props);
        this.apiService = new ApplicationApiService();
        this.state = {
            currentStep: 0,
            submitted: false
        };
        this.initialValues.email = props.email ? props.email : "";
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.setStep = this.setStep.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    getIncome(income: number, incomeFrequency: string): number {

        let multiplier;

        switch (incomeFrequency) {
            case "Annually":
                multiplier = 1;
                break;
            case "Monthly":
                multiplier = 12;
                break;
            case "Bi-Weekly":
                multiplier = 26;
                break;
            case "Weekly":
                multiplier = 52;
                break;
            default:
                multiplier = 1;
                break;
        }

        return income * 100 * multiplier;
    }

    async onSubmit(values: SignUpFormSchema, helpers: FormikHelpers<SignUpFormSchema>) {
        const createApplicant: CreateApplicant = {
            address: values.address,
            city: values.city,
            dateOfBirth: new Date(values.dateOfBirth!),
            driversLicense: values.driversLicense,
            email: values.email!,
            firstName: values.firstName,
            gender: values.gender!,
            income: this.getIncome(values.income!, values.incomeFrequency!),
            lastName: values.lastName,
            mailingAddress: values.sameAsBilling ? values.address : values.mailingAddress,
            mailingCity: values.sameAsBilling ? values.city : values.mailingCity,
            mailingState: values.sameAsBilling ? values.state : values.mailingState,
            mailingZipcode: values.sameAsBilling ? values.zipcode : values.mailingZipcode,
            phone: values.phone,
            socialSecurity: values.socialSecurity,
            state: values.state,
            zipcode: values.zipcode
        };
        const applyRequest: ApplyRequest = {
            applicants: [createApplicant],
            applicationType: values.applicationType
        };
        try {
            const {data, status} = await this.apiService.postApplication(applyRequest);

            if (status === 201) {
                helpers.setSubmitting(false);
                this.setState({submitted: true, data: data, errorMessage: undefined});
            }
        }

         catch (e) {
            helpers.setSubmitting(false);
            const response: AxiosResponse = e.response;
            if (response) {
                const data = response.data;
                if (response.status === 409) {
                    this.setState({errorMessage: data});
                } else {
                    this.setState({errorMessage: "Something went wrong. Please try again."});
                }
            } else {
                this.setState({errorMessage: "Something went wrong. Please try again."});
                console.error(e);
            }
        }
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
            <div>
            { !this.state.submitted ?
                <Formik initialValues={this.initialValues}
                        validationSchema={SignUpFormValidationSchema}
                        onSubmit={this.onSubmit}>
                    {({errors, touched, dirty, values, isValid, isSubmitting}) => (
                        <Form>

                            <SignUpFormProgress currentStep={this.state.currentStep}
                                                values={values}
                                                schema={SignUpFormValidationSchema}
                                                isSubmitting={isSubmitting}
                                                steps={SignUpStepsData}
                                                setStep={this.setStep}/>

                            <Prompt when={dirty} message="You've already started signing up. Are you sure you want to leave?"/>

                            {
                                !isSubmitting ? <SignUpFormStep errors={errors}
                                                                touched={touched}
                                                                values={values}
                                                                stepNo={this.state.currentStep}
                                                                step={SignUpStepsData[this.state.currentStep]}/>
                                    : <div className="d-flex min-form-height justify-content-center align-items-center">
                                        <div className="spinner-border text-primary"/>
                                    </div>
                            }

                            {this.state.errorMessage ? <div key={this.state.errorMessage.replace(/\\s/g, "")}
                                                            className="text-danger text-center animate__animated animate__headShake animate__fast">
                                {this.state.errorMessage}
                            </div> : null}

                            <div className="col-md-8 col-12 mx-auto my-4 bottom-0">
                                <SignUpFormButtons onNextStep={this.nextStep}
                                                   onPrevStep={this.prevStep}
                                                   fields={SignUpStepsData[this.state.currentStep][1]}
                                                   values={values}
                                                   schema={SignUpFormValidationSchema}
                                                   steps={SignUpStepsData.length}
                                                   isValid={isValid}
                                                   isSubmitting={isSubmitting}
                                                   currentStep={this.state.currentStep}/>
                            </div>
                        </Form>
                    )}

                </Formik> : <SignUpResults data={this.state.data!}/>
            }
            </div>
        );
    }
}

export default SignUpForm;
