// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Set up icons for tests
import {IconsConfig} from "@config/icons.config";
import {library} from "@fortawesome/fontawesome-svg-core";
import {ReactElement} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";

IconsConfig.icons.forEach(icon => library.add(icon));

const { getComputedStyle } = window;
window.getComputedStyle = (elt, pseudoElt) => getComputedStyle(elt, pseudoElt);

export function renderWithRouter(ui: ReactElement) {
    return render(ui, { wrapper: MemoryRouter});
}
