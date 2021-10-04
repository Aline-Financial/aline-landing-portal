import React from "react";
import ApplyResponse from "@api/model/ApplyResponse";
import ApplicationStatus from "@api/model/ApplicationStatus";
import {Link} from "react-router-dom";

const SignUpResults = ({data}: {data: ApplyResponse}) => {

    const Approved = ({data}: {data: ApplyResponse}) => (
        <div className="my-5">
            <p>Your application was <span className="text-success fw-bold">approved</span>.</p>

            <p>We sent an email to <span className="text-decoration-underline text-primary">{data.applicants[0].email}</span>.</p>
        </div>
    );

    const Denied = ({data}: {data: ApplyResponse}) =>  (
        <div className="my-5">
            <p>However, we were not able to approve your application at this time.</p>
            <p><strong>Reason(s): </strong></p>
            <ul>
                {
                    data.reasons.map((reason, index) => <span key={`reason${index}`} className="text-muted">{reason}</span>)
                }
            </ul>
        </div>
    );

    const Pending = ({data}: {data: ApplyResponse}) => (
        <div>
            <p>We were not able to approve your application at this time.</p>
            <p>However, you were not denied. Please call customer support for further assistance.</p>
            <p><strong>Reason(s): </strong></p>
            <ul>
                {
                    data.reasons.map((reason, index) => <span key={`reason${index}`} className="text-muted">{reason}</span>)
                }
            </ul>
        </div>
    );

    const Result = ({data}: {data: ApplyResponse}) => {
        switch (data.status) {
            case ApplicationStatus.APPROVED:
                return <Approved data={data}/>;
            case ApplicationStatus.DENIED:
                return <Denied data={data}/>;
            case ApplicationStatus.PENDING:
                return <Pending data={data}/>;
            default:
                return null;
        }
    };

    return (
        <div className="min-form-height">
            <div className="text-center">
                <h3 className="h3 fw-bold">Thank you for applying!</h3>
                <Result data={data}/>
                <div className="py-3">
                    <Link to="/">
                        <button className="btn btn-outline-primary rounded-pill">
                            Go back home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpResults;
