import { Directive, ElementRef, NgModule, ApplicationRef, ComponentFactoryResolver, Injectable, InjectionToken, Inject, Injector, NgZone, SecurityContext, Component, HostBinding, HostListener, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { __assign, __values, __extends } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastContainerDirective = /** @class */ (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ToastContainerDirective.prototype.getContainerElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                },] }
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ToastContainerDirective;
}());
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ToastContainerDirective],
                    exports: [ToastContainerDirective],
                },] }
    ];
    return ToastContainerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Everything a toast needs to launch
 */
var  /**
 * Everything a toast needs to launch
 */
ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
        this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();
            _this._onTap.complete();
        });
    }
    /** Fired on click */
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = /**
     * Fired on click
     * @return {?}
     */
    function () {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = /**
     * @return {?}
     */
    function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        this._onAction.next(action);
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = /**
     * @return {?}
     */
    function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var  /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    ComponentPortal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    ComponentPortal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?=} host
     * @return {?}
     */
    ComponentPortal.prototype.setAttachedHost = /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?=} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var  /**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attach = /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var /**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
DomPortalHost = /** @class */ (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    DomPortalHost.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalHost.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalHost;
}(BasePortalHost));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var  /**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?=} newestOnTop
     * @return {?}
     */
    OverlayRef.prototype.attach = /**
     * @param {?} portal
     * @param {?=} newestOnTop
     * @return {?}
     */
    function (portal, newestOnTop) {
        if (newestOnTop === void 0) { newestOnTop = true; }
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var  /**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
OverlayContainer = /** @class */ (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    /**
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    Overlay.prototype.getPaneElement = /**
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    function (positionClass, overlayContainer) {
        if (positionClass === void 0) { positionClass = ''; }
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    function (positionClass, overlayContainer) {
        var /** @type {?} */ pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    Overlay.prototype._createOverlayRef = /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    Overlay.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    return Overlay;
}());
/**
 * Providers for Overlay and its related injectables.
 */
