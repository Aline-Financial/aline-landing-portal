import {SignUpFormValidationSchema as schema} from "@schemas";
import {SignUpFormSchema, SignUpFormTestingSchema} from "@interfaces";

const expectValid = (formSchema: SignUpFormTestingSchema) => {
    expect(schema.isValidSync(formSchema)).toBe(true);
};

const expectInvalid = (formSchema: SignUpFormTestingSchema) => {
    expect(schema.isValidSync(formSchema)).toBe(false);
};

describe("Sign Up Form Validation Schema", () => {

    const correctForm: SignUpFormSchema = {
        applicationType: 1,
        email: "testboy@test.com",
        firstName: "Test",
        lastName: "Boy",
        middleName: "Tickle",
        gender: "Male",
        dateOfBirth: "1999-08-07",
        address: "123 Address St.",
        city: "Townsville",
        state: "Maine",
        zipcode: "12345-1234",
        sameAsBilling: false,
        mailingAddress: "PO Box 1234",
        mailingCity: "Townsville",
        mailingState: "Maine",
        mailingZipcode: "12345-1234",
        driversLicense: "ABC1234567",
        socialSecurity: "123-45-6789",
        incomeFrequency: "Monthly",
        income: 3500,
        initialDeposit: 25
    };

    test("correct form is valid", () => {
        expect(schema.isValidSync(correctForm)).toBe(true);
    });

    describe("Application Type", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid when it is a positive integer", () => {
            Array.from(Array(9).keys())
                .map(i => i + 1)
                .forEach(i => {
                    modifiedForm.applicationType = i;
                    expectValid(modifiedForm);
                });
        });

        it("should be invalid if it is null", () => {
            modifiedForm.applicationType = null;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if it is undefined", () => {
            modifiedForm.applicationType = undefined;
            expectInvalid(modifiedForm);
        });

        it("should be invalid when it is a negative number", () => {
            Array.from(Array(10).keys())
                .map(i => i*-1)
                .forEach(i => {
                    modifiedForm.applicationType = i;
                    expectInvalid(modifiedForm);
                });
        });

        it("should be invalid when it is not a number", () => {
            modifiedForm.applicationType = NaN;
            expectInvalid(modifiedForm);
            modifiedForm.applicationType = "Not a number";
            expectInvalid(modifiedForm);
        });
    });

    describe("Email", () => {
        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid with correct email patterns", () => {
            [
                "email@gmail.com",
                "testboy@test.com",
                "hypen-username@email.com",
                "underscore_boy@yahoo.com",
                "withnumbers123@gmail.com",
                "this-i$_actuallyValid!@gmail.com"
            ].forEach(email => {
                modifiedForm.email = email;
                expectValid(modifiedForm);
            });
        });

        it("should be invalid with incorrect email patterns", () => {
            [
                "email_at_email.com",
                "@gmail.com",
                "12345",
                ""
            ].forEach(email => {
                modifiedForm.email = email;
                expectInvalid(modifiedForm);
            });
        });

        it("should be invalid if the email is null", () => {
            modifiedForm.email = null;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if the email is undefined", () => {
            modifiedForm.email = null;
            expectInvalid(modifiedForm);
        });
    });

    describe("Name", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid if name only contains alphabetical characters", () => {
            ["Bill", "Mark", "Jeffrey", "Steve"]
                .forEach(firstName => {
                    modifiedForm.firstName = firstName;
                    expectValid(modifiedForm);
                });

            ["Henry", "Elliot", "Preston", "Paul"]
                .forEach(middleName => {
                    modifiedForm.middleName = middleName;
                    expectValid(modifiedForm);
                });

            ["Gates", "Zuckerberg", "Bezos", "Jobs"]
                .forEach(lastName => {
                    modifiedForm.lastName = lastName;
                    expectValid(modifiedForm);
                });
        });

        it("should be valid if name only contains a hyphen", () => {
            ["Bill", "Mark", "Jeffrey", "Steve"]
                .map(name => `${name}-${name}`)
                .forEach(firstName => {
                    modifiedForm.firstName = firstName;
                    expectValid(modifiedForm);
                });

            ["Henry", "Elliot", "Preston", "Paul"]
                .map(name => `${name}-${name}`)
                .forEach(middleName => {
                    modifiedForm.middleName = middleName;
                    expectValid(modifiedForm);
                });

            ["Gates", "Zuckerberg", "Bezos", "Jobs"]
                .map(name => `${name}-${name}`)
                .forEach(lastName => {
                    modifiedForm.lastName = lastName;
                    expectValid(modifiedForm);
                });
        });

        it("should be valid if name only contains a space", () => {
            ["Bill", "Mark", "Jeffrey", "Steve"]
                .map(name => `${name} ${name}`)
                .forEach(firstName => {
                    modifiedForm.firstName = firstName;
                    expectValid(modifiedForm);
                });

            ["Henry", "Elliot", "Preston", "Paul"]
                .map(name => `${name} ${name}`)
                .forEach(middleName => {
                    modifiedForm.middleName = middleName;
                    expectValid(modifiedForm);
                });

            ["Gates", "Zuckerberg", "Bezos", "Jobs"]
                .map(name => `${name} ${name}`)
                .forEach(lastName => {
                    modifiedForm.lastName = lastName;
                    expectValid(modifiedForm);
                });
        });

        it("should be invalid if names contain numbers", () => {
            ["Bill", "Mark", "Jeffrey", "Steve"]
                .map((name, index) => `${name}${index}`)
                .forEach(firstName => {
                    modifiedForm.firstName = firstName;
                    expectInvalid(modifiedForm);
                });

            ["Henry", "Elliot", "Preston", "Paul"]
                .map((name, index) => `${name}${index}`)
                .forEach(middleName => {
                    modifiedForm.middleName = middleName;
                    expectInvalid(modifiedForm);
                });

            ["Gates", "Zuckerberg", "Bezos", "Jobs"]
                .map((name, index) => `${name}${index}`)
                .forEach(lastName => {
                    modifiedForm.lastName = lastName;
                    expectInvalid(modifiedForm);
                });
        });

        it("should be invalid if names contain symbols", () => {
            ["Bill", "Mark", "Jeffrey", "Steve"]
                .map((name) => `${name}$!@`)
                .forEach(firstName => {
                    modifiedForm.firstName = firstName;
                    expectInvalid(modifiedForm);
                });

            ["Henry", "Elliot", "Preston", "Paul"]
                .map(name => `${name}$!@`)
                .forEach(middleName => {
                    modifiedForm.middleName = middleName;
                    expectInvalid(modifiedForm);
                });

            ["Gates", "Zuckerberg", "Bezos", "Jobs"]
                .map((name) => `${name}$!@`)
                .forEach(lastName => {
                    modifiedForm.lastName = lastName;
                    expectInvalid(modifiedForm);
                });
        });

        it("should be invalid if first name is null", () => {
            modifiedForm.firstName = null;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if first name is undefined", () => {
            modifiedForm.firstName = undefined;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if last name is null", () => {
            modifiedForm.lastName = null;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if last name is undefined", () => {
            modifiedForm.lastName = undefined;
            expectInvalid(modifiedForm);
        });

        it("should be valid if middle name is null", () => {
            modifiedForm.middleName = null;
            expectValid(modifiedForm);
        });

        it("should be valid if middle name is undefined", () => {
            modifiedForm.middleName = undefined;
            expectValid(modifiedForm);
        });

    });

    describe("Gender", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid if it is either Male, Female, or Other", () => {
            const genders = ["Male", "Female", "Other"];
            [...genders.map(gender => gender.toLowerCase()),
             ...genders.map(gender => gender.toUpperCase()),
             ...genders].forEach(gender => {
                 modifiedForm.gender = gender;
                 expectValid(modifiedForm);
            });
        });

        it("should be invalid if it is not either Male, Female, or Other", () => {
            ["Blue", "Red", "Green", "Apple", "Pineapple"]
                .forEach(item => {
                    modifiedForm.gender = item;
                    expectInvalid(modifiedForm);
                });
        });

        it("should be invalid if it is null", () => {
            modifiedForm.gender = null;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if it is undefined", () => {
            modifiedForm.gender = undefined;
            expectInvalid(modifiedForm);
        });

    });


});
