import CreateApplicant from "@api/model/CreateApplicant";

type ApplyRequest = {
    applicationType: string;
    applicants: CreateApplicant[];
};

export default ApplyRequest;
