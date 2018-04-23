import { HttpClient } from '@angular/common/http';
import { ExternalService } from './hello/external.service';
export declare const externalServiceFactory: {
    provide: typeof ExternalService;
    useFactory: (httpClient: HttpClient) => ExternalService;
    deps: (typeof HttpClient)[];
};
