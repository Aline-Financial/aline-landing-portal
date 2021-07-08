import {JSXElementConstructor, ReactElement} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";

export function renderWithRouter(ui: ReactElement<any, string | JSXElementConstructor<any>>) {
    return render(ui, { wrapper: MemoryRouter});
}