var /** @type {?} */ OVERLAY_PROVIDERS = [
    Overlay,
    OverlayContainer,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to a toast opened via the Toastr service.
 * @template T
 */
var  /**
 * Reference to a toast opened via the Toastr service.
 * @template T
 */
ToastRef = /** @class */ (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the toast has finished closing.
         */
        this._afterClosed = new Subject();
        /**
         * triggered when toast is activated
         */
        this._activate = new Subject();
        /**
         * notifies the toast that it should close before the timeout
         */
        this._manualClose = new Subject();
        /**
         * notifies the toast that it should reset the timeouts
         */
        this._resetTimeout = new Subject();
    }
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClose = /**
     * @return {?}
     */
    function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClosed = /**
     * @return {?}
     */
    function () {
        return this._manualClose.asObservable();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.timeoutReset = /**
     * @return {?}
     */
    function () {
        return this._resetTimeout.asObservable();
    };
    /**
     * Close the toast.
     */
    /**
     * Close the toast.
     * @return {?}
     */
    ToastRef.prototype.close = /**
     * Close the toast.
     * @return {?}
     */
    function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    ToastRef.prototype.afterClosed = /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.isInactive = /**
     * @return {?}
     */
    function () {
        return this._activate.isStopped;
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.activate = /**
     * @return {?}
     */
    function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    ToastRef.prototype.afterActivate = /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    function () {
        return this._activate.asObservable();
    };
    /** Reset the toast timouts */
    /**
     * Reset the toast timouts
     * @return {?}
     */
    ToastRef.prototype.resetTimeout = /**
     * Reset the toast timouts
     * @return {?}
     */
    function () {
        this._resetTimeout.next();
    };
    return ToastRef;
}());
/**
 * Custom injector type specifically for instantiating components with a toast.
 */
var  /**
 * Custom injector type specifically for instantiating components with a toast.
 */
ToastInjector = /** @class */ (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ToastInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TOAST_CONFIG = new InjectionToken('ToastConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastrService = /** @class */ (function () {
    function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        var /** @type {?} */ defaultConfig = new token.defaults();
        this.toastrConfig = __assign({}, defaultConfig, token.config);
        this.toastrConfig.iconClasses = __assign({}, defaultConfig.iconClasses, token.config.iconClasses);
    }
    /** show toast */
    /**
     * show toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    ToastrService.prototype.show = /**
     * show toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    function (message, title, override, type) {
        if (override === void 0) { override = {}; }
        if (type === void 0) { type = ''; }
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show successful toast */
    /**
     * show successful toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.success = /**
     * show successful toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    /**
     * show error toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.error = /**
     * show error toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    /**
     * show info toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.info = /**
     * show info toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    /**
     * show warning toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.warning = /**
     * show warning toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    ToastrService.prototype.clear = /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    function (toastId) {
        try {
            // Call every toastRef manualClose function
            for (var _a = __values(this.toasts), _b = _a.next(); !_b.done; _b = _a.next()) {
                var toast = _b.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * Remove and destroy a single toast by id
     */
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    ToastrService.prototype.remove = /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        var /** @type {?} */ found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive < this.toastrConfig.maxOpened &&
            this.toasts[this.currentlyActive]) {
            var /** @type {?} */ p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @param {?} resetOnDuplicate
     * @return {?}
     */
    ToastrService.prototype.isDuplicate = /**
     * Determines if toast message is already shown
     * @param {?} message
     * @param {?} resetOnDuplicate
     * @return {?}
     */
    function (message, resetOnDuplicate) {
        for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                if (resetOnDuplicate &&
                    this.toasts[i].toastRef.componentInstance.resetTimeout) {
                    console.log(resetOnDuplicate);
                    this.toasts[i].toastRef.resetTimeout();
                }
                return true;
            }
        }
        return false;
    };
    /**
     * create a clone of global config and apply individual settings
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.applyConfig = /**
     * create a clone of global config and apply individual settings
     * @param {?=} override
     * @return {?}
     */
    function (override) {
        if (override === void 0) { override = {}; }
        return __assign({}, this.toastrConfig, override);
    };
    /**
     * Find toast object by id
     * @param {?} toastId
     * @return {?}
     */
    ToastrService.prototype._findToast = /**
     * Find toast object by id
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Determines the need to run inside angular's zone then builds the toast
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastrService.prototype._preBuildNotification = /**
     * Determines the need to run inside angular's zone then builds the toast
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    function (toastType, message, title, config) {
        var _this = this;
        if (config.onActivateTick) {
            return this.ngZone.run(function () {
                return _this._buildNotification(toastType, message, title, config);
            });
        }
        return this._buildNotification(toastType, message, title, config);
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastrService.prototype._buildNotification = /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    function (toastType, message, title, config) {
        var _this = this;
        if (!config.toastComponent) {
            throw new Error('toastComponent required');
        }
        // max opened and auto dismiss = true
        if (message &&
            this.toastrConfig.preventDuplicates &&
            this.isDuplicate(message, this.toastrConfig.resetTimeoutOnDuplicate)) {
            return null;
        }
        this.previousToastMessage = message;
        var /** @type {?} */ keepInactive = false;
        if (this.toastrConfig.maxOpened &&
            this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
            }
        }
        var /** @type {?} */ overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var /** @type {?} */ sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        var /** @type {?} */ toastRef = new ToastRef(overlayRef);
        var /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        var /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
        var /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
        var /** @type {?} */ portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        toastRef.componentInstance = (/** @type {?} */ (portal))._component;
        var /** @type {?} */ ins = {
            toastId: this.index,
            message: message || '',
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal: portal
        };
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastrService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
        { type: Overlay },
        { type: Injector },
        { type: DomSanitizer },
        { type: NgZone }
    ]; };
    return ToastrService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Toast = /** @class */ (function () {
    function Toast(toastrService, toastPackage, ngZone) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = {
            value: 'inactive',
            params: {
                easeTime: this.toastPackage.config.easeTime,
                easing: 'ease-in'
            }
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this.resetTimeout();
        });
    }
    /**
     * @return {?}
     */
    Toast.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    Toast.prototype.activateToast = /**
     * activates toast and sets timeout
     * @return {?}
     */
    function () {
        var _this = this;
        this.state = __assign({}, this.state, { value: 'active' });
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.outsideTimeout(function () { return _this.remove(); }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.outsideInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
    };
    /**
     * updates progress bar width
     */
    /**
     * updates progress bar width
     * @return {?}
     */
    Toast.prototype.updateProgress = /**
     * updates progress bar width
     * @return {?}
     */
    function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var /** @type {?} */ now = new Date().getTime();
        var /** @type {?} */ remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    /**
     * @return {?}
     */
    Toast.prototype.resetTimeout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('test');
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.outsideTimeout(function () { return _this.remove(); }, this.originalTimeout);
        this.options.timeOut = this.originalTimeout;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    Toast.prototype.remove = /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = __assign({}, this.state, { value: 'removed' });
        this.outsideTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); }, +this.toastPackage.config.easeTime);
    };
    /**
     * @return {?}
     */
    Toast.prototype.tapToast = /**
     * @return {?}
     */
    function () {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    Toast.prototype.stickAround = /**
     * @return {?}
     */
    function () {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    Toast.prototype.delayedHideToast = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state.value === 'removed') {
            return;
        }
        this.outsideTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    Toast.prototype.outsideTimeout = /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
                return (_this.timeout = setTimeout(function () { return _this.runInsideAngular(func); }, timeout));
            });
        }
        else {
            this.timeout = setTimeout(function () { return func(); }, timeout);
        }
    };
    /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    Toast.prototype.outsideInterval = /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
                return (_this.intervalId = setInterval(function () { return _this.runInsideAngular(func); }, timeout));
            });
        }
        else {
            this.intervalId = setInterval(function () { return func(); }, timeout);
        }
    };
    /**
     * @param {?} func
     * @return {?}
     */
    Toast.prototype.runInsideAngular = /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        if (this.ngZone) {
            this.ngZone.run(function () { return func(); });
        }
        else {
            func();
        }
    };
    Toast.decorators = [
        { type: Component, args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                    animations: [
                        trigger('flyInOut', [
                            state('inactive', style({
                                display: 'none',
                                opacity: 0
                            })),
                            state('active', style({})),
                            state('removed', style({ opacity: 0 })),
                            transition('inactive => active', animate('{{ easeTime }}ms {{ easing }}')),
                            transition('active => removed', animate('{{ easeTime }}ms {{ easing }}'))
                        ])
                    ],
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    Toast.ctorParameters = function () { return [
        { type: ToastrService },
        { type: ToastPackage },
        { type: NgZone }
    ]; };
    Toast.propDecorators = {
        toastClasses: [{ type: HostBinding, args: ['class',] }],
        state: [{ type: HostBinding, args: ['@flyInOut',] }],
        tapToast: [{ type: HostListener, args: ['click',] }],
        stickAround: [{ type: HostListener, args: ['mouseenter',] }],
        delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return Toast;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DefaultGlobalConfig = /** @class */ (function () {
    function DefaultGlobalConfig() {
        // Global
        this.maxOpened = 0;
        this.autoDismiss = false;
        this.newestOnTop = true;
        this.preventDuplicates = false;
        this.resetTimeoutOnDuplicate = false;
        this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        // Individual
        this.toastComponent = Toast;
        this.closeButton = false;
        this.timeOut = 5000;
        this.extendedTimeOut = 1000;
        this.enableHtml = false;
        this.progressBar = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        this.easing = 'ease-in';
        this.easeTime = 300;
        this.tapToDismiss = true;
        this.onActivateTick = false;
        this.progressAnimation = 'decreasing';
    }
    return DefaultGlobalConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastrModule = /** @class */ (function () {
    function ToastrModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ToastrModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: { config: config, defaults: DefaultGlobalConfig } },
                OverlayContainer,
                Overlay,
                ToastrService,
            ],
        };
    };
    ToastrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Toast],
                    declarations: [Toast],
                    entryComponents: [Toast],
                },] }
    ];
    /** @nocollapse */
    ToastrModule.ctorParameters = function () { return [
        { type: ToastrModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return ToastrModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastNoAnimation = /** @class */ (function () {
    function ToastNoAnimation(toastrService, toastPackage, appRef) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this.resetTimeout();
        });
    }
    Object.defineProperty(ToastNoAnimation.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.state === 'inactive') {
                return 'none';
            }
            return 'inherit';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    ToastNoAnimation.prototype.activateToast = /**
     * activates toast and sets timeout
     * @return {?}
     */
    function () {
        var _this = this;
        this.state = 'active';
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    /**
     * updates progress bar width
     * @return {?}
     */
    ToastNoAnimation.prototype.updateProgress = /**
     * updates progress bar width
     * @return {?}
     */
    function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var /** @type {?} */ now = new Date().getTime();
        var /** @type {?} */ remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.resetTimeout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('test');
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(function () { return _this.remove(); }, this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    ToastNoAnimation.prototype.remove = /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastrService.remove(_this.toastPackage.toastId);
        });
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.tapToast = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.stickAround = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.delayedHideToast = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    ToastNoAnimation.decorators = [
        { type: Component, args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    ToastNoAnimation.ctorParameters = function () { return [
        { type: ToastrService },
        { type: ToastPackage },
        { type: ApplicationRef }
    ]; };
    ToastNoAnimation.propDecorators = {
        toastClasses: [{ type: HostBinding, args: ['class',] }],
        displayStyle: [{ type: HostBinding, args: ['style.display',] }],
        tapToast: [{ type: HostListener, args: ['click',] }],
        stickAround: [{ type: HostListener, args: ['mouseenter',] }],
        delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return ToastNoAnimation;
}());
var ToastNoAnimationModule = /** @class */ (function () {
    function ToastNoAnimationModule() {
    }
    ToastNoAnimationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ToastNoAnimation],
                    exports: [ToastNoAnimation],
                    entryComponents: [ToastNoAnimation]
                },] }
    ];
    return ToastNoAnimationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ToastContainerDirective, ToastContainerModule, Toast, ToastrService, ToastPackage, DefaultGlobalConfig, ToastrModule, ToastRef, ToastInjector, TOAST_CONFIG, ToastNoAnimation, ToastNoAnimationModule, ComponentPortal, BasePortalHost, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0ci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHItY29uZmlnLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3BvcnRhbC9wb3J0YWwudHMiLCJuZzovL25neC10b2FzdHIvcG9ydGFsL2RvbS1wb3J0YWwtaG9zdC50cyIsIm5nOi8vbmd4LXRvYXN0ci9vdmVybGF5L292ZXJsYXktcmVmLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXIudHMiLCJuZzovL25neC10b2FzdHIvb3ZlcmxheS9vdmVybGF5LnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC1pbmplY3Rvci50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QtdG9rZW4udHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0ci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC5jb21wb25lbnQudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL2RlZmF1bHQtY29uZmlnLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHIubW9kdWxlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC1ub2FuaW1hdGlvbi5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b2FzdENvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3RvYXN0Q29udGFpbmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cbiAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogZGlzYWJsZSBib3RoIHRpbWVPdXQgYW5kIGV4dGVuZGVkVGltZU91dFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZVRpbWVPdXQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0b2FzdCB0aW1lIHRvIGxpdmUgaW4gbWlsbGlzZWNvbmRzXG4gICAqIGRlZmF1bHQ6IDUwMDBcbiAgICovXG4gIHRpbWVPdXQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRvYXN0IHNob3cgY2xvc2UgYnV0dG9uXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBjbG9zZUJ1dHRvbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRpbWUgdG8gY2xvc2UgYWZ0ZXIgYSB1c2VyIGhvdmVycyBvdmVyIHRvYXN0XG4gICAqIGRlZmF1bHQ6IDEwMDBcbiAgICovXG4gIGV4dGVuZGVkVGltZU91dDogbnVtYmVyO1xuICAvKipcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByb2dyZXNzQmFyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBjaGFuZ2VzIHRvYXN0IHByb2dyZXNzIGJhciBhbmltYXRpb25cbiAgICogZGVmYXVsdDogZGVjcmVhc2luZ1xuICAgKi9cbiAgcHJvZ3Jlc3NBbmltYXRpb24/OiAnaW5jcmVhc2luZycgfCAnZGVjcmVhc2luZyc7XG4gIC8qKlxuICAgKiByZW5kZXIgaHRtbCBpbiB0b2FzdCBtZXNzYWdlIChwb3NzaWJseSB1bnNhZmUpXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBlbmFibGVIdG1sOiBib29sZWFuO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbXBvbmVudFxuICAgKiBkZWZhdWx0OiB0b2FzdFxuICAgKi9cbiAgdG9hc3RDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbnRhaW5lclxuICAgKiBkZWZhdWx0OiB0b2FzdC10b3AtcmlnaHRcbiAgICovXG4gIHBvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgdGl0bGVDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IG1lc3NhZ2VcbiAgICogZGVmYXVsdDogdG9hc3QtbWVzc2FnZVxuICAgKi9cbiAgbWVzc2FnZUNsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbmltYXRpb24gZWFzaW5nIG9uIHRvYXN0XG4gICAqIGRlZmF1bHQ6IGVhc2UtaW5cbiAgICovXG4gIGVhc2luZzogc3RyaW5nO1xuICAvKipcbiAgICogYW5pbWF0aW9uIGVhc2UgdGltZSBvbiB0b2FzdFxuICAgKiBkZWZhdWx0OiAzMDBcbiAgICovXG4gIGVhc2VUaW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiBjbGlja2luZyBvbiB0b2FzdCBkaXNtaXNzZXMgaXRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgdGFwVG9EaXNtaXNzOiBib29sZWFuO1xuICAvKipcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cbiAgICogZGVmYXVsdDogVG9hc3RcbiAgICovXG4gIHRvYXN0Q29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG4gIC8qKlxuICAgKiBIZWxwcyBzaG93IHRvYXN0IGZyb20gYSB3ZWJzb2NrZXQgb3IgZnJvbSBldmVudCBvdXRzaWRlIEFuZ3VsYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIG9uQWN0aXZhdGVUaWNrOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0ckljb25DbGFzc2VzIHtcbiAgZXJyb3I6IHN0cmluZztcbiAgaW5mbzogc3RyaW5nO1xuICBzdWNjZXNzOiBzdHJpbmc7XG4gIHdhcm5pbmc6IHN0cmluZztcbn1cblxuLyoqXG4gKiBHbG9iYWwgVG9hc3QgY29uZmlndXJhdGlvblxuICogSW5jbHVkZXMgYWxsIEluZGl2aWR1YWxDb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcbiAgICogWmVybyBpcyB1bmxpbWl0ZWRcbiAgICogZGVmYXVsdDogMFxuICAgKi9cbiAgbWF4T3BlbmVkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW47XG4gIGljb25DbGFzc2VzOiBQYXJ0aWFsPFRvYXN0ckljb25DbGFzc2VzPjtcbiAgLyoqXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgbmV3ZXN0T25Ub3A6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBibG9jayBkdXBsaWNhdGUgbWVzc2FnZXNcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZXNldCB0b2FzdCB0aW1lb3V0IHdoZW4gdGhlcmUncyBhIGR1cGxpY2F0ZSAocHJldmVudER1cGxpY2F0ZXMgbmVlZHMgdG8gYmUgc2V0IHRvIHRydWUpXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICByZXNldFRpbWVvdXRPbkR1cGxpY2F0ZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBFdmVyeXRoaW5nIGEgdG9hc3QgbmVlZHMgdG8gbGF1bmNoXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdFBhY2thZ2Uge1xuICBwcml2YXRlIF9vblRhcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfb25BY3Rpb24gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0SWQ6IG51bWJlcixcbiAgICBwdWJsaWMgY29uZmlnOiBJbmRpdmlkdWFsQ29uZmlnLFxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgcHVibGljIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b2FzdFJlZjogVG9hc3RSZWY8YW55PlxuICApIHtcbiAgICB0aGlzLnRvYXN0UmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLl9vblRhcC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpcmVkIG9uIGNsaWNrICovXG4gIHRyaWdnZXJUYXAoKSB7XG4gICAgdGhpcy5fb25UYXAubmV4dCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZy50YXBUb0Rpc21pc3MpIHtcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25UYXAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25UYXAuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogYXZhaWxhYmxlIGZvciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XG4gICAgdGhpcy5fb25BY3Rpb24ubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgb25BY3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25BY3Rpb24uYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cblxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHktaW50ZXJmYWNlICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbFRvYXN0ckNvbmZpZyBleHRlbmRzIEdsb2JhbENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHt9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdG9yLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGU8VD4ge1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVDtcbn1cblxuXG4vKipcbiAqIEEgYENvbXBvbmVudFBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCBpbnN0YW50aWF0ZXMgc29tZSBDb21wb25lbnQgdXBvbiBhdHRhY2htZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsPFQ+IHtcbiAgcHJpdmF0ZSBfYXR0YWNoZWRIb3N0PzogQmFzZVBvcnRhbEhvc3Q7XG4gIC8qKiBUaGUgdHlwZSBvZiB0aGUgY29tcG9uZW50IHRoYXQgd2lsbCBiZSBpbnN0YW50aWF0ZWQgZm9yIGF0dGFjaG1lbnQuICovXG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcblxuICAvKipcbiAgICogW09wdGlvbmFsXSBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXG4gICAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gd2hlcmUgdGhlIGNvbXBvbmVudCAqcmVuZGVycyosIHdoaWNoIGlzIGRldGVybWluZWQgYnkgdGhlIFBvcnRhbEhvc3QuXG4gICAqIFRoZSBvcmlnaW4gbmVjZXNzYXJ5IHdoZW4gdGhlIGhvc3QgaXMgb3V0c2lkZSBvZiB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogSW5qZWN0b3IgdXNlZCBmb3IgdGhlIGluc3RhbnRpYXRpb24gb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgaW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGlzIHBvcnRhbCB0byBhIGhvc3QuICovXG4gIGF0dGFjaChob3N0OiBCYXNlUG9ydGFsSG9zdCwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICAgIHJldHVybiBob3N0LmF0dGFjaCh0aGlzLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICAvKiogRGV0YWNoIHRoaXMgcG9ydGFsIGZyb20gaXRzIGhvc3QgKi9cbiAgZGV0YWNoKCkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG4gICAgaWYgKGhvc3QpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBob3N0LmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcG9ydGFsIGlzIGF0dGFjaGVkIHRvIGEgaG9zdC4gKi9cbiAgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkSG9zdCAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFBvcnRhbEhvc3QgcmVmZXJlbmNlIHdpdGhvdXQgcGVyZm9ybWluZyBgYXR0YWNoKClgLiBUaGlzIGlzIHVzZWQgZGlyZWN0bHkgYnlcbiAgICogdGhlIFBvcnRhbEhvc3Qgd2hlbiBpdCBpcyBwZXJmb3JtaW5nIGFuIGBhdHRhY2goKWAgb3IgYGRldGFjaCgpYC5cbiAgICovXG4gIHNldEF0dGFjaGVkSG9zdChob3N0PzogQmFzZVBvcnRhbEhvc3QpIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cbi8qKlxuICogUGFydGlhbCBpbXBsZW1lbnRhdGlvbiBvZiBQb3J0YWxIb3N0IHRoYXQgb25seSBkZWFscyB3aXRoIGF0dGFjaGluZyBhXG4gKiBDb21wb25lbnRQb3J0YWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQb3J0YWxIb3N0IHtcbiAgLyoqIFRoZSBwb3J0YWwgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBob3N0LiAqL1xuICBwcml2YXRlIF9hdHRhY2hlZFBvcnRhbD86IENvbXBvbmVudFBvcnRhbDxhbnk+O1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZUZuPzogKCkgPT4gdm9pZDtcblxuICBhdHRhY2gocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICBhYnN0cmFjdCBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4sIG5ld2VzdE9uVG9wOiBib29sZWFuKTogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fYXR0YWNoZWRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9kaXNwb3NlRm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbigpO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnLi9wb3J0YWwnO1xuXG4vKipcbiAqIEEgUG9ydGFsSG9zdCBmb3IgYXR0YWNoaW5nIHBvcnRhbHMgdG8gYW4gYXJiaXRyYXJ5IERPTSBlbGVtZW50IG91dHNpZGUgb2YgdGhlIEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBwYXJ0IG9mIHRoZSBwb3J0YWwgY29yZSB0aGF0IGRpcmVjdGx5IHRvdWNoZXMgdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvbVBvcnRhbEhvc3QgZXh0ZW5kcyBCYXNlUG9ydGFsSG9zdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2hvc3REb21FbGVtZW50OiBFbGVtZW50LFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBnaXZlbiBDb21wb25lbnRQb3J0YWwgdG8gRE9NIGVsZW1lbnQgdXNpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5cbiAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWRcbiAgICovXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPixcbiAgICBuZXdlc3RPblRvcDogYm9vbGVhbixcbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgcG9ydGFsLmNvbXBvbmVudCxcbiAgICApO1xuICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcblxuICAgIC8vIElmIHRoZSBwb3J0YWwgc3BlY2lmaWVzIGEgVmlld0NvbnRhaW5lclJlZiwgd2Ugd2lsbCB1c2UgdGhhdCBhcyB0aGUgYXR0YWNobWVudCBwb2ludFxuICAgIC8vIGZvciB0aGUgY29tcG9uZW50IChpbiB0ZXJtcyBvZiBBbmd1bGFyJ3MgY29tcG9uZW50IHRyZWUsIG5vdCByZW5kZXJpbmcpLlxuICAgIC8vIFdoZW4gdGhlIFZpZXdDb250YWluZXJSZWYgaXMgbWlzc2luZywgd2UgdXNlIHRoZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRpcmVjdGx5XG4gICAgLy8gYW5kIHRoZW4gbWFudWFsbHkgYXR0YWNoIHRoZSBDaGFuZ2VEZXRlY3RvciBmb3IgdGhhdCBjb21wb25lbnQgdG8gdGhlIGFwcGxpY2F0aW9uICh3aGljaFxuICAgIC8vIGhhcHBlbnMgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIGEgVmlld0NvbnRhaW5lcikuXG4gICAgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUocG9ydGFsLmluamVjdG9yKTtcblxuICAgIC8vIFdoZW4gY3JlYXRpbmcgYSBjb21wb25lbnQgb3V0c2lkZSBvZiBhIFZpZXdDb250YWluZXIsIHdlIG5lZWQgdG8gbWFudWFsbHkgcmVnaXN0ZXJcbiAgICAvLyBpdHMgQ2hhbmdlRGV0ZWN0b3Igd2l0aCB0aGUgYXBwbGljYXRpb24uIFRoaXMgQVBJIGlzIHVuZm9ydHVuYXRlbHkgbm90IHlldCBwdWJsaXNoZWRcbiAgICAvLyBpbiBBbmd1bGFyIGNvcmUuIFRoZSBjaGFuZ2UgZGV0ZWN0b3IgbXVzdCBhbHNvIGJlIGRlcmVnaXN0ZXJlZCB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAvLyBpcyBkZXN0cm95ZWQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIHRoaXMuc2V0RGlzcG9zZUZuKCgpID0+IHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXQgdGhpcyBwb2ludCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbnRpYXRlZCwgc28gd2UgbW92ZSBpdCB0byB0aGUgbG9jYXRpb24gaW4gdGhlIERPTVxuICAgIC8vIHdoZXJlIHdlIHdhbnQgaXQgdG8gYmUgcmVuZGVyZWQuXG4gICAgaWYgKG5ld2VzdE9uVG9wKSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHRoaXMuX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZiksXG4gICAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50LmZpcnN0Q2hpbGQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy5fZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSByb290IEhUTUxFbGVtZW50IGZvciBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50LiAqL1xuICBwcml2YXRlIF9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvdmVybGF5IHRoYXQgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBPdmVybGF5IHNlcnZpY2UuXG4gKiBVc2VkIHRvIG1hbmlwdWxhdGUgb3IgZGlzcG9zZSBvZiBzYWlkIG92ZXJsYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5UmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9ydGFsSG9zdDogQmFzZVBvcnRhbEhvc3QpIHt9XG5cbiAgYXR0YWNoKFxuICAgIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4sXG4gICAgbmV3ZXN0T25Ub3A6IGJvb2xlYW4gPSB0cnVlLFxuICApOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbEhvc3QuYXR0YWNoKHBvcnRhbCwgbmV3ZXN0T25Ub3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIGFuIG92ZXJsYXkgZnJvbSBhIHBvcnRhbC5cbiAgICogQHJldHVybnMgUmVzb2x2ZXMgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBkZXRhY2hlZC5cbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5kZXRhY2goKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGUgT3ZlcmxheUNvbnRhaW5lciBpcyB0aGUgY29udGFpbmVyIGluIHdoaWNoIGFsbCBvdmVybGF5cyB3aWxsIGxvYWQuXG4gKiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgaW4gdGhlIHJvb3QgY29tcG9uZW50IHRvIGVuc3VyZSBpdCBpcyBwcm9wZXJseSBzaGFyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIG92ZXJsYXkgY29udGFpbmVyIGVsZW1lbnQuICBJdCB3aWxsIGxhemlseVxuICAgKiBjcmVhdGUgdGhlIGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgIGl0IGlzIGNhbGxlZCB0byBmYWNpbGl0YXRlIHVzaW5nXG4gICAqIHRoZSBjb250YWluZXIgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzLlxuICAgKiBAcmV0dXJucyB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGdldENvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyRWxlbWVudCkgeyB0aGlzLl9jcmVhdGVDb250YWluZXIoKTsgfVxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gICAqIHdpdGggdGhlICdjZGstb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21Qb3J0YWxIb3N0IH0gZnJvbSAnLi4vcG9ydGFsL2RvbS1wb3J0YWwtaG9zdCc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbi8qKlxuICogU2VydmljZSB0byBjcmVhdGUgT3ZlcmxheXMuIE92ZXJsYXlzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBwaWVjZXMgb2YgZmxvYXRpbmcgVUksIG1lYW50IHRvIGJlXG4gKiB1c2VkIGFzIGEgbG93LWxldmVsIGJ1aWxkaW5nIGJ1aWxkaW5nIGJsb2NrIGZvciBvdGhlciBjb21wb25lbnRzLiBEaWFsb2dzLCB0b29sdGlwcywgbWVudXMsXG4gKiBzZWxlY3RzLCBldGMuIGNhbiBhbGwgYmUgYnVpbHQgdXNpbmcgb3ZlcmxheXMuIFRoZSBzZXJ2aWNlIHNob3VsZCBwcmltYXJpbHkgYmUgdXNlZCBieSBhdXRob3JzXG4gKiBvZiByZS11c2FibGUgY29tcG9uZW50cyByYXRoZXIgdGhhbiBkZXZlbG9wZXJzIGJ1aWxkaW5nIGVuZC11c2VyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBBbiBvdmVybGF5ICppcyogYSBQb3J0YWxIb3N0LCBzbyBhbnkga2luZCBvZiBQb3J0YWwgY2FuIGJlIGxvYWRlZCBpbnRvIG9uZS5cbiAqL1xuIEBJbmplY3RhYmxlKClcbiAgZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuICAgIC8vIE5hbWVzcGFjZSBwYW5lcyBieSBvdmVybGF5IGNvbnRhaW5lclxuICAgIHByaXZhdGUgX3BhbmVFbGVtZW50czogTWFwPFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlLCB7c3RyaW5nPzogSFRNTEVsZW1lbnR9PiA9IG5ldyBNYXAoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3ZlcmxheS5cbiAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICovXG4gIGNyZWF0ZShwb3NpdGlvbkNsYXNzPzogc3RyaW5nLCBvdmVybGF5Q29udGFpbmVyPzogVG9hc3RDb250YWluZXJEaXJlY3RpdmUpOiBPdmVybGF5UmVmIHtcbiAgICAvLyBnZXQgZXhpc3RpbmcgcGFuZSBpZiBwb3NzaWJsZVxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKHRoaXMuZ2V0UGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lcikpO1xuICB9XG5cbiAgZ2V0UGFuZUVsZW1lbnQocG9zaXRpb25DbGFzczogc3RyaW5nID0gJycsIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIXRoaXMuX3BhbmVFbGVtZW50cy5nZXQob3ZlcmxheUNvbnRhaW5lcikpIHtcbiAgICAgIHRoaXMuX3BhbmVFbGVtZW50cy5zZXQob3ZlcmxheUNvbnRhaW5lciwge30pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKVtwb3NpdGlvbkNsYXNzXSkge1xuICAgICAgdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKVtwb3NpdGlvbkNsYXNzXSA9IHRoaXMuX2NyZWF0ZVBhbmVFbGVtZW50KHBvc2l0aW9uQ2xhc3MsIG92ZXJsYXlDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIERPTSBlbGVtZW50IGZvciBhbiBvdmVybGF5IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICogQHJldHVybnMgTmV3bHktY3JlYXRlZCBwYW5lIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZVBhbmVFbGVtZW50KHBvc2l0aW9uQ2xhc3M6IHN0cmluZywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYW5lLmlkID0gJ3RvYXN0LWNvbnRhaW5lcic7XG4gICAgcGFuZS5jbGFzc0xpc3QuYWRkKHBvc2l0aW9uQ2xhc3MpO1xuICAgIHBhbmUuY2xhc3NMaXN0LmFkZCgndG9hc3QtY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIW92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmFwcGVuZENoaWxkKHBhbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5hcHBlbmRDaGlsZChwYW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRG9tUG9ydGFsSG9zdCBpbnRvIHdoaWNoIHRoZSBvdmVybGF5IGNvbnRlbnQgY2FuIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBob3N0LlxuICAgKiBAcmV0dXJucyBBIHBvcnRhbCBob3N0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3J0YWxIb3N0KHBhbmU6IEhUTUxFbGVtZW50KTogRG9tUG9ydGFsSG9zdCB7XG4gICAgcmV0dXJuIG5ldyBEb21Qb3J0YWxIb3N0KHBhbmUsIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIE92ZXJsYXlSZWYgZm9yIGFuIG92ZXJsYXkgaW4gdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0gcGFuZSBET00gZWxlbWVudCBmb3IgdGhlIG92ZXJsYXlcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYocGFuZTogSFRNTEVsZW1lbnQpOiBPdmVybGF5UmVmIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlSZWYodGhpcy5fY3JlYXRlUG9ydGFsSG9zdChwYW5lKSk7XG4gIH1cbn1cblxuXG4vKiogUHJvdmlkZXJzIGZvciBPdmVybGF5IGFuZCBpdHMgcmVsYXRlZCBpbmplY3RhYmxlcy4gKi9cbmV4cG9ydCBjb25zdCBPVkVSTEFZX1BST1ZJREVSUyA9IFtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbnRhaW5lcixcbl07XG4iLCJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgVG9hc3RQYWNrYWdlIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYSB0b2FzdCBvcGVuZWQgdmlhIHRoZSBUb2FzdHIgc2VydmljZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UmVmPFQ+IHtcbiAgLyoqIFRoZSBpbnN0YW5jZSBvZiBjb21wb25lbnQgb3BlbmVkIGludG8gdGhlIHRvYXN0LiAqL1xuICBjb21wb25lbnRJbnN0YW5jZTogVDtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHRvYXN0IGhhcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBwcml2YXRlIF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2YXRlZCAqL1xuICBwcml2YXRlIF9hY3RpdmF0ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCBjbG9zZSBiZWZvcmUgdGhlIHRpbWVvdXQgKi9cbiAgcHJpdmF0ZSBfbWFudWFsQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8qKiBub3RpZmllcyB0aGUgdG9hc3QgdGhhdCBpdCBzaG91bGQgcmVzZXQgdGhlIHRpbWVvdXRzICovXG4gIHByaXZhdGUgX3Jlc2V0VGltZW91dCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7fVxuXG4gIG1hbnVhbENsb3NlKCkge1xuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbWFudWFsQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbnVhbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdGltZW91dFJlc2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2V0VGltZW91dC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgdG9hc3QuXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2FjdGl2YXRlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fcmVzZXRUaW1lb3V0LmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgdG9hc3QgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpc0luYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZS5pc1N0b3BwZWQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLl9hY3RpdmF0ZS5uZXh0KCk7XG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSB0b2FzdCBoYXMgc3RhcnRlZCBvcGVuaW5nLiAqL1xuICBhZnRlckFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIFJlc2V0IHRoZSB0b2FzdCB0aW1vdXRzICovXG4gIHJlc2V0VGltZW91dCgpIHtcbiAgICB0aGlzLl9yZXNldFRpbWVvdXQubmV4dCgpO1xuICB9XG59XG5cbi8qKiBDdXN0b20gaW5qZWN0b3IgdHlwZSBzcGVjaWZpY2FsbHkgZm9yIGluc3RhbnRpYXRpbmcgY29tcG9uZW50cyB3aXRoIGEgdG9hc3QuICovXG5leHBvcnQgY2xhc3MgVG9hc3RJbmplY3RvciBpbXBsZW1lbnRzIEluamVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsXG4gICAgcHJpdmF0ZSBfcGFyZW50SW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgaWYgKHRva2VuID09PSBUb2FzdFBhY2thZ2UgJiYgdGhpcy5fdG9hc3RQYWNrYWdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdG9hc3RQYWNrYWdlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW5qZWN0b3IuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFRva2VuIHtcbiAgY29uZmlnOiBHbG9iYWxDb25maWc7XG4gIGRlZmF1bHRzOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBUT0FTVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VG9hc3RUb2tlbj4oJ1RvYXN0Q29uZmlnJyk7XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE5nWm9uZSxcbiAgU2VjdXJpdHlDb250ZXh0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcbmltcG9ydCB7IFRvYXN0SW5qZWN0b3IsIFRvYXN0UmVmIH0gZnJvbSAnLi90b2FzdC1pbmplY3Rvcic7XG5pbXBvcnQgeyBUb2FzdFRva2VuLCBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LXRva2VuJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVRvYXN0PEM+IHtcbiAgLyoqIFlvdXIgVG9hc3QgSUQuIFVzZSB0aGlzIHRvIGNsb3NlIGl0IGluZGl2aWR1YWxseSAqL1xuICB0b2FzdElkOiBudW1iZXI7XG4gIC8qKiB0aGUgbWVzc2FnZSBvZiB5b3VyIHRvYXN0LiBTdG9yZWQgdG8gcHJldmVudCBkdXBsaWNhdGVzICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgLyoqIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgc2VlIHBvcnRhbC50cyAqL1xuICBwb3J0YWw6IENvbXBvbmVudFJlZjxDPjtcbiAgLyoqIGEgcmVmZXJlbmNlIHRvIHlvdXIgdG9hc3QgKi9cbiAgdG9hc3RSZWY6IFRvYXN0UmVmPEM+O1xuICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgYWN0aXZlICovXG4gIG9uU2hvd246IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGRlc3Ryb3llZCAqL1xuICBvbkhpZGRlbjogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogdHJpZ2dlcmVkIG9uIHRvYXN0IGNsaWNrICovXG4gIG9uVGFwOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiBhdmFpbGFibGUgZm9yIHlvdXIgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xuICBvbkFjdGlvbjogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RyU2VydmljZSB7XG4gIHRvYXN0ckNvbmZpZzogR2xvYmFsQ29uZmlnO1xuICBjdXJyZW50bHlBY3RpdmUgPSAwO1xuICB0b2FzdHM6IEFjdGl2ZVRvYXN0PGFueT5bXSA9IFtdO1xuICBvdmVybGF5Q29udGFpbmVyOiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZTtcbiAgcHJldmlvdXNUb2FzdE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBpbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUT0FTVF9DT05GSUcpIHRva2VuOiBUb2FzdFRva2VuLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBuZXcgdG9rZW4uZGVmYXVsdHMoKTtcbiAgICB0aGlzLnRvYXN0ckNvbmZpZyA9IHsgLi4uZGVmYXVsdENvbmZpZywgLi4udG9rZW4uY29uZmlnIH07XG4gICAgdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMgPSB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLmljb25DbGFzc2VzLFxuICAgICAgLi4udG9rZW4uY29uZmlnLmljb25DbGFzc2VzXG4gICAgfTtcbiAgfVxuICAvKiogc2hvdyB0b2FzdCAqL1xuICBzaG93KFxuICAgIG1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSxcbiAgICB0eXBlID0gJydcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIHN1Y2Nlc3MoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XG4gICkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzIHx8ICcnO1xuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxuICAgICk7XG4gIH1cbiAgLyoqIHNob3cgZXJyb3IgdG9hc3QgKi9cbiAgZXJyb3IoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XG4gICkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcbiAgICApO1xuICB9XG4gIC8qKiBzaG93IGluZm8gdG9hc3QgKi9cbiAgaW5mbyhcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLmluZm8gfHwgJyc7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gIHdhcm5pbmcoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XG4gICkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nIHx8ICcnO1xuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3IgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIGNsZWFyKHRvYXN0SWQ/OiBudW1iZXIpIHtcbiAgICAvLyBDYWxsIGV2ZXJ5IHRvYXN0UmVmIG1hbnVhbENsb3NlIGZ1bmN0aW9uXG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xuICAgICAgaWYgKHRvYXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodG9hc3QudG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICByZW1vdmUodG9hc3RJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgZm91bmQgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3VuZC5hY3RpdmVUb2FzdC50b2FzdFJlZi5jbG9zZSgpO1xuICAgIHRoaXMudG9hc3RzLnNwbGljZShmb3VuZC5pbmRleCwgMSk7XG4gICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSAtIDE7XG4gICAgaWYgKCF0aGlzLnRvYXN0ckNvbmZpZy5tYXhPcGVuZWQgfHwgIXRoaXMudG9hc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA8IHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCAmJlxuICAgICAgdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdXG4gICAgKSB7XG4gICAgICBjb25zdCBwID0gdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdLnRvYXN0UmVmO1xuICAgICAgaWYgKCFwLmlzSW5hY3RpdmUoKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgICAgcC5hY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRvYXN0IG1lc3NhZ2UgaXMgYWxyZWFkeSBzaG93blxuICAgKi9cbiAgaXNEdXBsaWNhdGUobWVzc2FnZTogc3RyaW5nLCByZXNldE9uRHVwbGljYXRlOiBib29sZWFuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLm1lc3NhZ2UgPT09IG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlc2V0T25EdXBsaWNhdGUgJiZcbiAgICAgICAgICB0aGlzLnRvYXN0c1tpXS50b2FzdFJlZi5jb21wb25lbnRJbnN0YW5jZS5yZXNldFRpbWVvdXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzZXRPbkR1cGxpY2F0ZSk7XG4gICAgICAgICAgdGhpcy50b2FzdHNbaV0udG9hc3RSZWYucmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBjcmVhdGUgYSBjbG9uZSBvZiBnbG9iYWwgY29uZmlnIGFuZCBhcHBseSBpbmRpdmlkdWFsIHNldHRpbmdzICovXG4gIHByaXZhdGUgYXBwbHlDb25maWcob3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSk6IEdsb2JhbENvbmZpZyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy50b2FzdHJDb25maWcsIC4uLm92ZXJyaWRlIH07XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2FzdCBvYmplY3QgYnkgaWRcbiAgICovXG4gIHByaXZhdGUgX2ZpbmRUb2FzdChcbiAgICB0b2FzdElkOiBudW1iZXJcbiAgKTogeyBpbmRleDogbnVtYmVyOyBhY3RpdmVUb2FzdDogQWN0aXZlVG9hc3Q8YW55PiB9IHwgbnVsbCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGksIGFjdGl2ZVRvYXN0OiB0aGlzLnRvYXN0c1tpXSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBuZWVkIHRvIHJ1biBpbnNpZGUgYW5ndWxhcidzIHpvbmUgdGhlbiBidWlsZHMgdGhlIHRvYXN0XG4gICAqL1xuICBwcml2YXRlIF9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZ1xuICApOiBBY3RpdmVUb2FzdDxhbnk+IHwgbnVsbCB7XG4gICAgaWYgKGNvbmZpZy5vbkFjdGl2YXRlVGljaykge1xuICAgICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bigoKSA9PlxuICAgICAgICB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0b2FzdFR5cGUsIG1lc3NhZ2UsIHRpdGxlLCBjb25maWcpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odG9hc3RUeXBlLCBtZXNzYWdlLCB0aXRsZSwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxuICAgKiByZXR1cm5zIG51bGwgaWYgdG9hc3QgaXMgZHVwbGljYXRlIGFuZCBwcmV2ZW50RHVwbGljYXRlcyA9PSBUcnVlXG4gICAqL1xuICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZ1xuICApOiBBY3RpdmVUb2FzdDxhbnk+IHwgbnVsbCB7XG4gICAgaWYgKCFjb25maWcudG9hc3RDb21wb25lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndG9hc3RDb21wb25lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgLy8gbWF4IG9wZW5lZCBhbmQgYXV0byBkaXNtaXNzID0gdHJ1ZVxuICAgIGlmIChcbiAgICAgIG1lc3NhZ2UgJiZcbiAgICAgIHRoaXMudG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzICYmXG4gICAgICB0aGlzLmlzRHVwbGljYXRlKG1lc3NhZ2UsIHRoaXMudG9hc3RyQ29uZmlnLnJlc2V0VGltZW91dE9uRHVwbGljYXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNUb2FzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBrZWVwSW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRvYXN0ckNvbmZpZy5tYXhPcGVuZWQgJiZcbiAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID49IHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZFxuICAgICkge1xuICAgICAga2VlcEluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnRvYXN0ckNvbmZpZy5hdXRvRGlzbWlzcykge1xuICAgICAgICB0aGlzLmNsZWFyKHRoaXMudG9hc3RzWzBdLnRvYXN0SWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShcbiAgICAgIGNvbmZpZy5wb3NpdGlvbkNsYXNzLFxuICAgICAgdGhpcy5vdmVybGF5Q29udGFpbmVyXG4gICAgKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCArIDE7XG4gICAgbGV0IHNhbml0aXplZE1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sIHwgdW5kZWZpbmVkIHwgbnVsbCA9IG1lc3NhZ2U7XG4gICAgaWYgKG1lc3NhZ2UgJiYgY29uZmlnLmVuYWJsZUh0bWwpIHtcbiAgICAgIHNhbml0aXplZE1lc3NhZ2UgPSB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbWVzc2FnZSk7XG4gICAgfVxuICAgIGNvbnN0IHRvYXN0UmVmID0gbmV3IFRvYXN0UmVmKG92ZXJsYXlSZWYpO1xuICAgIGNvbnN0IHRvYXN0UGFja2FnZSA9IG5ldyBUb2FzdFBhY2thZ2UoXG4gICAgICB0aGlzLmluZGV4LFxuICAgICAgY29uZmlnLFxuICAgICAgc2FuaXRpemVkTWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdG9hc3RUeXBlLFxuICAgICAgdG9hc3RSZWZcbiAgICApO1xuICAgIGNvbnN0IHRvYXN0SW5qZWN0b3IgPSBuZXcgVG9hc3RJbmplY3Rvcih0b2FzdFBhY2thZ2UsIHRoaXMuX2luamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbmZpZy50b2FzdENvbXBvbmVudCwgdG9hc3RJbmplY3Rvcik7XG4gICAgY29uc3QgcG9ydGFsID0gb3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50LCB0aGlzLnRvYXN0ckNvbmZpZy5uZXdlc3RPblRvcCk7XG4gICAgdG9hc3RSZWYuY29tcG9uZW50SW5zdGFuY2UgPSAoPGFueT5wb3J0YWwpLl9jb21wb25lbnQ7XG4gICAgY29uc3QgaW5zOiBBY3RpdmVUb2FzdDxhbnk+ID0ge1xuICAgICAgdG9hc3RJZDogdGhpcy5pbmRleCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJycsXG4gICAgICB0b2FzdFJlZixcbiAgICAgIG9uU2hvd246IHRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKSxcbiAgICAgIG9uSGlkZGVuOiB0b2FzdFJlZi5hZnRlckNsb3NlZCgpLFxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxuICAgICAgb25BY3Rpb246IHRvYXN0UGFja2FnZS5vbkFjdGlvbigpLFxuICAgICAgcG9ydGFsXG4gICAgfTtcblxuICAgIGlmICgha2VlcEluYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5zLnRvYXN0UmVmLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy50b2FzdHMucHVzaChpbnMpO1xuICAgIHJldHVybiBpbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbdG9hc3QtY29tcG9uZW50XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxidXR0b24gKm5nSWY9XCJvcHRpb25zLmNsb3NlQnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZSgpXCIgY2xhc3M9XCJ0b2FzdC1jbG9zZS1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGRpdiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzXT1cIm9wdGlvbnMudGl0bGVDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIj5cbiAgICB7eyB0aXRsZSB9fVxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbaW5uZXJIVE1MXT1cIm1lc3NhZ2VcIj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmICFvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwibWVzc2FnZVwiPlxuICAgIHt7IG1lc3NhZ2UgfX1cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJvcHRpb25zLnByb2dyZXNzQmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LXByb2dyZXNzXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoICsgJyUnXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmx5SW5PdXQnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2luYWN0aXZlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHt9KSksXG4gICAgICBzdGF0ZSgncmVtb3ZlZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKFxuICAgICAgICAnaW5hY3RpdmUgPT4gYWN0aXZlJyxcbiAgICAgICAgYW5pbWF0ZSgne3sgZWFzZVRpbWUgfX1tcyB7eyBlYXNpbmcgfX0nKVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiByZW1vdmVkJywgYW5pbWF0ZSgne3sgZWFzZVRpbWUgfX1tcyB7eyBlYXNpbmcgfX0nKSlcbiAgICBdKVxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBvcHRpb25zOiBJbmRpdmlkdWFsQ29uZmlnO1xuICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcbiAgLyoqIHdpZHRoIG9mIHByb2dyZXNzIGJhciAqL1xuICB3aWR0aCA9IC0xO1xuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRvYXN0Q2xhc3NlcyA9ICcnO1xuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gIEBIb3N0QmluZGluZygnQGZseUluT3V0JylcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6ICdpbmFjdGl2ZScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBlYXNlVGltZTogdGhpcy50b2FzdFBhY2thZ2UuY29uZmlnLmVhc2VUaW1lLFxuICAgICAgZWFzaW5nOiAnZWFzZS1pbidcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgdGltZW91dDogYW55O1xuICBwcml2YXRlIGludGVydmFsSWQ6IGFueTtcbiAgcHJpdmF0ZSBoaWRlVGltZTogbnVtYmVyO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzdWIyOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2UsXG4gICAgcHVibGljIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLFxuICAgIHByb3RlY3RlZCBuZ1pvbmU/OiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gdG9hc3RQYWNrYWdlLm1lc3NhZ2U7XG4gICAgdGhpcy50aXRsZSA9IHRvYXN0UGFja2FnZS50aXRsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0b2FzdFBhY2thZ2UuY29uZmlnO1xuICAgIHRoaXMub3JpZ2luYWxUaW1lb3V0ID0gdG9hc3RQYWNrYWdlLmNvbmZpZy50aW1lT3V0O1xuICAgIHRoaXMudG9hc3RDbGFzc2VzID0gYCR7dG9hc3RQYWNrYWdlLnRvYXN0VHlwZX0gJHtcbiAgICAgIHRvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc1xuICAgIH1gO1xuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3ViMiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi50aW1lb3V0UmVzZXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMi51bnN1YnNjcmliZSgpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuICAvKipcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcbiAgICovXG4gIGFjdGl2YXRlVG9hc3QoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgdmFsdWU6ICdhY3RpdmUnIH07XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgJiYgdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcbiAgICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcbiAgICovXG4gIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgIGlmICh0aGlzLndpZHRoID09PSAwIHx8IHRoaXMud2lkdGggPT09IDEwMCB8fCAhdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcbiAgICB0aGlzLndpZHRoID0gKHJlbWFpbmluZyAvIHRoaXMub3B0aW9ucy50aW1lT3V0KSAqIDEwMDtcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQW5pbWF0aW9uID09PSAnaW5jcmVhc2luZycpIHtcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA8PSAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPj0gMTAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0VGltZW91dCgpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcblxuICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcmlnaW5hbFRpbWVvdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcmlnaW5hbFRpbWVvdXQ7XG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKHRoaXMub3B0aW9ucy50aW1lT3V0IHx8IDApO1xuICAgIHRoaXMud2lkdGggPSAtMTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICB0aGlzLm91dHNpZGVJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgdmFsdWU6ICdyZW1vdmVkJyB9O1xuICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnRvYXN0clNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpLFxuICAgICAgK3RoaXMudG9hc3RQYWNrYWdlLmNvbmZpZy5lYXNlVGltZVxuICAgICk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0YXBUb2FzdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9hc3RQYWNrYWdlLnRyaWdnZXJUYXAoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHN0aWNrQXJvdW5kKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSAwO1xuICAgIHRoaXMuaGlkZVRpbWUgPSAwO1xuXG4gICAgLy8gZGlzYWJsZSBwcm9ncmVzc0JhclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLndpZHRoID0gMDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgZGVsYXllZEhpZGVUb2FzdCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQgPT09IDAgfHxcbiAgICAgIHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm91dHNpZGVUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dDtcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XG4gICAgdGhpcy53aWR0aCA9IC0xO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG91dHNpZGVUaW1lb3V0KGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICh0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5ydW5JbnNpZGVBbmd1bGFyKGZ1bmMpLFxuICAgICAgICAgICAgdGltZW91dFxuICAgICAgICAgICkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgdGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgb3V0c2lkZUludGVydmFsKGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICh0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICgpID0+IHRoaXMucnVuSW5zaWRlQW5ndWxhcihmdW5jKSxcbiAgICAgICAgICAgIHRpbWVvdXRcbiAgICAgICAgICApKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gZnVuYygpLCB0aW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc2lkZUFuZ3VsYXIoZnVuYzogRnVuY3Rpb24pIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBmdW5jKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0R2xvYmFsQ29uZmlnIGltcGxlbWVudHMgR2xvYmFsQ29uZmlnIHtcbiAgLy8gR2xvYmFsXG4gIG1heE9wZW5lZCA9IDA7XG4gIGF1dG9EaXNtaXNzID0gZmFsc2U7XG4gIG5ld2VzdE9uVG9wID0gdHJ1ZTtcbiAgcHJldmVudER1cGxpY2F0ZXMgPSBmYWxzZTtcbiAgcmVzZXRUaW1lb3V0T25EdXBsaWNhdGUgPSBmYWxzZTtcbiAgaWNvbkNsYXNzZXMgPSB7XG4gICAgZXJyb3I6ICd0b2FzdC1lcnJvcicsXG4gICAgaW5mbzogJ3RvYXN0LWluZm8nLFxuICAgIHN1Y2Nlc3M6ICd0b2FzdC1zdWNjZXNzJyxcbiAgICB3YXJuaW5nOiAndG9hc3Qtd2FybmluZydcbiAgfTtcblxuICAvLyBJbmRpdmlkdWFsXG4gIHRvYXN0Q29tcG9uZW50ID0gVG9hc3Q7XG4gIGNsb3NlQnV0dG9uID0gZmFsc2U7XG4gIGRpc2FibGVUaW1lT3V0OiBmYWxzZTtcbiAgdGltZU91dCA9IDUwMDA7XG4gIGV4dGVuZGVkVGltZU91dCA9IDEwMDA7XG4gIGVuYWJsZUh0bWwgPSBmYWxzZTtcbiAgcHJvZ3Jlc3NCYXIgPSBmYWxzZTtcbiAgdG9hc3RDbGFzcyA9ICd0b2FzdCc7XG4gIHBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdGl0bGVDbGFzcyA9ICd0b2FzdC10aXRsZSc7XG4gIG1lc3NhZ2VDbGFzcyA9ICd0b2FzdC1tZXNzYWdlJztcbiAgZWFzaW5nID0gJ2Vhc2UtaW4nO1xuICBlYXNlVGltZSA9IDMwMDtcbiAgdGFwVG9EaXNtaXNzID0gdHJ1ZTtcbiAgb25BY3RpdmF0ZVRpY2sgPSBmYWxzZTtcbiAgcHJvZ3Jlc3NBbmltYXRpb246ICdkZWNyZWFzaW5nJyB8ICdpbmNyZWFzaW5nJyA9ICdkZWNyZWFzaW5nJztcbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWZhdWx0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWNvbmZpZyc7XG5pbXBvcnQgeyBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LXRva2VuJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1RvYXN0XSxcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb2FzdF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVG9hc3RyTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2FzdHJNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEl0IHNob3VsZCBvbmx5IGJlIGltcG9ydGVkIGluIHlvdXIgYXBwbGljYXRpb25cXCdzIG1haW4gbW9kdWxlLicpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBhcnRpYWw8R2xvYmFsQ29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdHJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBUT0FTVF9DT05GSUcsIHVzZVZhbHVlOiB7IGNvbmZpZywgZGVmYXVsdHM6IERlZmF1bHRHbG9iYWxDb25maWcgfSB9LFxuICAgICAgICBPdmVybGF5Q29udGFpbmVyLFxuICAgICAgICBPdmVybGF5LFxuICAgICAgICBUb2FzdHJTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1t0b2FzdC1jb21wb25lbnRdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxidXR0b24gKm5nSWY9XCJvcHRpb25zLmNsb3NlQnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZSgpXCIgY2xhc3M9XCJ0b2FzdC1jbG9zZS1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzXT1cIm9wdGlvbnMudGl0bGVDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIj5cclxuICAgIHt7IHRpdGxlIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCJcclxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmICFvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXNzYWdlXCI+XHJcbiAgICB7eyBtZXNzYWdlIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm9wdGlvbnMucHJvZ3Jlc3NCYXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1wcm9ncmVzc1wiIFtzdHlsZS53aWR0aF09XCJ3aWR0aCArICclJ1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcclxuICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcclxuICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXHJcbiAgd2lkdGggPSAtMTtcclxuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdG9hc3RDbGFzc2VzID0gJyc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XHJcbiAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIGNvbnRyb2xzIGFuaW1hdGlvbiAqL1xyXG4gIHN0YXRlID0gJ2luYWN0aXZlJztcclxuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcclxuICBwcml2YXRlIGludGVydmFsSWQ6IGFueTtcclxuICBwcml2YXRlIGhpZGVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcclxuICAgIHB1YmxpYyB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcclxuICAgIHByb3RlY3RlZCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcclxuICAgIHRoaXMudGl0bGUgPSB0b2FzdFBhY2thZ2UudGl0bGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0b2FzdFBhY2thZ2UuY29uZmlnO1xyXG4gICAgdGhpcy5vcmlnaW5hbFRpbWVvdXQgPSB0b2FzdFBhY2thZ2UuY29uZmlnLnRpbWVPdXQ7XHJcbiAgICB0aGlzLnRvYXN0Q2xhc3NlcyA9IGAke3RvYXN0UGFja2FnZS50b2FzdFR5cGV9ICR7XHJcbiAgICAgIHRvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc1xyXG4gICAgfWA7XHJcbiAgICB0aGlzLnN1YiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi5hZnRlckFjdGl2YXRlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ViMSA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi5tYW51YWxDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YjIgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYudGltZW91dFJlc2V0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnN1YjEudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3ViMi51bnN1YnNjcmliZSgpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGFjdGl2YXRlcyB0b2FzdCBhbmQgc2V0cyB0aW1lb3V0XHJcbiAgICovXHJcbiAgYWN0aXZhdGVUb2FzdCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSAnYWN0aXZlJztcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVUaW1lT3V0ICYmIHRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0sIHRoaXMub3B0aW9ucy50aW1lT3V0KTtcclxuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkFjdGl2YXRlVGljaykge1xyXG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCB8fCB0aGlzLndpZHRoID09PSAxMDAgfHwgIXRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcclxuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0FuaW1hdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpZHRoID49IDEwMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRUaW1lb3V0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcmlnaW5hbFRpbWVvdXQ7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3JpZ2luYWxUaW1lb3V0KTtcclxuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICh0aGlzLm9yaWdpbmFsVGltZW91dCB8fCAwKTtcclxuICAgIHRoaXMud2lkdGggPSAtMTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMuc3RhdGUgPSAncmVtb3ZlZCc7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgIHRoaXMudG9hc3RyU2VydmljZS5yZW1vdmUodGhpcy50b2FzdFBhY2thZ2UudG9hc3RJZClcclxuICAgICk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICB0YXBUb2FzdCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgc3RpY2tBcm91bmQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSAwO1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBwcm9ncmVzc0JhclxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0ID09PSAwIHx8XHJcbiAgICAgIHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+IHRoaXMucmVtb3ZlKCksXHJcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXRcclxuICAgICk7XHJcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQ7XHJcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XHJcbiAgICB0aGlzLndpZHRoID0gLTE7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdE5vQW5pbWF0aW9uXSxcclxuICBleHBvcnRzOiBbVG9hc3ROb0FuaW1hdGlvbl0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3ROb0FuaW1hdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb25Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQVdFLGlDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUFLOzs7O0lBQ3ZDLHFEQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5Qjs7Z0JBUkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQVBDLFVBQVU7O2tDQUZaOzs7Ozs7Z0JBaUJDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DOzsrQkFwQkQ7Ozs7Ozs7QUNDQTs7O0FBd0lBOzs7QUFBQTtJQUlFLHNCQUNTLFNBQ0EsUUFDQSxTQUNBLE9B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