import React, {ReactChildren, ReactElement, ReactFragment, useEffect} from "react";
import "@styles/SignUpFormStep.sass";
import "@styles/SignUpFormProgress.sass";
import {ErrorMessage, Field, FieldHookConfig, FieldInputProps, FormikErrors, FormikTouched, useField} from "formik";
import {SignUpFormStepProps} from "@props";
import InputMask from "react-input-mask";
import {ObjectSchema} from "yup";
import SignUpForm from "@components/SignUpForm";
import CurrencyInput from "react-currency-input-field";
import {Tooltip} from "bootstrap";

export const SignUpFormButtons = (
    {
        onNextStep,
        onPrevStep,
        currentStep,
        steps,
        fields,
        schema,
        values,
        devMode,
        isValid
    }: {
            onNextStep: () => void,
            onPrevStep: () => void,
            currentStep: number,
            steps: number,
            fields: string[],
            values: any,
            schema: ObjectSchema<any>,
            devMode?: boolean,
            isValid: boolean
        }) => {

    const canGoBack = () => currentStep > 0;
    const canGoNext = () => currentStep < steps - 1;

    const currentStepIsInvalid = () => {
        const validList = fields.map(field => {
            try {
                schema.validateSyncAt(field, values);
                return true;
            } catch (e) {
                return false;
            }

        });
        return validList.includes(false);
    };

    return (
        <div className="d-flex justify-content-around">
            { canGoNext() ? <button className="btn btn-lg btn-primary order-1"
                                    type="button"
                                    disabled={devMode ? false : currentStepIsInvalid()}
                                    onClick={onNextStep}>Next</button> :
                <button className="btn btn-lg btn-primary order-1"
                        type="submit"
                        disabled={!isValid}
                        >Submit</button>}
            { canGoBack() ? <button className="btn btn-lg btn-outline-secondary order-0"
                                    type="button"
                                    onClick={onPrevStep}>Back</button> : null}
        </div>
    );
};

export const SignUpFormError = ({errors, touched, field}: {errors: FormikErrors<any>, touched: FormikTouched<any>, field: string}) => {
    return (
        <>
            { errors[field] && touched[field] ?
                <div className="text-danger m-1">{errors[field]}</div> : ""}
        </>
    );
};

export const SignUpFormField = ({label, children, ...props}: {label: string, children?: ReactElement | ReactElement[] | ReactChildren} & FieldHookConfig<SignUpForm>) => {

    const [field, meta] = useField(props);

    return (
        <>
            <div className="my-2">
                <div className="form-floating">
                    <Field id={field.name}
                           className={props.as === "select" ? "form-select"
                                   : "form-control"}
                           placeholder={label}
                           as={props.as}
                           autoFocus={meta.touched ? false : props.autoFocus}
                           {...field}>
                        {children}
                    </Field>
                    <label className="form-label"
                                    htmlFor={field.name}>{label}</label>
                </div>
                <ErrorMessage name={field.name}
                              className="my-1 text-danger"
                              component="div"/>
            </div>
        </>
    );

};

export const SignUpFormMaskedField = ({label, mask, maskPlaceholder, ...props}: {label: string, mask: string, maskPlaceholder?: string | null} & FieldHookConfig<SignUpForm>) => {

    const [field, meta] = useField(props);
    const {name} = field;
    const fieldProps = field as FieldInputProps<any>;

    return (
        <>
            <div className="my-2">
                <div className="form-floating">
                    <InputMask mask={mask}
                               maskPlaceholder={maskPlaceholder}
                               id={name}
                               placeholder={label}
                               className={`form-control ${props.className}`}
                               autoFocus={meta.touched ? false : props.autoFocus}
                               {...fieldProps}/>
                    <label className="form-label"
                           htmlFor={name}>{label}</label>
                </div>
                <ErrorMessage name={name}
                              className="my-1 text-danger"
                              component="div"/>
            </div>
        </>
    );

};

export const SignUpFormCurrencyField = ({label, ...props}: {label: string} & FieldHookConfig<SignUpForm>) => {
    const {name} = props;
    const [field, , helper] = useField(name);

    return (
        <>
            <div className="my-2">
                <div className="form-floating">
                    <CurrencyInput id={name}
                                   prefix="$"
                                   allowNegativeValue={false}
                                   groupSeparator=","
                                   value={field.value}
                                   onValueChange={value => {
                                       helper.setValue(value, true);
                                   }}
                                   autoFocus={props.autoFocus}
                                   className="form-control"
                                   onBlur={field.onBlur}/>
                    <label className="form-label"
                           htmlFor={name}>{label}</label>
                </div>
                <ErrorMessage name={name}
                              className="my-1 text-danger"
                              component="div"/>
            </div>
        </>
    );

};

export const SignUpFormStep = ({step: [, , fragment], stepNo}: {stepNo: number} & SignUpFormStepProps) => {

    return (
        <div key={`step${stepNo}`} className="min-form-height revealInX px-3">
            {fragment}
        </div>
    );
};

export const SignUpFormProgress =
    ({
        currentStep,
        steps,
        setStep,
        schema,
        values
    }:
         {
             currentStep: number,
             setStep: (step: number) => void,
             values: any,
             schema: ObjectSchema<any>,
             steps: [
                 label: string,
                 fields: string[],
                 fragment: ReactFragment
             ][]}) => {

    const stepIsInvalid = (step: number) =>  {
        const [, stepFields] = steps[step];

        return stepFields.map(field => {
            try {
                schema.validateSyncAt(field, values);
                return true;
            } catch (e) {
                return false;
            }
        }).includes(false);
    };

    const width = `${100*((currentStep + 1) / (steps.length + 1))}%`;

    useEffect(() => {
        document.querySelectorAll(".step-indicator")
            .forEach(indicator => new Tooltip(indicator, {placement: "top"}));
    }, [Tooltip]);


    return (
        <div className="mt-2 mb-5 col-10 mx-auto position-relative">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width}}/>
            </div>
            {steps.map(([label], index) => (
                <button key={label}
                        onClick={() => {
                            setStep(index);
                        }}
                        type="button"
                        className="btn btn-primary rounded-circle step-indicator fw-bold"
                        disabled={index > 0 ? stepIsInvalid(index > 0 ? index - 1 : index) : false}
                        title={label}
                        style={{
                            position: "absolute",
                            left: `calc(${100*(index + 1)/(steps.length + 1)}% - 10px)`
                        }}>
                    {index + 1}
                </button>))}
        </div>
    );
};
