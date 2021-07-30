import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ReactFragment} from "react";

export type AppNavRoute = {
    label: string;
    route: string;
};


export type LandingCardData = {
    icon: IconProp;
    title: string;
    description: string;
    buttonText: string;
    buttonRoute: string;
};


export type SignUpFormSchema = {
    applicationType: string,
    email: string,
    firstName: string,
    lastName: string,
    middleName: string | undefined,
    gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED" | undefined,
    dateOfBirth: string | undefined,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    sameAsBilling: "true" | "false" | "",
    mailingAddress: string,
    mailingCity: string,
    mailingState: string,
    mailingZipcode: string,
    driversLicense: string,
    socialSecurity: string,
    incomeFrequency: string,
    income: number | undefined,
    initialDeposit: number,
    phone: string
};

export type SignUpFormTestingSchema = {
    applicationType: string | any,
    email: string | any,
    firstName: string | any,
    lastName: string | any,
    middleName: string | any,
    gender: "Male" | "Female" | "Other" | any,
    dateOfBirth: string | Date | any,
    address: string | any,
    city: string | any,
    state: string | any,
    zipcode: string | any,
    sameAsBilling: boolean | any,
    mailingAddress: string | any,
    mailingCity: string | any,
    mailingState: string | any,
    mailingZipcode: string | any,
    driversLicense: string | any,
    socialSecurity: string | any,
    incomeFrequency: string | any,
    income: number | any,
    initialDeposit: number | any,
    phone: string | any
};

export type SignUpFormStep = [
    label: string,
    fields: string[],
    fragment: ReactFragment | ((values: any) => ReactFragment),
    icon?: IconProp
];

export type SignUpFormApplication = {title: string, description: string, appType: string, icon: IconProp};
