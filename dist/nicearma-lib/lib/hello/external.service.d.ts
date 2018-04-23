import { HttpClient } from '@angular/common/http';
export declare class ExternalService {
    httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    sayHola(): void;
}
