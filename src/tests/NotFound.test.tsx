import React from "react";
import NotFound from "@pages/NotFound";
import {renderWithRouter} from "@test-utils";

it("should contain '404' or 'Not Found'", () => {
    const {getByText} = renderWithRouter(<NotFound/>);
    const notFoundText = getByText(/(404|Not Found)/i);
    expect(notFoundText).toBeInTheDocument();
});

