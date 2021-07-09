import React from "react";
import {renderWithRouter} from "@test-utils";
import {AppNav} from "./AppNav";

describe("AppNav", () => {

    const { getByText } = renderWithRouter(<AppNav/>);
    const appNav = getByText((content) => {
        return content.includes("Aline") && content.includes("Financial");
    });

    it("should contain the 'Aline Financial' as text", () => {
        expect(appNav).toBeInTheDocument();
    });
});
