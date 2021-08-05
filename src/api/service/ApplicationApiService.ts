import BaseApiService from "./BaseApiService";
import axios, {AxiosResponse} from "axios";
import ApplyResponse from "@api/model/ApplyResponse";
import ApplyRequest from "@api/model/ApplyRequest";
import EncryptionService from "@api/service/EncryptionService";

class ApplicationApiService extends BaseApiService {
    
    encrypt: EncryptionService<string>

    constructor() {
        super();
        this.encrypt = new EncryptionService<string>();
    }

    postApplication(request: ApplyRequest): Promise<AxiosResponse<ApplyResponse>> {
        request.applicants = request.applicants
            .map(applicant => {
                applicant.driversLicense = this.encrypt.encrypt(applicant.driversLicense);
                applicant.socialSecurity = this.encrypt.encrypt(applicant.socialSecurity);
                return applicant;
            });
        console.log(request);
        return axios.post<ApplyRequest, AxiosResponse<ApplyResponse>>(this.getApi("/applications"), request);
    }

}

export default ApplicationApiService;
