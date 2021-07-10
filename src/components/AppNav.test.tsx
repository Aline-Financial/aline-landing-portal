import React from "react";
import {renderWithRouter} from "@test-utils";
import AppNav from "./AppNav";
import {fireEvent} from "@testing-library/react";

describe("AppNav", () => {
    const { getByText, getAllByText, getByLabelText } = renderWithRouter(<AppNav/>);

    const appNav = getByLabelText(/navigation/i);

    it("should be in the document", () => {
        expect(appNav).toBeInTheDocument();
    });

    it("should have a drop shadow pseudo element with opacity of 0 when scrollTop is less than 75", () => {
        fireEvent.scroll(window, {
            scrollY: 75
        });
        const afterEl = window.getComputedStyle(appNav, ":after");
        console.log(afterEl);
        console.log(window.scrollY);
    });

    describe("NavBrandLink", () => {
        const appLink = getByText((content) => {
            return content.includes("Aline") && content.includes("Financial");
        });

        it("should contain class name 'navbar-brand'", () => {
            expect(appLink.classList.contains("navbar-brand")).toBe(true);
        });

        it("should contain the 'AlineFinancial' as text", () => {
            expect(appLink.textContent).toContain("AlineFinancial");
        });

        it("should have an href of '/'", () => {
            expect(appLink.getAttribute("href")).toBe("/");
        });

        it("should contain a non-draggable image that represents the logo", () => {
            const logo = appLink.querySelector("img");
            expect(logo).toBeTruthy();
            expect(logo?.getAttribute("draggable")).toBe("false");
            expect(logo?.getAttribute("src")).toBe("image test stub");
        });

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
