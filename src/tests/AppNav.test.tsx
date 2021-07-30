import React from "react";
import {renderWithRouter} from "@test-utils";
import AppNav from "@components/AppNav";

const {getAllByText, getByLabelText} = renderWithRouter(<AppNav/>);

describe("AppNav", () => {

    const appNav = getByLabelText(/navigation/i);

    it("should be in the document", () => {
        expect(appNav).toBeInTheDocument();
    });

    describe("Buttons", () => {
        const loginButtons = getAllByText(/Log In/i);
        const signUpButtons = getAllByText(/Sign Up/i);

        it("should contain 'Login' buttons that links to external member dashboard '/login'", () => {
            expect(loginButtons.length).toBeGreaterThan(0);
            loginButtons.forEach(loginButton => {
                expect(loginButton.textContent).toBe("Log In");
                const {parentElement} = loginButton;
                expect(parentElement?.getAttribute("href")).toContain("/login");
            });
        });

        it("should contain 'Sign Up' buttons that links to external member dashboard '/login'", () => {
            expect(signUpButtons.length).toBeGreaterThan(0);
            signUpButtons.forEach(signUpButton => {
                expect(signUpButton.textContent).toBe("Sign Up");
                const {parentElement} = signUpButton;
                expect(parentElement?.getAttribute("href")).toContain("/signup");
            });
        });

    });
});
