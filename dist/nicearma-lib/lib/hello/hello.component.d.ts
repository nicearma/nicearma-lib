import { EventEmitter, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { ExternalService } from './external.service';
export declare class HelloComponent implements OnInit {
    helloService: HelloService;
    externalService: ExternalService;
    hello: EventEmitter<{}>;
    constructor(helloService: HelloService, externalService: ExternalService);
    ngOnInit(): void;
}
