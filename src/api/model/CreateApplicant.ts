type CreateApplicant = {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    email: string;
    phone: string;
    socialSecurity: string;
    driversLicense: string;
    income: number;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    mailingAddress: string;
    mailingCity: string;
    mailingState: string;
    mailingZipcode: string;
};

export default CreateApplicant;
