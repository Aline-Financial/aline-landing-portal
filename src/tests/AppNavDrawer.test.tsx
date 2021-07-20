import React from "react";
import {renderWithRouter} from "@test-utils";
import AppNavDrawer from "@components/AppNavDrawer";
import {RenderResult} from "@testing-library/react";

describe("AppNavDrawer", () => {

    let drawer: RenderResult;

    beforeAll(() => {
        drawer = renderWithRouter(<AppNavDrawer/>);
    });

    it("should contain class 'offcanvas'", () => {
        const drawerEl = drawer.container.children[0];
        expect(drawerEl.classList.contains("offcanvas")).toBe(true);
    });

    it("should contain a Home link with href of '/'", () => {
        const drawer = renderWithRouter(<AppNavDrawer/>);
        const homeLink = drawer.getByText((content) => {
            return content.includes("Home");
        });
        expect(homeLink.getAttribute("href")).toBe("/");
    });

});
