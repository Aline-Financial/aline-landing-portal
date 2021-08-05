abstract class BaseApiService {

    private readonly api: string;

    protected constructor() {
        this.api = process.env.REACT_APP_API!;
    }

    protected getApi(endpoint: string) {
        return `${this.api}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
    }

}

export default BaseApiService;
