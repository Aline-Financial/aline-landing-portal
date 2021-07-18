import React from "react";
import {useLocation} from "react-router";
import SignUpForm from "@components/SignUpForm";
import Brand from "@components/Brand";

const SignUp = () => {
    const location = useLocation<{email: string}>();
    const email = location.state?.email;

    return (
        <div className="container">
            <div className="col-12 col-lg-6 mx-auto">
                <div className="bg-white rounded-3 shadow p-4">
                    <div className="d-flex justify-content-center mb-3 text-center">
                        <div className="my-4 text-center">
                            <Brand light scale={1}/>
                        </div>
                    </div>
                    <SignUpForm email={email}/>
                </div>
            </div>
            <div className="text-center text-black-50 d-flex mx-auto justify-content-center align-items-center" style={{
                height: "200px"
            }}>
                &copy; Aline Financial
            </div>
        </div>
    );
};

export default SignUp;
