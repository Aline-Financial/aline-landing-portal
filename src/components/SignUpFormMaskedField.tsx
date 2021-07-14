import React from "react";
import SignUpFormError from "@components/SignUpFormError";
import InputMask from "react-input-mask";
import {FieldProps} from "formik";
import {Field} from "formik";

const SignUpFormField = ({name, placeholder, mask}: {name: string, mask: string, placeholder: string}) => {
    return (
        <>
            <div className="my-2">
                <Field name={name} key={name}>
                    {({field, form: {errors, touched}}: FieldProps) => (
                        <>
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
                        </>
                    )}
                </Field>
            </div>
        </>
    );
};

export default SignUpFormField;
