import React from "react";
import {renderWithRouter} from "@test-utils";
import {AppNav} from "./AppNav";
import assert from "assert";

describe("NavBrandLink", () => {

    const { getByText } = renderWithRouter(<AppNav/>);
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
        assert(logo, "Logo was null");
        expect(logo.getAttribute("draggable")).toBe("false");
        expect(logo.getAttribute("src")).toBe("image test stub");
    });

});

describe("NavBarNav", () => {
    const nav = document.querySelector("ul.navbar-nav");

    it("should contain a 'Login' button that links to REACT_APP_MEMBER_DASHBOARD_URL", () => {

    });

});
