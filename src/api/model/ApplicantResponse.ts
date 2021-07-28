type ApplicantResponse = {
    id: number;
    firstName: string;
    middleName?: string;
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
    lastModifiedAt: Date;
    createdAt: Date;
};

export default ApplicantResponse;
