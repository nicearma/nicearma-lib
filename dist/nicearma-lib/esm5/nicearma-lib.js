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
var HelloComponent = /** @class */ (function () {
    function HelloComponent(http) {
        this.http = http;
        this.hello = new EventEmitter();
    }
    HelloComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/sayHello').subscribe(function (v) {
            _this.hello.emit(v);
        });
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
    { type: HttpClient, },
]; };
HelloComponent.propDecorators = {
    "hello": [{ type: Input },],
};
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
