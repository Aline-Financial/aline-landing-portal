import BaseApiService from "./BaseApiService";
import axios, {AxiosResponse} from "axios";
import ApplyResponse from "@api/model/ApplyResponse";
import ApplyRequest from "@api/model/ApplyRequest";

class ApplicationApiService extends BaseApiService {
    constructor() {
        super();
    }

    postApplication(request: ApplyRequest): Promise<AxiosResponse<ApplyResponse>> {
        return axios.post<ApplyRequest, AxiosResponse<ApplyResponse>>(this.getApi("/applications"), request);
    }

}

export default ApplicationApiService;
