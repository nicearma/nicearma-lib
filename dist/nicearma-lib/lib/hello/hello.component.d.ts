import { EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export declare class HelloComponent implements OnInit {
    http: HttpClient;
    hello: EventEmitter<{}>;
    constructor(http: HttpClient);
    ngOnInit(): void;
}
