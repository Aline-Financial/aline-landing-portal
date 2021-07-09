import {ReactElement} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";

export function renderWithRouter(ui: ReactElement) {
    return render(ui, { wrapper: MemoryRouter});
}
