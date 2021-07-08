import React from "react";
import {render} from "@testing-library/react";
import {NotFound} from "./NotFound";
import {BrowserRouter as Router} from "react-router-dom";

describe("NotFound Component", () => {

    it("should contain '404' or 'Not Found' on screen", () => {
        const { getByText } = render(
            <Router>
                <NotFound/>
            </Router>
        );
        const notFoundText = getByText(/(404|Not Found)/i);
        expect(notFoundText).toBeInTheDocument();
    });

});

