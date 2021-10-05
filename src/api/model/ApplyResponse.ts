import ApplicationType from "@api/model/ApplicationType";
import ApplicantResponse from "@api/model/ApplicantResponse";
import ApplicationStatus from "@api/model/ApplicationStatus";


type ApplyResponse = {
    id: number;
    type: ApplicationType;
    applicants: ApplicantResponse[];
    status: ApplicationStatus;
    reasons: string[];
    accountsCreated: boolean;
    membersCreated: boolean;
};

export default ApplyResponse;
