import * as yup from "yup";

const minAgeDate = new Date();
minAgeDate.setFullYear(minAgeDate.getFullYear() - 17);

export const SignUpFormValidationSchema = yup.object().shape({

    applicationType: yup.number()
        .label("Application Type")
        .required("Application type is required.")
        .integer(err => `'${err.value}' is not valid application type ID.`)
        .positive(err => `'${err.value}' is not valid application type ID.`),

    email: yup.string()
        .label("Email")
        .required("Email is a required.")
        .email(err => `'${err.value}' is not a valid email address.`),

    firstName: yup.string()
        .label("First Name")
        .matches(/^[aA-zZ\s-]+$/, err => `'${err.value}' is not a valid name.`)
        .required("First name is required."),

    middleName: yup.string()
        .label("Middle Name")
        .matches(/^[aA-zZ\s-]+$/, err => `'${err.value}' is not a valid name.`)
        .nullable()
        .notRequired(),

    lastName: yup.string()
        .label("Last Name")
        .matches(/^[aA-zZ\s-]+$/, err => `'${err.value}' is not a valid name.`)
        .required("Last name is required."),

    gender: yup.string()
        .label("Gender")
        .required("Please select a gender.")
        .matches(/(Male|Female|Other)/i, "Please select a gender."),

    dateOfBirth: yup.date()
        .label("Date of Birth")
        .transform(val => new Date(val))
        .required("Date of birth is required.")
        .max(minAgeDate, "Must be at least 18 years of age."),

    address: yup.string()
        .label("Address")
        .required("Address is required.")
        .matches(/^([0-9]+([a-zA-Z]+)?)\s(.*)(\s)([a-zA-Z]+)(\.)?(\s(#?(\w+))|([A-Za-z]+\.?(\w+)))?$/i,
            err => `'${err.value}' is not a valid address.`),

    city: yup.string()
        .label("City")
        .required("City is required."),

    state: yup.string()
        .label("State")
        .required("State is required."),

    zipcode: yup.string()
        .label("Zipcode")
        .required("Zipcode is required.")
        .matches(/^\d{5}(-\d{4})?$/,
            err => `'${err.value}' is not a valid zipcode.`),

    sameAsBilling: yup.boolean()
        .default(true)
        .required("Please select an option."),

    mailingAddress: yup.string()
        .label("Address")
        .matches(/^([0-9]+([a-zA-Z]+)?)\s(.*)(\s)([a-zA-Z]+)(\.)?(\s(#?(\w+))|([A-Za-z]+\.?(\w+)))?$/i,
            err => `'${err.value}' is not a valid address.`)
        .when("sameAsBilling", {
            is: true,
            then: yup.string().required("Address is required.")
        }),

    mailingCity: yup.string()
        .label("City")
        .when("sameAsBilling", {
            is: true,
            then: yup.string().required("City is required.")
        }),

    mailingState: yup.string()
        .label("State")
        .when("sameAsBilling", {
            is: true,
            then: yup.string().required("State is required.")
        }),

    mailingZipcode: yup.string()
        .label("Zipcode")
        .matches(/^\d{5}(-\d{4})?$/,
            err => `${err.value} is not a valid zipcode.`)
        .when("sameAsBilling", {
            is: true,
            then: yup.string().required("Zipcode is required.")
        }),


    driversLicense: yup.string()
        .label("Driver's License")
        .required("Driver's license is required."),

    socialSecurity: yup.string()
        .label("Social Security")
        .required("Social security is required.")
        .matches(/(\d{3})-(\d{2})-(\d{4})/, err => `${err.value} is not a valid social security number.`),

    incomeFrequency: yup.string()
        .label("Income Frequency")
        .required()
        .default("Annually")
        .matches(/(Annually|Monthly|Bi-Weekly|Weekly|Hourly)/i),

    income: yup.number()
        .label("Income")
        .positive("Cannot have negative income.")
        .required("Income is required."),

    initialDeposit: yup.number()
        .positive("Cannot have a negative deposit.")
        .label("Initial Deposit")
        .required("An initial deposit is required.")

});
