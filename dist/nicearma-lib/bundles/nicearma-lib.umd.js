(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define('nicearma-lib', ['exports', '@angular/core', '@angular/common/http'], factory) :
	(factory((global['nicearma-lib'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,core,http) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */










function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var NicearmaLibService = /** @class */ (function () {
    function NicearmaLibService() {
    }
    return NicearmaLibService;
}());
NicearmaLibService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
NicearmaLibService.ctorParameters = function () { return []; };
NicearmaLibService.ngInjectableDef = core.defineInjectable({ factory: function NicearmaLibService_Factory() { return new NicearmaLibService(); }, token: NicearmaLibService, providedIn: "root" });
var NicearmaLibComponent = /** @class */ (function () {
    function NicearmaLibComponent() {
    }
    NicearmaLibComponent.prototype.ngOnInit = function () {
    };
    return NicearmaLibComponent;
}());
NicearmaLibComponent.decorators = [
    { type: core.Component, args: [{
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
    { type: core.Injectable },
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
    { type: core.Injectable },
];
ExternalService.ctorParameters = function () { return [
    { type: http.HttpClient, },
]; };
var HelloComponent = /** @class */ (function () {
    function HelloComponent(helloService, externalService) {
        this.helloService = helloService;
        this.externalService = externalService;
        this.hello = new core.EventEmitter();
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.helloService.sayHello();
        this.externalService.sayHola();
    };
    return HelloComponent;
}());
HelloComponent.decorators = [
    { type: core.Component, args: [{
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
    "hello": [{ type: core.Input },],
};
var externalServiceFactory = {
    provide: ExternalService,
    useFactory: function (httpClient) {
        return new ExternalService(httpClient);
    },
    deps: [http.HttpClient]
};
var Components = [
    NicearmaLibComponent,
    HelloComponent
];
var NicearmaLibModule = /** @class */ (function () {
    function NicearmaLibModule() {
    }
    return NicearmaLibModule;
}());
NicearmaLibModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: __spread(Components),
                exports: __spread(Components),
                providers: [HelloService]
            },] },
];

exports.NicearmaLibService = NicearmaLibService;
exports.NicearmaLibComponent = NicearmaLibComponent;
exports.HelloComponent = HelloComponent;
exports.ExternalService = ExternalService;
exports.externalServiceFactory = externalServiceFactory;
exports.NicearmaLibModule = NicearmaLibModule;
exports.ɵa = HelloService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nicearma-lib.umd.js.map
