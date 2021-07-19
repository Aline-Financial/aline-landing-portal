import {AppNavRoute, SignUpFormSchema, SignUpFormStep} from "@interfaces";
import {ReactElement, ReactFragment} from "react";
import {FormikErrors, FormikTouched} from "formik";

export type AppNavDropdownProps = {
    label: string;
    routes: AppNavRoute[];
};
export type LandingSectionProps = {
    image: string;
    title: ReactFragment;
    body: ReactFragment;
    buttonText: string;
    buttonRoute: string;
    align: "start" | "end";
    light?: boolean;
};

export type SignUpFormStepProps = {
    errors: FormikErrors<SignUpFormSchema>,
    touched: FormikTouched<SignUpFormSchema>,
    step: SignUpFormStep
}

export type SignUpFormFieldProps = {
    errors: FormikErrors<SignUpFormSchema>,
    touched: FormikTouched<SignUpFormSchema>,
    name: string,
    placeholder: string,
    is?: string,
    children?: ReactElement | ReactElement[],
    autoFocus?: boolean
}
