import * as yup from "yup";
import {ObjectSchema, BaseSchema} from "yup";

export type StepValidationResults = {
    valid: boolean,
    errors?: {field: string, value: any, message: string}[]
};

export class MultiStepForm extends Array<FormStep> {
    constructor(private schema: ObjectSchema<any>, private root: FormStep) {
        super();
        this.add(root);
    }

    add(...formSteps: FormStep[]) {
        formSteps.forEach(formStep => {
            formStep.schema = this.schema;
        });
        this.push(...formSteps);
    }
}

export class FormStep {
    
    private _schema: ObjectSchema<any> | undefined;
    
    constructor(private _fields: any,
                private _next?: FormStep,
                private _prev?: FormStep) {}

    get next() {
        return this._next;
    }

    get prev() {
        return this._prev;
    }

    get fields() {
        return this._fields;
    }

    set schema(schema) {
        this._schema = schema;
    }

    get schema() {
        return this._schema;
    }

    get isValid(): boolean {
        const validationArray: boolean[] = [];
        const fields = Object.entries(this.fields);
        fields.forEach(
            field => {
                const fieldSchema: BaseSchema = yup.reach(this.schema!, field[0]);
                validationArray.push(fieldSchema.isValidSync(field[1]));
            }
        );
        return !validationArray.includes(false);
    }

    validate(): StepValidationResults {
        const errors: {field: string, value: any, message: string}[] = [];
        let valid = true;
        const fields = Object.entries(this.fields);
        fields.forEach(
            field => {
                const fieldPath = field[0];
                const fieldValue = field[1];
                const fieldSchema: BaseSchema = yup.reach(this.schema!, field[0]);
                try {
                    fieldSchema.validateSync(field[1]);
                } catch (e) {
                    errors.push({
                        field: fieldPath,
                        value: fieldValue,
                        message: e.message
                    });
                    valid = false;
                }

            }
        );

        return valid ? {valid}: {errors, valid};
    }

}
