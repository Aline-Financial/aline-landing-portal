import React, {ReactChildren, ReactElement} from "react";
import "@styles/SignUpFormStep.sass";
import {ErrorMessage, Field, FieldHookConfig, FieldInputProps, FormikErrors, FormikTouched, useField} from "formik";
import {SignUpFormStepProps} from "@props";
import InputMask from "react-input-mask";
import {ObjectSchema} from "yup";
import SignUpForm from "@components/SignUpForm";
import CurrencyInput from "react-currency-input-field";

export const SignUpFormButtons = (
    {
        onNextStep,
        onPrevStep,
        currentStep,
        steps,
        fields,
        schema,
        values
    }: {
            onNextStep: () => void,
            onPrevStep: () => void,
            currentStep: number,
            steps: number,
            fields: string[],
            values: any,
            schema: ObjectSchema<any>
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
                                    disabled={currentStepIsInvalid()}
                                    onClick={onNextStep}>Next</button> : null}
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
                           key={field.name}
                           className={
                               props.as === "select" ? "form-select"
                                   : "form-control"
                           }
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
                               key={name}
                               placeholder={label}
                               className="form-control"
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
    const fieldProps = field as FieldInputProps<any>;

    return (
        <>
            <div className="my-2">
                <div className="form-floating">
                    <CurrencyInput id={name}
                                   key={name}
                                   prefix="$"
                                   groupSeparator=","
                                   onValueChange={value => {
                                       helper.setValue(value);
                                   }}
                                   className="form-control"
                                   onBlur={fieldProps.onBlur}/>
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

export const SignUpFormStep = ({step: [, , fragment]}: SignUpFormStepProps) => {
    return (
        <div className="animate__animated animate__fadeIn min-form-height">
            {fragment}
        </div>
    );
};
