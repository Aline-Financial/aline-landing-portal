import React from "react";
import "@styles/SignUpFormStep.sass";
import {Field, FieldProps, FormikErrors, FormikTouched} from "formik";
import {SignUpFormFieldProps, SignUpFormStepProps} from "@props";
import InputMask from "react-input-mask";
import {ObjectSchema} from "yup";
import {SignUpFormValidationSchema} from "@schemas";

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
            console.log(field, values[field]);
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

export const SignUpFormField = ({errors, touched, field, placeholder, is, children, autoFocus}: SignUpFormFieldProps) => {

    const t = touched as any;
    return (
        <div className="my-2">
            <div className="form-floating">
                <Field id={field}
                       key={field}
                       name={field}
                       className={`form-control ${is === "select" ? "form-select" : ""}`}
                       as={is}
                       autoFocus={t[field] ? false : autoFocus}
                       placeholder={placeholder}>
                    {children}
                </Field>
                <label htmlFor={field}>{placeholder}</label>
            </div>
            <SignUpFormError errors={errors}
                             touched={touched}
                             field={field}/>
        </div>
    );
};

export const SignUpFormMaskedField = ({name, placeholder, mask, autoFocus}: {name: string, mask: string, placeholder: string, autoFocus?: boolean}) => {
    return (
        <>
            <div className="my-2">
                <Field name={name} key={name}>
                    {({field, form: {errors, touched}}: FieldProps) => (
                        <>
                            <div className="form-floating">
                                <InputMask mask={mask}
                                           {...field}
                                           autoFocus={touched[name] ? false : autoFocus}
                                           placeholder={placeholder}
                                           className="form-control"/>
                                <label htmlFor={field.name}>{placeholder}</label>
                            </div>
                            <SignUpFormError errors={errors}
                                             touched={touched}
                                             field={field.name}/>
                        </>
                    )}
                </Field>
            </div>
        </>
    );
};

export const SignUpFormStep = ({errors, touched, step: [, , fragment]}: SignUpFormStepProps) => {
    return (
        <div className="animate__animated animate__fadeIn min-form-height">
            {fragment({errors, touched})}
        </div>
    );
};
