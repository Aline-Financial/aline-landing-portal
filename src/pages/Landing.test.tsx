import React from "react";
import {renderWithRouter} from "@test-utils";
import Landing from "@pages/Landing";
import {RenderResult} from "@testing-library/react";

describe("Landing", () => {

    let landing: RenderResult;

    beforeEach(() => {
        landing = renderWithRouter(<Landing/>);
    });

    afterEach(() => {
        landing.unmount();
    });

    it("should contain an input field for an email", () => {
        const emailInput = landing.getByPlaceholderText(/email/i);
        expect(emailInput).toBeInTheDocument();
    });

    it("should contain a submit button", () => {
        const button = landing.getByText(/get started/i);
        expect(button).toBeInTheDocument();
        expect(button.getAttribute("type")).toBe("submit");
    });

    it("should contain an image", () => {
        const image = landing.getByAltText(/main graphic/i);
        expect(image).toBeInTheDocument();
    });

});
