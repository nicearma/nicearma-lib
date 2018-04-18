import { __spread } from 'tslib';
import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.prototype.ngOnInit = function () {
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
    { type: NgModule, args: [{
                imports: [],
                declarations: __spread(Components),
                exports: __spread(Components)
            },] },
];

export { NicearmaLibService, NicearmaLibComponent, HelloComponent, NicearmaLibModule };
//# sourceMappingURL=nicearma-lib.js.map
