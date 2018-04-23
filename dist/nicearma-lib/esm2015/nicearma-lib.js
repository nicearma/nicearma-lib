import { Injectable, Component, EventEmitter, Input, NgModule, defineInjectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NicearmaLibService {
    constructor() { }
}
NicearmaLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NicearmaLibService.ctorParameters = () => [];
/** @nocollapse */ NicearmaLibService.ngInjectableDef = defineInjectable({ factory: function NicearmaLibService_Factory() { return new NicearmaLibService(); }, token: NicearmaLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NicearmaLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NicearmaLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-nicearma-lib',
                template: `<p>
  nicearma-lib works!
</p>
`,
                styles: []
            },] },
];
/** @nocollapse */
NicearmaLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HelloService {
    /**
     * @return {?}
     */
    sayHello() {
        console.log('hello');
    }
}
HelloService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ExternalService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @return {?}
     */
    sayHola() {
        this.httpClient.get('sayHola').subscribe();
        console.log('hola');
    }
}
ExternalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ExternalService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HelloComponent {
    /**
     * @param {?} helloService
     * @param {?} externalService
     */
    constructor(helloService, externalService) {
        this.helloService = helloService;
        this.externalService = externalService;
        this.hello = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.helloService.sayHello();
        this.externalService.sayHola();
    }
}
HelloComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-hello',
                template: `
<h1>Hello Nicolas</h1>
`,
                styles: []
            },] },
];
/** @nocollapse */
HelloComponent.ctorParameters = () => [
    { type: HelloService, },
    { type: ExternalService, },
];
HelloComponent.propDecorators = {
    "hello": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const externalServiceFactory = {
    provide: ExternalService,
    useFactory: (httpClient) => {
        return new ExternalService(httpClient);
    },
    deps: [HttpClient]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const Components = [
    NicearmaLibComponent,
    HelloComponent
];
class NicearmaLibModule {
}
NicearmaLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...Components
                ],
                exports: [...Components],
                providers: [HelloService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
 * Public API Surface of nicearma-lib
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NicearmaLibService, NicearmaLibComponent, HelloComponent, ExternalService, externalServiceFactory, NicearmaLibModule, HelloService as ɵa };
//# sourceMappingURL=nicearma-lib.js.map
