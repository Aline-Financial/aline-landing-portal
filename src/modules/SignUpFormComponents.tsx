import {FormikProps} from "formik";
import {SignUpFormSchema} from "@interfaces";

export const SignUpFormStep =
    ({label, fields, ...formikProps}:
         {label: string, fields: string[], formikProps: FormikProps<SignUpFormSchema>}) => {

    return (
        <div className="">

        </div>);

};
