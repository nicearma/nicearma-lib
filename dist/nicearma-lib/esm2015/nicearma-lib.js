import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
class HelloComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
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
HelloComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const Components = [
    NicearmaLibComponent
];
class NicearmaLibModule {
}
NicearmaLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [...Components
                ],
                exports: [...Components]
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

export { NicearmaLibService, NicearmaLibComponent, HelloComponent, NicearmaLibModule };
//# sourceMappingURL=nicearma-lib.js.map
