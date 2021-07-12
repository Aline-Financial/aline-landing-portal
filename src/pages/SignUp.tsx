import React from "react";
import {useLocation} from "react-router";
import {Form, Field, Formik} from "formik";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    const email = location.state?.email;

    return (
        <Formik initialValues={{email, password: ""}}
                onSubmit={values => {
                    console.table(values);
                }}>
            <Form>
                <div className="row row-cols-2">
                    <div className="col form-floating">
                        <Field as="input" className="form-control" type="email" id="email" name="email" placeholder="Email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col form-floating">
                        <Field className="form-control" type="password" id="password" name="password" placeholder="Password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default SignUp;
