import React, {ReactChildren, ReactElement, ReactFragment, useLayoutEffect} from "react";
import "@styles/SignUpForm.sass";
import {ErrorMessage, Field, FieldHookConfig, FieldInputProps, FormikErrors, FormikTouched, useField} from "formik";
import {SignUpFormStepProps} from "@props";
import InputMask from "react-input-mask";
import {ObjectSchema} from "yup";
import SignUpForm from "@components/SignUpForm";
import CurrencyInput from "react-currency-input-field";
import {Tooltip} from "bootstrap";
import {FontAwesomeIcon as FaIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {SignUpFormApplication} from "@interfaces";

/**
 * Button controls to update the currentStep of {@link SignUpForm}
 * @param onNextStep function that runs when next is clicked
 * @param onPrevStep function that runs when back is clicked
 * @param currentStep the currentStep the controls are working with
 * @param steps how many steps there are in a multi-step form. Used to limit the currentStep updating by disabling the button that would take the currentStep variable out of bounds
 * @param fields a list of the current step fields
 * @param schema the schema the fields are validated against
 * @param values the current values of the form
 * @param devMode if true, buttons will not be disabled
 * @param isValid boolean that is passed from a form to tell the controller if the form as a whole is valid
 * @param isSubmitting
 */
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
        isValid,
        isSubmitting
    }: {
        onNextStep: () => void,
        onPrevStep: () => void,
        currentStep: number,
        steps: number,
        fields: string[],
        values: any,
        schema: ObjectSchema<any>,
        devMode?: boolean,
        isValid: boolean,
        isSubmitting: boolean
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
            {canGoNext() ?
                <div className="order-1">
                    <button className="btn btn-lg btn-primary order-1 rounded-pill"
                            type="button"
                            disabled={devMode ? false : currentStepIsInvalid()}
                            onClick={onNextStep}>Next
                    </button>
                </div> :
                <div key="submitBtn" className="order-1">
                    <button className="btn btn-lg btn-primary rounded-pill"
                            type="submit"
                            disabled={(!isValid || isSubmitting) && !devMode}
                    >Submit
                    </button>
                </div>}
            {canGoBack() ?
                <div className="order-0">
                    <button className="btn btn-lg btn-outline-secondary rounded-pill"
                            type="button"
                            disabled={isSubmitting}
                            onClick={onPrevStep}>Back
                    </button>
                </div> : null}
        </div>
    );
};

/**
 * Styled error message
 * @param errors errors from formik props
 * @param touched touched property from formik props
 * @param field field that is being validated
 */
export const SignUpFormError = ({
                                    errors,
                                    touched,
                                    field
                                }: { errors: FormikErrors<any>, touched: FormikTouched<any>, field: string }) => {
    return (
        <>
            {errors[field] && touched[field] ?
                <div className="text-danger m-1">{errors[field]}</div> : ""}
        </>
    );
};

/**
 * Styled and configured field for the SignUpForm component
 * @param label placeholder and label used for form-floating input
 * @param children children can only exist if the field is a select
 * @param props {@link FieldHookConfig} from formik
 */
