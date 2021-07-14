import React from "react";
import {SignUpFormFieldProps} from "@props";
import {Field} from "formik";
import SignUpFormError from "@components/SignUpFormError";

const SignUpFormField = ({errors, touched, field, placeholder}: SignUpFormFieldProps) => {
    return (
        <div className="my-2">
            <div className="form-floating">
                <Field id={field}
                       name={field}
                       className="form-control"
                       placeholder={placeholder}/>
                <label htmlFor={field}>{placeholder}</label>
            </div>
            <SignUpFormError errors={errors}
                             touched={touched}
                             field={field}/>
        </div>
    );
};

export default SignUpFormField;
