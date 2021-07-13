import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ReactFragment} from "react";

export type AppNavRoute = {
    label: string;
    route: string;
};

export type AppNavDropdownProps = {
    label: string;
    routes: AppNavRoute[];
};

export type LandingCardData = {
    icon: IconProp;
    title: string;
    description: string;
    buttonText: string;
    buttonRoute: string;
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

export type SignUpFormSchema = {
    applicationType: number,
    email: string,
    firstName: string,
    lastName: string,
    middleName: string | null,
    gender: "Male" | "Female" | "Other",
    dateOfBirth: string | Date,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    sameAsBilling: boolean,
    mailingAddress: string,
    mailingCity: string,
    mailingState: string,
    mailingZipcode: string,
    driversLicense: string,
    socialSecurity: string,
    incomeFrequency: string,
    income: number,
    initialDeposit: number
};

export type SignUpFormTestingSchema = {
    applicationType: number | any,
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
    initialDeposit: number | any
};