export const SignUpFormField = ({
                                    label,
                                    children,
                                    ...props
                                }: { label: string, children?: ReactElement | ReactElement[] | ReactChildren } & FieldHookConfig<SignUpForm>) => {

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

/**
 * Masked input field
 * @param label placeholder or label for form-floating input
 * @param mask mask to be used
 * @param maskPlaceholder the character that will replace masked characters
 * @param props {@link FieldHookConfig} from formik
 */
export const SignUpFormMaskedField = ({
                                          label,
                                          mask,
                                          maskPlaceholder,
                                          ...props
                                      }: { label: string, mask: string | (string | RegExp)[], maskPlaceholder?: string | null } & FieldHookConfig<SignUpForm>) => {

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

/**
 * Currency field. A regular input field with currency masking.
 * @param label label and placeholder
 * @param props {@link FieldHookConfig} from formik
 */
export const SignUpFormCurrencyField = ({label, ...props}: { label: string } & FieldHookConfig<SignUpForm>) => {
    const {name} = props;
    const [field, meta, helper] = useField(name);

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
                                   autoFocus={meta.touched ? false : props.autoFocus}
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

/**
 * The main component that is rendered in the {@link SignUpForm}
 * @param fragment fragment of the fields in the step.
 * @param stepNo currentStep passed in from a formik form
 * @param values values that may be used to validate inside a step
 */
export const SignUpFormStep = ({
                                   step: [, , fragment],
                                   stepNo,
                                   values
                               }: { stepNo: number, values: any } & SignUpFormStepProps) => {

    return (
        <div key={`step${stepNo}`} className="min-form-height revealInX px-3">
            {typeof fragment === "function" ? fragment(values) : fragment}
        </div>
    );
};

/**
 * Progress bar and step indicator
 *
 * @param currentStep current step that the form is on.
 * @param steps an array of {@link SignUpFormStep}s.
 * @param setStep used to set the current step and render in the form the step that was selected.
 * @param schema schema to validate values against.
 * @param values values to validate against the schema.
 * @param devMode if enabled, allows you to jump to a selected step.
 *
 * @param isSubmitting
 */
export const SignUpFormProgress =
    ({
         currentStep,
         steps,
         setStep,
         schema,
         values,
         devMode,
         isSubmitting
     }:
         {
             currentStep: number,
             devMode?: boolean
             setStep: (step: number) => void,
             values: any,
             schema: ObjectSchema<any>,
             isSubmitting: boolean,
             steps: [
                 label: string,
                 fields: string[],
                 fragment: ReactFragment,
                 icon?: IconProp
             ][]
         }) => {

        const stepIsInvalid = (step: number) => {
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

        const previousStepsInvalid = (step: number) => {
            for (let i = 0; i <= step; i++) {
                if (stepIsInvalid(i)) return true;
            }
            return false;
        };

        const width = `${100 * ((currentStep + 1) / (steps.length + 1))}%`;

        useLayoutEffect(() => {
            document.querySelectorAll(".tooltip-step-indicator")
                .forEach(indicator => new Tooltip(indicator, {
                    placement: "top",
                    container: "div"
                }));
        }, [Tooltip]);


        const isDisabled = (index: number) => {
            return index > 0 && !devMode ? previousStepsInvalid(index > 0 ? index - 1 : index) : false;
        };

        return (
            <div className="revealInY signup-progress">
                <div className="mt-2 mb-5 col-10 mx-auto position-relative revealInY">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width}}/>
                    </div>
                    <div className="step-indicator-group">
                        {steps.map(([label, , , icon], index) => (<div
                            key={label}
                            className="tooltip-step-indicator"
                            title={label}
                            style={{
                                left: `calc(${100 * (index + 1) / (steps.length + 1)}% - 20px)`,
                            }}>
                            <button onClick={() => {
                                        setStep(index);
                                    }}
                                    key={`stepIndicator${index}`}
                                    type="button"
                                    className={`btn btn-primary shadow shadow-sm rounded-circle step-indicator fw-bold ${isDisabled(index) ? "" : "hover-indicator"}`}
                                    style={{
                                        transitionDelay: `${50 * index}ms`
                                    }}
                                    disabled={isDisabled(index) || isSubmitting}>
                                {icon ? <FaIcon icon={icon}/> : index + 1}
                            </button>
                        </div>))}
                    </div>
                </div>
            </div>
        );
    };


export const SignUpFormSelect = ({options, name}: {name: string, options: SignUpFormApplication[]}) => {

    const [field, , helpers] = useField(name);

    return (
        <div>
            <div className="select-card-group select-card-group-sm">
                {options.map(({title, description, icon, appType}) => (

                    <div key={title} tabIndex={-1} className={`select-card ${field.value == appType ? "active" : ""}`}
                         onClick={() => { helpers.setValue(appType); }}>
                        <div className="card-body-header">
                            <FaIcon icon={icon} className="text-primary fs-1 m-3"/>
                            <h2 className="h5 fw-bold">{title}</h2>
                        </div>
                        <p className="card-text card-body-content">
                            {description}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    );

};
