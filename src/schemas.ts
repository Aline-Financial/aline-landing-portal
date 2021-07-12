import yup from "yup";

const minAgeDate = new Date();
minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);

export const signUpFormSchema = yup.object().shape({

    applicationType: yup.number()
        .required("Application type is required.")
        .integer("Not a valid application type ID.")
        .positive("Not a valid application type ID."),

    email: yup.string()
        .required("Email is a required.")
        .email("Not a valid email."),

    firstName: yup.string()
        .required("First name is required."),

    middleName: yup.string().nullable(),

    lastName: yup.string()
        .required("Last name is required."),

    gender: yup.string()
        .required("Please select a gender.")
        .matches(/(Male|Female|Other)/i, "Please select a gender."),

    dateOfBirth: yup.date()
        .transform((val) => new Date(val))
        .required("Date of birth is required.")
        .max(minAgeDate, "Must be at least 18 years of age."),

    address: yup.string()

});
