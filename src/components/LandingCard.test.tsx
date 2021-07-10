import React from "react";
import {renderWithRouter} from "@test-utils";
import {RenderResult} from "@testing-library/react";
import LandingCard from "@components/LandingCard";
import {LandingCardData} from "@interfaces";

describe("LandingCard", () => {

    let landingCard: RenderResult;

    beforeEach(() => {
        const cardData: LandingCardData = {
            icon: ["fas", "bars"],
            title: "Test title",
            description: "Test description",
            buttonText: "Test Button",
            buttonRoute: "/test"
        };
        landingCard = renderWithRouter(<LandingCard cardData={cardData}/>);
    });

    afterEach(() => {
        landingCard.unmount();
    });

    it("should contain correct title", () => {
        const title = landingCard.getByText(/test title/i);
        expect(title).toBeInTheDocument();
    });

    it("should contain correct description", () => {
        const description = landingCard.getByText(/test description/i);
        expect(description).toBeInTheDocument();
    });

    it("should contain correct button text", () => {
        const buttonText = landingCard.getByText(/test button/i);
        expect(buttonText).toBeInTheDocument();
    });

    it("should contain an a tag with correct href", () => {
        const button = landingCard.getByText(/test button/i);
        const {parentElement} = button;
        expect(parentElement?.getAttribute("href")).toBe("/test");
    });

});
