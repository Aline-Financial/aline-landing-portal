import React from "react";
import SignUpFormError from "@components/SignUpFormError";
import InputMask from "react-input-mask";
import {FieldProps} from "formik";

const SignUpFormField = ({field, form: {errors, touched}, placeholder, mask}: FieldProps & {mask: string, placeholder: string}) => {
    return (
        <>
            <div className="my-2">
                <div className="form-floating">
                        <InputMask mask={mask}
                                   {...field}
                                   placeholder={placeholder}
                                   className="form-control"/>
                        <label htmlFor={field.name}>{placeholder}</label>
                </div>
                <SignUpFormError errors={errors}
                                 touched={touched}
                                 field={field.name}/>
            </div>
        </>
    );
};

export default SignUpFormField;
