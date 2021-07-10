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

    it("should not have nav-shadow as class if window scroll is less than 75", () => {
        Array.from(Array(74).keys()).forEach(scrollY => {
            fireEvent.scroll(window, {
                target: {
                    scrollY
                }
            });
            expect(appNav.classList.contains("nav-shadow")).toBe(false);
        });
    });

    it("should have nav-shadow as class if window scroll is more than or equal to 75", () => {
        Array.from(Array(100).keys()).map(i => i + 75).forEach(scrollY => {
            fireEvent.scroll(window, {
                target: {
                    scrollY
                }
            });
            expect(appNav.classList.contains("nav-shadow")).toBe(true);
        });
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
