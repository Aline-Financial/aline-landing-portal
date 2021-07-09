import React from "react";
import {renderWithRouter} from "@test-utils";
import {AppNavDrawer} from "./AppNavDrawer";

describe("AppNavDrawer", () => {

    const drawer = renderWithRouter(<AppNavDrawer/>);

    it("should contain a Home link with href of '/'", () => {
        console.log(drawer.container);
    });

});
