import {ReactElement} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import {SignUpFormTestingSchema} from "@interfaces";
import {SignUpFormValidationSchema as schema} from "@schemas";

export function renderWithRouter (ui: ReactElement) {
    return render(ui, {wrapper: MemoryRouter});
}

export function expectValid(formSchema: SignUpFormTestingSchema) {
    expect(schema.isValidSync(formSchema)).toBe(true);
}

export function expectInvalid(formSchema: SignUpFormTestingSchema) {
    expect(schema.isValidSync(formSchema)).toBe(false);
}
