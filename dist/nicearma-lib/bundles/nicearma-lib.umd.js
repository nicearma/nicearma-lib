(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('nicearma-lib', ['exports', '@angular/core'], factory) :
	(factory((global['nicearma-lib'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
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
HelloComponent.ctorParameters = function () { return []; };
var Components = [
    NicearmaLibComponent
];
var NicearmaLibModule = /** @class */ (function () {
    function NicearmaLibModule() {
    }
    return NicearmaLibModule;
}());
NicearmaLibModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [],
                declarations: __spread(Components),
                exports: __spread(Components)
            },] },
];

exports.NicearmaLibService = NicearmaLibService;
exports.NicearmaLibComponent = NicearmaLibComponent;
exports.HelloComponent = HelloComponent;
exports.NicearmaLibModule = NicearmaLibModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nicearma-lib.umd.js.map