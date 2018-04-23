import { __spread } from 'tslib';
import { Injectable, Component, EventEmitter, Input, NgModule, defineInjectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var NicearmaLibService = /** @class */ (function () {
    function NicearmaLibService() {
    }
    return NicearmaLibService;
}());
NicearmaLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
NicearmaLibService.ctorParameters = function () { return []; };
NicearmaLibService.ngInjectableDef = defineInjectable({ factory: function NicearmaLibService_Factory() { return new NicearmaLibService(); }, token: NicearmaLibService, providedIn: "root" });
var NicearmaLibComponent = /** @class */ (function () {
    function NicearmaLibComponent() {
    }
    NicearmaLibComponent.prototype.ngOnInit = function () {
    };
    return NicearmaLibComponent;
}());
NicearmaLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-nicearma-lib',
                template: "<p>\n  nicearma-lib works!\n</p>\n",
                styles: []
            },] },
];
NicearmaLibComponent.ctorParameters = function () { return []; };
var HelloService = /** @class */ (function () {
    function HelloService() {
    }
    HelloService.prototype.sayHello = function () {
        console.log('hello');
    };
    return HelloService;
}());
HelloService.decorators = [
    { type: Injectable },
];
var ExternalService = /** @class */ (function () {
    function ExternalService(httpClient) {
        this.httpClient = httpClient;
    }
    ExternalService.prototype.sayHola = function () {
        this.httpClient.get('sayHola').subscribe();
        console.log('hola');
    };
    return ExternalService;
}());
ExternalService.decorators = [
    { type: Injectable },
];
ExternalService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
var HelloComponent = /** @class */ (function () {
    function HelloComponent(helloService, externalService) {
        this.helloService = helloService;
        this.externalService = externalService;
        this.hello = new EventEmitter();
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.helloService.sayHello();
        this.externalService.sayHola();
    };
    return HelloComponent;
}());
HelloComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-hello',
                template: "\n<h1>Hello Nicolas</h1>\n",
                styles: []
            },] },
];
HelloComponent.ctorParameters = function () { return [
    { type: HelloService, },
    { type: ExternalService, },
]; };
HelloComponent.propDecorators = {
    "hello": [{ type: Input },],
};
var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    return PageComponent;
}());
PageComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-page',
                template: "<h1>Page from lib!!!! </h1>\n",
                styles: []
            },] },
];
PageComponent.ctorParameters = function () { return []; };
var routes = [
    { path: 'lib', component: PageComponent }
];
var Components = [
    NicearmaLibComponent,
    HelloComponent,
    PageComponent
];
var NicearmaLibModule = /** @class */ (function () {
    function NicearmaLibModule() {
    }
    return NicearmaLibModule;
}());
NicearmaLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: __spread(Components),
                exports: __spread(Components),
                providers: [HelloService]
            },] },
];

export { NicearmaLibService, NicearmaLibComponent, HelloComponent, ExternalService, routes, NicearmaLibModule, HelloService as ɵa, PageComponent as ɵb };
//# sourceMappingURL=nicearma-lib.js.map
