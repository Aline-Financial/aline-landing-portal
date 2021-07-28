import {date, number, object, string} from "yup";

const minAgeDate = new Date();
minAgeDate.setFullYear(minAgeDate.getFullYear() - 17);

export const SignUpFormValidationSchema = object({

    applicationType: string()
        .label("Application Type")
        .required("Application type is required.")
        .matches(/(CHECKING|SAVINGS|CHECKING_AND_SAVINGS|CREDIT_CARD|LOAN)/, (err: any) => `'${err.value}' is not valid application type.`),

    email: string()
        .label("Email")
        .required("Email is a required.")
        .email((err: any) => `'${err.value}' is not a valid email address.`),

    firstName: string()
        .label("First Name")
        .matches(/^[aA-zZ\s-]+$/, (err: any) => `'${err.value}' is not a valid name.`)
        .required("First name is required."),

    middleName: string()
        .label("Middle Name")
        .matches(/^[aA-zZ\s-]+$/, (err: any) => `'${err.value}' is not a valid middle name.`)
        .nullable()
        .notRequired(),

    lastName: string()
        .label("Last Name")
        .matches(/^[aA-zZ\s-]+$/, (err: any) => `'${err.value}' is not a valid name.`)
        .required("Last name is required."),

    gender: string()
        .label("Gender")
        .required("Please select a gender.")
        .matches(/(MALE|FEMALE|OTHER|UNSPECIFIED)/, "Please select a gender."),

    dateOfBirth: date()
        .label("Date of Birth")
        .typeError("Not a valid date.")
        .transform((val: any) => new Date(val))
        .required("Date of birth is required.")
        .max(minAgeDate, "Must be at least 18 years of age."),

    phone: string()
        .label("Phone Number")
        .matches(/\(\d{3}\)[\s-.]\d{3}[\s-.]\d{4}/,
            (err: any) => `'${err.value}' is not a valid phone number.`),

    address: string()
        .label("Address")
        .required("Address is required.")
        .matches(/^([0-9]+([a-zA-Z]+)?)\s(.*)(\s)([a-zA-Z]+)(\.)?(\s(#?(\w+))|([A-Za-z]+\.?(\w+)))?$/i,
            (err: any) => `'${err.value}' is not a valid address.`),

    city: string()
        .label("City")
        .required("City is required."),

    state: string()
        .label("State")
        .required("State is required."),

    zipcode: string()
        .label("Zipcode")
        .required("Zipcode is required.")
        .matches(/^\d{5}(-\d{4})?$/,
            (err: any) => `'${err.value}' is not a valid zipcode.`),

    sameAsBilling: string()
        .matches(/(true|false)/i)
        .required("Please select an option."),

    mailingAddress: string()
        .label("Mailing Address")
        .transform((value: string) => (value.length <= 0 ? undefined : value))
        .when("sameAsBilling", {
            is: "false",
            then: string()
                .matches(/^(((PO|P O|P.O)\.?\s(Box)\s([0-9]+))|(([0-9]+([a-zA-Z]+)?)\s(.*)(\s)([a-zA-Z]+)(\.)?(\s(#?(\w+))|([A-Za-z]+\.?(\w+)))?))$/i,
                (err: any) => `'${err.value}' is not a valid address.`).required("Address is required."),
            otherwise: string().notRequired()
        }),

    mailingCity: string()
        .label("Mailing City")
        .transform((value: string) => (value.length <= 0 ? undefined : value))
        .when("sameAsBilling", {
            is: "false",
            then: string().required("City is required.")
        }),

    mailingState: string()
        .label("Mailing State")
        .transform((value: string) => (value.length <= 0 ? undefined : value))
        .when("sameAsBilling", {
            is: "false",
            then: string().required("State is required.")
        }),

    mailingZipcode: string()
        .label("Mailing Zipcode")
        .transform((value: string) => (value.length <= 0 ? undefined : value))
        .matches(/^\d{5}(-\d{4})?$/,
            (err: any) => `${err.value} is not a valid zipcode.`)
        .when("sameAsBilling", {
            is: "false",
            then: string().required("Zipcode is required.")
        }),
    driversLicense: string()
        .label("Driver's License")
        .required("Driver's license is required."),

    socialSecurity: string()
        .label("Social Security")
        .required("Social security is required.")
        .matches(/(\d{3})-(\d{2})-(\d{4})/, (err: any) => `${err.value} is not a valid social security number.`),

    incomeFrequency: string()
        .label("Income Frequency")
        .required()
        .default("Annually")
        .matches(/(Annually|Monthly|Bi-Weekly|Weekly|Hourly)/i),

    income: number()
        .label("Income")
        .positive("Cannot have negative income.")
        .required("Income is required."),

    initialDeposit: number()
        .positive("Cannot have a negative deposit.")
        .label("Initial Deposit")
        .required("An initial deposit is required.")

});
