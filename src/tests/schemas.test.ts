import {SignUpFormValidationSchema as schema} from "@schemas";
import {SignUpFormSchema, SignUpFormTestingSchema} from "@interfaces";
import {BaseSchema} from "yup";
import {expectInvalid, expectValid} from "@test-utils";

describe("Sign Up Form Validation Schema", () => {

    const correctForm: SignUpFormSchema = {
        applicationType: "CHECKING",
        email: "testboy@test.com",
        firstName: "Test",
        lastName: "Boy",
        middleName: "Tickle",
        gender: "MALE",
        phone: "(555) 555-5555",
        dateOfBirth: "1999-08-07",
        address: "123 Address St.",
        city: "Townsville",
        state: "Maine",
        zipcode: "12345-1234",
        sameAsBilling: "false",
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

    test("Correct form is valid", () => {
        expect(schema.isValidSync(correctForm)).toBe(true);
    });

    test("Form is invalid when at least one required field is null", () => {
        Object.entries(schema.fields)
            .filter(entry => (<BaseSchema>entry[1]).spec.presence === "required")
            .map(entry => entry[0])
            .forEach(field => {
                const modifiedForm = <SignUpFormTestingSchema>Object.fromEntries(Object.entries(correctForm)
                    .map(entry => entry[0] === field ? [field, null] : entry));
                expectInvalid(modifiedForm);
            });
    });

    describe("Application Type", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be invalid if it is null", () => {
            modifiedForm.applicationType = null;
            expectInvalid(modifiedForm);
        });

        it("should be invalid if it is undefined", () => {
            modifiedForm.applicationType = undefined;
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

    });

    describe("Gender", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid if it is either Male, Female, Other, or Unspecified", () => {
            const genders = ["MALE", "FEMALE", "OTHER"];
            [...genders].forEach(gender => {
                 modifiedForm.gender = gender;
                 expectValid(modifiedForm);
            });
        });

        it("should be invalid if it is not either Male, Female, Other, or Unspecified", () => {
            ["Blue", "Red", "Green", "Apple", "Pineapple"]
                .forEach(item => {
                    modifiedForm.gender = item;
                    expectInvalid(modifiedForm);
                });
        });

    });

    describe("Date of Birth", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be invalid if age is below 18", () => {
            Array.from(Array(17).keys())
                .forEach(i => {
                    const today = new Date();
                    const birthdate = new Date();
                    birthdate.setFullYear(birthdate.getFullYear() - i);
                    modifiedForm.dateOfBirth = birthdate;
                    const age = today.getFullYear() - birthdate.getFullYear();
                    expect(age).toBeLessThan(18);
                    expectInvalid(modifiedForm);
                });
        });

        it("should be valid if age is 18 or over", () => {
            Array.from(Array(25).keys())
                .forEach(i => {
                    const today = new Date();
                    const birthdate = new Date();
                    birthdate.setFullYear(birthdate.getFullYear() - (i + 18));
                    modifiedForm.dateOfBirth = birthdate;
                    const age = today.getFullYear() - birthdate.getFullYear();
                    expect(age).toBeGreaterThanOrEqual(18);
                    expectValid(modifiedForm);
                });
        });

    });

    describe("Address", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid with a street address format", () => {
            modifiedForm.address = "123 Address St.";
            expectValid(modifiedForm);
        });

        it("should be valid with an apartment address", () => {
            modifiedForm.address = "123 Address St. Apt. 25";
            expectValid(modifiedForm);
        });

        it("should be valid with a PO Box", () => {
            modifiedForm.mailingAddress = "PO Box 1234";
            expectValid(modifiedForm);
        });

        it("should be invalid with a street address without number", () => {
            modifiedForm.address = "Address St.";
            expectInvalid(modifiedForm);
        });

        it("should be invalid with an apartment address with no apartment number", () => {
            modifiedForm.address = "123 Address Ave. Apt. ";
            expectInvalid(modifiedForm);
        });

    });

    describe("Zipcode", () => {

        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid if in 5 digit format", () => {
            modifiedForm.zipcode = "12345";
            expectValid(modifiedForm);
        });

        it("should be valid if in +4 format", () => {
            modifiedForm.zipcode = "12345-1234";
            expectValid(modifiedForm);
        });

        it("should be invalid if less than 5 digits", () => {
            modifiedForm.zipcode = "1234";
            expectInvalid(modifiedForm);
        });

        it("should be invalid if less than 4 digits in plus 4 section", () => {
            modifiedForm.zipcode = "12345-123";
            expectInvalid(modifiedForm);
        });

        it("should be invalid if there is no dash between +4 format", () => {
            modifiedForm.zipcode = "12345 1234";
            expectInvalid(modifiedForm);
        });

        it("should be invalid if more than 5 digits", () => {
            modifiedForm.zipcode = "123456";
            expectInvalid(modifiedForm);
        });

        it("should be invalid if there are no digits", () => {
            modifiedForm.zipcode = "zipcode";
            expectInvalid(modifiedForm);
        });

    });

    describe("Income and Initial Deposit", () => {
        let modifiedForm: SignUpFormTestingSchema;

        beforeEach(() => {
            modifiedForm = {...correctForm};
        });

        it("should be valid if Annually, Monthly, Bi-Weekly, Weekly, or Hourly", () => {
            ["Annually", "Monthly", "Bi-Weekly", "Weekly", "Hourly"]
                .forEach(frequency => {
                    modifiedForm.incomeFrequency = frequency;
                    expectValid(modifiedForm);
                });
        });

        it("should be invalid if not Annually, Monthly, Bi-Weekly, Weekly, or Hourly", () => {
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                .forEach(frequency => {
                    modifiedForm.incomeFrequency = frequency;
                    expectInvalid(modifiedForm);
                });
        });

        it("should be invalid if initial deposit is negative", () => {
            modifiedForm.initialDeposit = -500;
            expectInvalid(modifiedForm);
        });

        it("should be valid if initial deposit is positive", () => {
            modifiedForm.initialDeposit = 500;
            expectValid(modifiedForm);
        });

        it("should be valid if income is positive", () => {
            modifiedForm.income = 100000;
            expectValid(modifiedForm);
        });

        it("should be invalid if income is negative", () => {
            modifiedForm.income = -18000;
            expectInvalid(modifiedForm);
        });
    });

});
