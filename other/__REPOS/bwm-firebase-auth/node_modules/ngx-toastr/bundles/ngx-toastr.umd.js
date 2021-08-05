(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/platform-browser'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-toastr', ['exports', '@angular/core', 'rxjs', '@angular/platform-browser', '@angular/animations', '@angular/common'], factory) :
    (factory((global['ngx-toastr'] = {}),global.ng.core,global.rxjs,global.ng.platformBrowser,global.ng.animations,global.ng.common));
}(this, (function (exports,core,rxjs,platformBrowser,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastContainerDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[toastContainer]',
                        exportAs: 'toastContainer',
                    },] }
        ];
        /** @nocollapse */
        ToastContainerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return ToastContainerDirective;
    }());
    var ToastContainerModule = (function () {
        function ToastContainerModule() {
        }
        ToastContainerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ToastContainerDirective],
                        exports: [ToastContainerDirective],
                    },] }
        ];
        return ToastContainerModule;
    }());

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Everything a toast needs to launch
     */
    var /**
     * Everything a toast needs to launch
     */ ToastPackage = (function () {
        function ToastPackage(toastId, config, message, title, toastType, toastRef) {
            var _this = this;
            this.toastId = toastId;
            this.config = config;
            this.message = message;
            this.title = title;
            this.toastType = toastType;
            this.toastRef = toastRef;
            this._onTap = new rxjs.Subject();
            this._onAction = new rxjs.Subject();
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
    var /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */ ComponentPortal = (function () {
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
             */ function () {
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
    var /**
     * Partial implementation of PortalHost that only deals with attaching a
     * ComponentPortal
     * @abstract
     */ BasePortalHost = (function () {
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
     */ DomPortalHost = (function (_super) {
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
                return /** @type {?} */ (((componentRef.hostView)).rootNodes[0]);
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
    var /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */ OverlayRef = (function () {
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
                if (newestOnTop === void 0) {
                    newestOnTop = true;
                }
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
    var /**
     * The OverlayContainer is the container in which all overlays will load.
     * It should be provided in the root component to ensure it is properly shared.
     */ OverlayContainer = (function () {
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
    var Overlay = (function () {
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
                if (positionClass === void 0) {
                    positionClass = '';
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        Overlay.ctorParameters = function () {
            return [
                { type: OverlayContainer },
                { type: core.ComponentFactoryResolver },
                { type: core.ApplicationRef }
            ];
        };
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
    var /**
     * Reference to a toast opened via the Toastr service.
     * @template T
     */ ToastRef = (function () {
        function ToastRef(_overlayRef) {
            this._overlayRef = _overlayRef;
            /**
             * Subject for notifying the user that the toast has finished closing.
             */
            this._afterClosed = new rxjs.Subject();
            /**
             * triggered when toast is activated
             */
            this._activate = new rxjs.Subject();
            /**
             * notifies the toast that it should close before the timeout
             */
            this._manualClose = new rxjs.Subject();
            /**
             * notifies the toast that it should reset the timeouts
             */
            this._resetTimeout = new rxjs.Subject();
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
    var /**
     * Custom injector type specifically for instantiating components with a toast.
     */ ToastInjector = (function () {
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
    var /** @type {?} */ TOAST_CONFIG = new core.InjectionToken('ToastConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastrService = (function () {
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
                if (override === void 0) {
                    override = {};
                }
                if (type === void 0) {
                    type = '';
                }
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
                if (override === void 0) {
                    override = {};
                }
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
                if (override === void 0) {
                    override = {};
                }
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
                if (override === void 0) {
                    override = {};
                }
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
                if (override === void 0) {
                    override = {};
                }
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                if (override === void 0) {
                    override = {};
                }
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
                    sanitizedMessage = this.sanitizer.sanitize(core.SecurityContext.HTML, message);
                }
                var /** @type {?} */ toastRef = new ToastRef(overlayRef);
                var /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
                var /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
                var /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
                var /** @type {?} */ portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
                toastRef.componentInstance = ((portal))._component;
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ToastrService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [TOAST_CONFIG,] }] },
                { type: Overlay },
                { type: core.Injector },
                { type: platformBrowser.DomSanitizer },
                { type: core.NgZone }
            ];
        };
        return ToastrService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Toast = (function () {
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
            { type: core.Component, args: [{
                        selector: '[toast-component]',
                        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                        animations: [
                            animations.trigger('flyInOut', [
                                animations.state('inactive', animations.style({
                                    display: 'none',
                                    opacity: 0
                                })),
                                animations.state('active', animations.style({})),
                                animations.state('removed', animations.style({ opacity: 0 })),
                                animations.transition('inactive => active', animations.animate('{{ easeTime }}ms {{ easing }}')),
                                animations.transition('active => removed', animations.animate('{{ easeTime }}ms {{ easing }}'))
                            ])
                        ],
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        Toast.ctorParameters = function () {
            return [
                { type: ToastrService },
                { type: ToastPackage },
                { type: core.NgZone }
            ];
        };
        Toast.propDecorators = {
            toastClasses: [{ type: core.HostBinding, args: ['class',] }],
            state: [{ type: core.HostBinding, args: ['@flyInOut',] }],
            tapToast: [{ type: core.HostListener, args: ['click',] }],
            stickAround: [{ type: core.HostListener, args: ['mouseenter',] }],
            delayedHideToast: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return Toast;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DefaultGlobalConfig = (function () {
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
    var ToastrModule = (function () {
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
                if (config === void 0) {
                    config = {};
                }
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [Toast],
                        declarations: [Toast],
                        entryComponents: [Toast],
                    },] }
        ];
        /** @nocollapse */
        ToastrModule.ctorParameters = function () {
            return [
                { type: ToastrModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
            ];
        };
        return ToastrModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastNoAnimation = (function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: '[toast-component]',
                        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        ToastNoAnimation.ctorParameters = function () {
            return [
                { type: ToastrService },
                { type: ToastPackage },
                { type: core.ApplicationRef }
            ];
        };
        ToastNoAnimation.propDecorators = {
            toastClasses: [{ type: core.HostBinding, args: ['class',] }],
            displayStyle: [{ type: core.HostBinding, args: ['style.display',] }],
            tapToast: [{ type: core.HostListener, args: ['click',] }],
            stickAround: [{ type: core.HostListener, args: ['mouseenter',] }],
            delayedHideToast: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return ToastNoAnimation;
    }());
    var ToastNoAnimationModule = (function () {
        function ToastNoAnimationModule() {
        }
        ToastNoAnimationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.ToastContainerDirective = ToastContainerDirective;
    exports.ToastContainerModule = ToastContainerModule;
    exports.Toast = Toast;
    exports.ToastrService = ToastrService;
    exports.ToastPackage = ToastPackage;
    exports.DefaultGlobalConfig = DefaultGlobalConfig;
    exports.ToastrModule = ToastrModule;
    exports.ToastRef = ToastRef;
    exports.ToastInjector = ToastInjector;
    exports.TOAST_CONFIG = TOAST_CONFIG;
    exports.ToastNoAnimation = ToastNoAnimation;
    exports.ToastNoAnimationModule = ToastNoAnimationModule;
    exports.ComponentPortal = ComponentPortal;
    exports.BasePortalHost = BasePortalHost;
    exports.Overlay = Overlay;
    exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
    exports.OverlayContainer = OverlayContainer;
    exports.OverlayRef = OverlayRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0ci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZS50cyIsbnVsbCwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHItY29uZmlnLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3BvcnRhbC9wb3J0YWwudHMiLCJuZzovL25neC10b2FzdHIvcG9ydGFsL2RvbS1wb3J0YWwtaG9zdC50cyIsIm5nOi8vbmd4LXRvYXN0ci9vdmVybGF5L292ZXJsYXktcmVmLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXIudHMiLCJuZzovL25neC10b2FzdHIvb3ZlcmxheS9vdmVybGF5LnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC1pbmplY3Rvci50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QtdG9rZW4udHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0ci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC5jb21wb25lbnQudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL2RlZmF1bHQtY29uZmlnLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHIubW9kdWxlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC1ub2FuaW1hdGlvbi5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b2FzdENvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3RvYXN0Q29udGFpbmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cbiAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyTW9kdWxlIHt9XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtaW5qZWN0b3InO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGFuIGluZGl2aWR1YWwgdG9hc3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5kaXZpZHVhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBkaXNhYmxlIGJvdGggdGltZU91dCBhbmQgZXh0ZW5kZWRUaW1lT3V0XG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlVGltZU91dDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRvYXN0IHRpbWUgdG8gbGl2ZSBpbiBtaWxsaXNlY29uZHNcbiAgICogZGVmYXVsdDogNTAwMFxuICAgKi9cbiAgdGltZU91dDogbnVtYmVyO1xuICAvKipcbiAgICogdG9hc3Qgc2hvdyBjbG9zZSBidXR0b25cbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGNsb3NlQnV0dG9uOiBib29sZWFuO1xuICAvKipcbiAgICogdGltZSB0byBjbG9zZSBhZnRlciBhIHVzZXIgaG92ZXJzIG92ZXIgdG9hc3RcbiAgICogZGVmYXVsdDogMTAwMFxuICAgKi9cbiAgZXh0ZW5kZWRUaW1lT3V0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcHJvZ3Jlc3NCYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGNoYW5nZXMgdG9hc3QgcHJvZ3Jlc3MgYmFyIGFuaW1hdGlvblxuICAgKiBkZWZhdWx0OiBkZWNyZWFzaW5nXG4gICAqL1xuICBwcm9ncmVzc0FuaW1hdGlvbj86ICdpbmNyZWFzaW5nJyB8ICdkZWNyZWFzaW5nJztcbiAgLyoqXG4gICAqIHJlbmRlciBodG1sIGluIHRvYXN0IG1lc3NhZ2UgKHBvc3NpYmx5IHVuc2FmZSlcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGVuYWJsZUh0bWw6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29tcG9uZW50XG4gICAqIGRlZmF1bHQ6IHRvYXN0XG4gICAqL1xuICB0b2FzdENsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29udGFpbmVyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRvcC1yaWdodFxuICAgKi9cbiAgcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IHRpdGxlXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRpdGxlXG4gICAqL1xuICB0aXRsZUNsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgbWVzc2FnZVxuICAgKiBkZWZhdWx0OiB0b2FzdC1tZXNzYWdlXG4gICAqL1xuICBtZXNzYWdlQ2xhc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGFuaW1hdGlvbiBlYXNpbmcgb24gdG9hc3RcbiAgICogZGVmYXVsdDogZWFzZS1pblxuICAgKi9cbiAgZWFzaW5nOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbmltYXRpb24gZWFzZSB0aW1lIG9uIHRvYXN0XG4gICAqIGRlZmF1bHQ6IDMwMFxuICAgKi9cbiAgZWFzZVRpbWU6IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIGNsaWNraW5nIG9uIHRvYXN0IGRpc21pc3NlcyBpdFxuICAgKiBkZWZhdWx0OiB0cnVlXG4gICAqL1xuICB0YXBUb0Rpc21pc3M6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbmd1bGFyIHRvYXN0IGNvbXBvbmVudCB0byBiZSBzaG93blxuICAgKiBkZWZhdWx0OiBUb2FzdFxuICAgKi9cbiAgdG9hc3RDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PjtcbiAgLyoqXG4gICAqIEhlbHBzIHNob3cgdG9hc3QgZnJvbSBhIHdlYnNvY2tldCBvciBmcm9tIGV2ZW50IG91dHNpZGUgQW5ndWxhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgb25BY3RpdmF0ZVRpY2s6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RySWNvbkNsYXNzZXMge1xuICBlcnJvcjogc3RyaW5nO1xuICBpbmZvOiBzdHJpbmc7XG4gIHN1Y2Nlc3M6IHN0cmluZztcbiAgd2FybmluZzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEdsb2JhbCBUb2FzdCBjb25maWd1cmF0aW9uXG4gKiBJbmNsdWRlcyBhbGwgSW5kaXZpZHVhbENvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogbWF4IHRvYXN0cyBvcGVuZWQuIFRvYXN0cyB3aWxsIGJlIHF1ZXVlZFxuICAgKiBaZXJvIGlzIHVubGltaXRlZFxuICAgKiBkZWZhdWx0OiAwXG4gICAqL1xuICBtYXhPcGVuZWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIGRpc21pc3MgY3VycmVudCB0b2FzdCB3aGVuIG1heCBpcyByZWFjaGVkXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBhdXRvRGlzbWlzczogYm9vbGVhbjtcbiAgaWNvbkNsYXNzZXM6IFBhcnRpYWw8VG9hc3RySWNvbkNsYXNzZXM+O1xuICAvKipcbiAgICogTmV3IHRvYXN0IHBsYWNlbWVudFxuICAgKiBkZWZhdWx0OiB0cnVlXG4gICAqL1xuICBuZXdlc3RPblRvcDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGJsb2NrIGR1cGxpY2F0ZSBtZXNzYWdlc1xuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcHJldmVudER1cGxpY2F0ZXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRvYXN0IHRpbWVvdXQgd2hlbiB0aGVyZSdzIGEgZHVwbGljYXRlIChwcmV2ZW50RHVwbGljYXRlcyBuZWVkcyB0byBiZSBzZXQgdG8gdHJ1ZSlcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHJlc2V0VGltZW91dE9uRHVwbGljYXRlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEV2ZXJ5dGhpbmcgYSB0b2FzdCBuZWVkcyB0byBsYXVuY2hcbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UGFja2FnZSB7XG4gIHByaXZhdGUgX29uVGFwID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9vbkFjdGlvbiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9hc3RJZDogbnVtYmVyLFxuICAgIHB1YmxpYyBjb25maWc6IEluZGl2aWR1YWxDb25maWcsXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHRvYXN0UmVmOiBUb2FzdFJlZjxhbnk+XG4gICkge1xuICAgIHRoaXMudG9hc3RSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25BY3Rpb24uY29tcGxldGUoKTtcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmlyZWQgb24gY2xpY2sgKi9cbiAgdHJpZ2dlclRhcCgpIHtcbiAgICB0aGlzLl9vblRhcC5uZXh0KCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5fb25UYXAuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBvblRhcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vblRhcC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBhdmFpbGFibGUgZm9yIHVzZSBpbiBjdXN0b20gdG9hc3QgKi9cbiAgdHJpZ2dlckFjdGlvbihhY3Rpb24/OiBhbnkpIHtcbiAgICB0aGlzLl9vbkFjdGlvbi5uZXh0KGFjdGlvbik7XG4gIH1cblxuICBvbkFjdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vbkFjdGlvbi5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eS1pbnRlcmZhY2UgKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgR2xvYmFsQ29uZmlnIHt9XG5leHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxUb2FzdHJDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHt9XG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0ckNvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge31cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50VHlwZTxUPiB7XG4gIG5ldyAoLi4uYXJnczogYW55W10pOiBUO1xufVxuXG5cbi8qKlxuICogQSBgQ29tcG9uZW50UG9ydGFsYCBpcyBhIHBvcnRhbCB0aGF0IGluc3RhbnRpYXRlcyBzb21lIENvbXBvbmVudCB1cG9uIGF0dGFjaG1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb3J0YWw8VD4ge1xuICBwcml2YXRlIF9hdHRhY2hlZEhvc3Q/OiBCYXNlUG9ydGFsSG9zdDtcbiAgLyoqIFRoZSB0eXBlIG9mIHRoZSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBmb3IgYXR0YWNobWVudC4gKi9cbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+O1xuXG4gIC8qKlxuICAgKiBbT3B0aW9uYWxdIFdoZXJlIHRoZSBhdHRhY2hlZCBjb21wb25lbnQgc2hvdWxkIGxpdmUgaW4gQW5ndWxhcidzICpsb2dpY2FsKiBjb21wb25lbnQgdHJlZS5cbiAgICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB3aGVyZSB0aGUgY29tcG9uZW50ICpyZW5kZXJzKiwgd2hpY2ggaXMgZGV0ZXJtaW5lZCBieSB0aGUgUG9ydGFsSG9zdC5cbiAgICogVGhlIG9yaWdpbiBuZWNlc3Nhcnkgd2hlbiB0aGUgaG9zdCBpcyBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gICAqL1xuICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKiBJbmplY3RvciB1c2VkIGZvciB0aGUgaW5zdGFudGlhdGlvbiBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBpbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gIH1cblxuICAvKiogQXR0YWNoIHRoaXMgcG9ydGFsIHRvIGEgaG9zdC4gKi9cbiAgYXR0YWNoKGhvc3Q6IEJhc2VQb3J0YWxIb3N0LCBuZXdlc3RPblRvcDogYm9vbGVhbikge1xuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gICAgcmV0dXJuIGhvc3QuYXR0YWNoKHRoaXMsIG5ld2VzdE9uVG9wKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2ggdGhpcyBwb3J0YWwgZnJvbSBpdHMgaG9zdCAqL1xuICBkZXRhY2goKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuX2F0dGFjaGVkSG9zdDtcbiAgICBpZiAoaG9zdCkge1xuICAgICAgdGhpcy5fYXR0YWNoZWRIb3N0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIGhvc3QuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBwb3J0YWwgaXMgYXR0YWNoZWQgdG8gYSBob3N0LiAqL1xuICBnZXQgaXNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNoZWRIb3N0ICE9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgUG9ydGFsSG9zdCByZWZlcmVuY2Ugd2l0aG91dCBwZXJmb3JtaW5nIGBhdHRhY2goKWAuIFRoaXMgaXMgdXNlZCBkaXJlY3RseSBieVxuICAgKiB0aGUgUG9ydGFsSG9zdCB3aGVuIGl0IGlzIHBlcmZvcm1pbmcgYW4gYGF0dGFjaCgpYCBvciBgZGV0YWNoKClgLlxuICAgKi9cbiAgc2V0QXR0YWNoZWRIb3N0KGhvc3Q/OiBCYXNlUG9ydGFsSG9zdCkge1xuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJ0aWFsIGltcGxlbWVudGF0aW9uIG9mIFBvcnRhbEhvc3QgdGhhdCBvbmx5IGRlYWxzIHdpdGggYXR0YWNoaW5nIGFcbiAqIENvbXBvbmVudFBvcnRhbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBvcnRhbEhvc3Qge1xuICAvKiogVGhlIHBvcnRhbCBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhlIGhvc3QuICovXG4gIHByaXZhdGUgX2F0dGFjaGVkUG9ydGFsPzogQ29tcG9uZW50UG9ydGFsPGFueT47XG5cbiAgLyoqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHBlcm1hbmVudGx5IGRpc3Bvc2UgdGhpcyBob3N0LiAqL1xuICBwcml2YXRlIF9kaXNwb3NlRm4/OiAoKSA9PiB2b2lkO1xuXG4gIGF0dGFjaChwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+LCBuZXdlc3RPblRvcDogYm9vbGVhbikge1xuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gcG9ydGFsO1xuICAgIHJldHVybiB0aGlzLmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwsIG5ld2VzdE9uVG9wKTtcbiAgfVxuXG4gIGFic3RyYWN0IGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pOiBDb21wb25lbnRSZWY8VD47XG5cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9hdHRhY2hlZFBvcnRhbCkge1xuICAgICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwuc2V0QXR0YWNoZWRIb3N0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuX2Rpc3Bvc2VGbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUZuKCk7XG4gICAgICB0aGlzLl9kaXNwb3NlRm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzcG9zZUZuKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fZGlzcG9zZUZuID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VQb3J0YWxIb3N0LCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuL3BvcnRhbCc7XG5cbi8qKlxuICogQSBQb3J0YWxIb3N0IGZvciBhdHRhY2hpbmcgcG9ydGFscyB0byBhbiBhcmJpdHJhcnkgRE9NIGVsZW1lbnQgb3V0c2lkZSBvZiB0aGUgQW5ndWxhclxuICogYXBwbGljYXRpb24gY29udGV4dC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IHBhcnQgb2YgdGhlIHBvcnRhbCBjb3JlIHRoYXQgZGlyZWN0bHkgdG91Y2hlcyB0aGUgRE9NLlxuICovXG5leHBvcnQgY2xhc3MgRG9tUG9ydGFsSG9zdCBleHRlbmRzIEJhc2VQb3J0YWxIb3N0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaG9zdERvbUVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggdGhlIGdpdmVuIENvbXBvbmVudFBvcnRhbCB0byBET00gZWxlbWVudCB1c2luZyB0aGUgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLlxuICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZFxuICAgKi9cbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KFxuICAgIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+LFxuICAgIG5ld2VzdE9uVG9wOiBib29sZWFuLFxuICApOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBwb3J0YWwuY29tcG9uZW50LFxuICAgICk7XG4gICAgbGV0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xuXG4gICAgLy8gSWYgdGhlIHBvcnRhbCBzcGVjaWZpZXMgYSBWaWV3Q29udGFpbmVyUmVmLCB3ZSB3aWxsIHVzZSB0aGF0IGFzIHRoZSBhdHRhY2htZW50IHBvaW50XG4gICAgLy8gZm9yIHRoZSBjb21wb25lbnQgKGluIHRlcm1zIG9mIEFuZ3VsYXIncyBjb21wb25lbnQgdHJlZSwgbm90IHJlbmRlcmluZykuXG4gICAgLy8gV2hlbiB0aGUgVmlld0NvbnRhaW5lclJlZiBpcyBtaXNzaW5nLCB3ZSB1c2UgdGhlIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSBjb21wb25lbnQgZGlyZWN0bHlcbiAgICAvLyBhbmQgdGhlbiBtYW51YWxseSBhdHRhY2ggdGhlIENoYW5nZURldGVjdG9yIGZvciB0aGF0IGNvbXBvbmVudCB0byB0aGUgYXBwbGljYXRpb24gKHdoaWNoXG4gICAgLy8gaGFwcGVucyBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgYSBWaWV3Q29udGFpbmVyKS5cbiAgICBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShwb3J0YWwuaW5qZWN0b3IpO1xuXG4gICAgLy8gV2hlbiBjcmVhdGluZyBhIGNvbXBvbmVudCBvdXRzaWRlIG9mIGEgVmlld0NvbnRhaW5lciwgd2UgbmVlZCB0byBtYW51YWxseSByZWdpc3RlclxuICAgIC8vIGl0cyBDaGFuZ2VEZXRlY3RvciB3aXRoIHRoZSBhcHBsaWNhdGlvbi4gVGhpcyBBUEkgaXMgdW5mb3J0dW5hdGVseSBub3QgeWV0IHB1Ymxpc2hlZFxuICAgIC8vIGluIEFuZ3VsYXIgY29yZS4gVGhlIGNoYW5nZSBkZXRlY3RvciBtdXN0IGFsc28gYmUgZGVyZWdpc3RlcmVkIHdoZW4gdGhlIGNvbXBvbmVudFxuICAgIC8vIGlzIGRlc3Ryb3llZCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy5cbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgdGhpcy5zZXREaXNwb3NlRm4oKCkgPT4ge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdCB0aGlzIHBvaW50IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gaW5zdGFudGlhdGVkLCBzbyB3ZSBtb3ZlIGl0IHRvIHRoZSBsb2NhdGlvbiBpbiB0aGUgRE9NXG4gICAgLy8gd2hlcmUgd2Ugd2FudCBpdCB0byBiZSByZW5kZXJlZC5cbiAgICBpZiAobmV3ZXN0T25Ub3ApIHtcbiAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50Lmluc2VydEJlZm9yZShcbiAgICAgICAgdGhpcy5fZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmKSxcbiAgICAgICAgdGhpcy5faG9zdERvbUVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICB0aGlzLl9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWYpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHJvb3QgSFRNTEVsZW1lbnQgZm9yIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQuICovXG4gIHByaXZhdGUgX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGFuIG92ZXJsYXkgdGhhdCBoYXMgYmVlbiBjcmVhdGVkIHdpdGggdGhlIE92ZXJsYXkgc2VydmljZS5cbiAqIFVzZWQgdG8gbWFuaXB1bGF0ZSBvciBkaXNwb3NlIG9mIHNhaWQgb3ZlcmxheS5cbiAqL1xuZXhwb3J0IGNsYXNzIE92ZXJsYXlSZWYge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3J0YWxIb3N0OiBCYXNlUG9ydGFsSG9zdCkge31cblxuICBhdHRhY2goXG4gICAgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PixcbiAgICBuZXdlc3RPblRvcDogYm9vbGVhbiA9IHRydWUsXG4gICk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5hdHRhY2gocG9ydGFsLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgYW4gb3ZlcmxheSBmcm9tIGEgcG9ydGFsLlxuICAgKiBAcmV0dXJucyBSZXNvbHZlcyB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGRldGFjaGVkLlxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWxIb3N0LmRldGFjaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoZSBPdmVybGF5Q29udGFpbmVyIGlzIHRoZSBjb250YWluZXIgaW4gd2hpY2ggYWxsIG92ZXJsYXlzIHdpbGwgbG9hZC5cbiAqIEl0IHNob3VsZCBiZSBwcm92aWRlZCBpbiB0aGUgcm9vdCBjb21wb25lbnQgdG8gZW5zdXJlIGl0IGlzIHByb3Blcmx5IHNoYXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudC4gIEl0IHdpbGwgbGF6aWx5XG4gICAqIGNyZWF0ZSB0aGUgZWxlbWVudCB0aGUgZmlyc3QgdGltZSAgaXQgaXMgY2FsbGVkIHRvIGZhY2lsaXRhdGUgdXNpbmdcbiAgICogdGhlIGNvbnRhaW5lciBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHMuXG4gICAqIEByZXR1cm5zIHRoZSBjb250YWluZXIgZWxlbWVudFxuICAgKi9cbiAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXJFbGVtZW50KSB7IHRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpOyB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBvdmVybGF5IGNvbnRhaW5lciBlbGVtZW50LCB3aGljaCBpcyBzaW1wbHkgYSBkaXZcbiAgICogd2l0aCB0aGUgJ2Nkay1vdmVybGF5LWNvbnRhaW5lcicgY2xhc3Mgb24gdGhlIGRvY3VtZW50IGJvZHkuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVDb250YWluZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVBvcnRhbEhvc3QgfSBmcm9tICcuLi9wb3J0YWwvZG9tLXBvcnRhbC1ob3N0JztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi90b2FzdHIvdG9hc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNyZWF0ZSBPdmVybGF5cy4gT3ZlcmxheXMgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHBpZWNlcyBvZiBmbG9hdGluZyBVSSwgbWVhbnQgdG8gYmVcbiAqIHVzZWQgYXMgYSBsb3ctbGV2ZWwgYnVpbGRpbmcgYnVpbGRpbmcgYmxvY2sgZm9yIG90aGVyIGNvbXBvbmVudHMuIERpYWxvZ3MsIHRvb2x0aXBzLCBtZW51cyxcbiAqIHNlbGVjdHMsIGV0Yy4gY2FuIGFsbCBiZSBidWlsdCB1c2luZyBvdmVybGF5cy4gVGhlIHNlcnZpY2Ugc2hvdWxkIHByaW1hcmlseSBiZSB1c2VkIGJ5IGF1dGhvcnNcbiAqIG9mIHJlLXVzYWJsZSBjb21wb25lbnRzIHJhdGhlciB0aGFuIGRldmVsb3BlcnMgYnVpbGRpbmcgZW5kLXVzZXIgYXBwbGljYXRpb25zLlxuICpcbiAqIEFuIG92ZXJsYXkgKmlzKiBhIFBvcnRhbEhvc3QsIHNvIGFueSBraW5kIG9mIFBvcnRhbCBjYW4gYmUgbG9hZGVkIGludG8gb25lLlxuICovXG4gQEluamVjdGFibGUoKVxuICBleHBvcnQgY2xhc3MgT3ZlcmxheSB7XG4gICAgLy8gTmFtZXNwYWNlIHBhbmVzIGJ5IG92ZXJsYXkgY29udGFpbmVyXG4gICAgcHJpdmF0ZSBfcGFuZUVsZW1lbnRzOiBNYXA8VG9hc3RDb250YWluZXJEaXJlY3RpdmUsIHtzdHJpbmc/OiBIVE1MRWxlbWVudH0+ID0gbmV3IE1hcCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvdmVybGF5LlxuICAgKiBAcmV0dXJucyBBIHJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBvdmVybGF5LlxuICAgKi9cbiAgY3JlYXRlKHBvc2l0aW9uQ2xhc3M/OiBzdHJpbmcsIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSk6IE92ZXJsYXlSZWYge1xuICAgIC8vIGdldCBleGlzdGluZyBwYW5lIGlmIHBvc3NpYmxlXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYodGhpcy5nZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzLCBvdmVybGF5Q29udGFpbmVyKSk7XG4gIH1cblxuICBnZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzOiBzdHJpbmcgPSAnJywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKSkge1xuICAgICAgdGhpcy5fcGFuZUVsZW1lbnRzLnNldChvdmVybGF5Q29udGFpbmVyLCB7fSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdKSB7XG4gICAgICB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdID0gdGhpcy5fY3JlYXRlUGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BhbmVFbGVtZW50cy5nZXQob3ZlcmxheUNvbnRhaW5lcilbcG9zaXRpb25DbGFzc107XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgZm9yIGFuIG92ZXJsYXkgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgKiBAcmV0dXJucyBOZXdseS1jcmVhdGVkIHBhbmUgZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZUVsZW1lbnQocG9zaXRpb25DbGFzczogc3RyaW5nLCBvdmVybGF5Q29udGFpbmVyPzogVG9hc3RDb250YWluZXJEaXJlY3RpdmUpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmUuaWQgPSAndG9hc3QtY29udGFpbmVyJztcbiAgICBwYW5lLmNsYXNzTGlzdC5hZGQocG9zaXRpb25DbGFzcyk7XG4gICAgcGFuZS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1jb250YWluZXInKTtcblxuICAgIGlmICghb3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuYXBwZW5kQ2hpbGQocGFuZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG92ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmFwcGVuZENoaWxkKHBhbmUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEb21Qb3J0YWxIb3N0IGludG8gd2hpY2ggdGhlIG92ZXJsYXkgY29udGVudCBjYW4gYmUgbG9hZGVkLlxuICAgKiBAcGFyYW0gcGFuZSBUaGUgRE9NIGVsZW1lbnQgdG8gdHVybiBpbnRvIGEgcG9ydGFsIGhvc3QuXG4gICAqIEByZXR1cm5zIEEgcG9ydGFsIGhvc3QgZm9yIHRoZSBnaXZlbiBET00gZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZVBvcnRhbEhvc3QocGFuZTogSFRNTEVsZW1lbnQpOiBEb21Qb3J0YWxIb3N0IHtcbiAgICByZXR1cm4gbmV3IERvbVBvcnRhbEhvc3QocGFuZSwgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB0aGlzLl9hcHBSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gT3ZlcmxheVJlZiBmb3IgYW4gb3ZlcmxheSBpbiB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBwYW5lIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheVxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheVJlZihwYW5lOiBIVE1MRWxlbWVudCk6IE92ZXJsYXlSZWYge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheVJlZih0aGlzLl9jcmVhdGVQb3J0YWxIb3N0KHBhbmUpKTtcbiAgfVxufVxuXG5cbi8qKiBQcm92aWRlcnMgZm9yIE92ZXJsYXkgYW5kIGl0cyByZWxhdGVkIGluamVjdGFibGVzLiAqL1xuZXhwb3J0IGNvbnN0IE9WRVJMQVlfUFJPVklERVJTID0gW1xuICBPdmVybGF5LFxuICBPdmVybGF5Q29udGFpbmVyLFxuXTtcbiIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5LXJlZic7XG5pbXBvcnQgeyBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhIHRvYXN0IG9wZW5lZCB2aWEgdGhlIFRvYXN0ciBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgVG9hc3RSZWY8VD4ge1xuICAvKiogVGhlIGluc3RhbmNlIG9mIGNvbXBvbmVudCBvcGVuZWQgaW50byB0aGUgdG9hc3QuICovXG4gIGNvbXBvbmVudEluc3RhbmNlOiBUO1xuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUgdG9hc3QgaGFzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIHByaXZhdGUgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgYWN0aXZhdGVkICovXG4gIHByaXZhdGUgX2FjdGl2YXRlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvKiogbm90aWZpZXMgdGhlIHRvYXN0IHRoYXQgaXQgc2hvdWxkIGNsb3NlIGJlZm9yZSB0aGUgdGltZW91dCAqL1xuICBwcml2YXRlIF9tYW51YWxDbG9zZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCByZXNldCB0aGUgdGltZW91dHMgKi9cbiAgcHJpdmF0ZSBfcmVzZXRUaW1lb3V0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWYpIHt9XG5cbiAgbWFudWFsQ2xvc2UoKSB7XG4gICAgdGhpcy5fbWFudWFsQ2xvc2UubmV4dCgpO1xuICAgIHRoaXMuX21hbnVhbENsb3NlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBtYW51YWxDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFudWFsQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB0aW1lb3V0UmVzZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXRUaW1lb3V0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSB0b2FzdC5cbiAgICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCgpO1xuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX21hbnVhbENsb3NlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcbiAgICB0aGlzLl9yZXNldFRpbWVvdXQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSB0b2FzdCBpcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGlzSW5hY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlLmlzU3RvcHBlZDtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuX2FjdGl2YXRlLm5leHQoKTtcbiAgICB0aGlzLl9hY3RpdmF0ZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHRvYXN0IGhhcyBzdGFydGVkIG9wZW5pbmcuICovXG4gIGFmdGVyQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogUmVzZXQgdGhlIHRvYXN0IHRpbW91dHMgKi9cbiAgcmVzZXRUaW1lb3V0KCkge1xuICAgIHRoaXMuX3Jlc2V0VGltZW91dC5uZXh0KCk7XG4gIH1cbn1cblxuLyoqIEN1c3RvbSBpbmplY3RvciB0eXBlIHNwZWNpZmljYWxseSBmb3IgaW5zdGFudGlhdGluZyBjb21wb25lbnRzIHdpdGggYSB0b2FzdC4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdEluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcbiAgICBwcml2YXRlIF9wYXJlbnRJbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55IHtcbiAgICBpZiAodG9rZW4gPT09IFRvYXN0UGFja2FnZSAmJiB0aGlzLl90b2FzdFBhY2thZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2FzdFBhY2thZ2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRJbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0VG9rZW4ge1xuICBjb25maWc6IEdsb2JhbENvbmZpZztcbiAgZGVmYXVsdHM6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFRPQVNUX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUb2FzdFRva2VuPignVG9hc3RDb25maWcnKTtcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBTZWN1cml0eUNvbnRleHRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgVG9hc3RJbmplY3RvciwgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcbmltcG9ydCB7IFRvYXN0VG9rZW4sIFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlVG9hc3Q8Qz4ge1xuICAvKiogWW91ciBUb2FzdCBJRC4gVXNlIHRoaXMgdG8gY2xvc2UgaXQgaW5kaXZpZHVhbGx5ICovXG4gIHRvYXN0SWQ6IG51bWJlcjtcbiAgLyoqIHRoZSBtZXNzYWdlIG9mIHlvdXIgdG9hc3QuIFN0b3JlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZXMgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuICAvKiogYSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBzZWUgcG9ydGFsLnRzICovXG4gIHBvcnRhbDogQ29tcG9uZW50UmVmPEM+O1xuICAvKiogYSByZWZlcmVuY2UgdG8geW91ciB0b2FzdCAqL1xuICB0b2FzdFJlZjogVG9hc3RSZWY8Qz47XG4gIC8qKiB0cmlnZ2VyZWQgd2hlbiB0b2FzdCBpcyBhY3RpdmUgKi9cbiAgb25TaG93bjogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgZGVzdHJveWVkICovXG4gIG9uSGlkZGVuOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiB0cmlnZ2VyZWQgb24gdG9hc3QgY2xpY2sgKi9cbiAgb25UYXA6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIGF2YWlsYWJsZSBmb3IgeW91ciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIG9uQWN0aW9uOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdHJTZXJ2aWNlIHtcbiAgdG9hc3RyQ29uZmlnOiBHbG9iYWxDb25maWc7XG4gIGN1cnJlbnRseUFjdGl2ZSA9IDA7XG4gIHRvYXN0czogQWN0aXZlVG9hc3Q8YW55PltdID0gW107XG4gIG92ZXJsYXlDb250YWluZXI6IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlO1xuICBwcmV2aW91c1RvYXN0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRPQVNUX0NPTkZJRykgdG9rZW46IFRvYXN0VG9rZW4sXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IG5ldyB0b2tlbi5kZWZhdWx0cygpO1xuICAgIHRoaXMudG9hc3RyQ29uZmlnID0geyAuLi5kZWZhdWx0Q29uZmlnLCAuLi50b2tlbi5jb25maWcgfTtcbiAgICB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3NlcyA9IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWcuaWNvbkNsYXNzZXMsXG4gICAgICAuLi50b2tlbi5jb25maWcuaWNvbkNsYXNzZXNcbiAgICB9O1xuICB9XG4gIC8qKiBzaG93IHRvYXN0ICovXG4gIHNob3coXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9LFxuICAgIHR5cGUgPSAnJ1xuICApIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcbiAgICApO1xuICB9XG4gIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgc3VjY2VzcyhcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgfHwgJyc7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xuICBlcnJvcihcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLmVycm9yIHx8ICcnO1xuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxuICAgICk7XG4gIH1cbiAgLyoqIHNob3cgaW5mbyB0b2FzdCAqL1xuICBpbmZvKFxuICAgIG1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fVxuICApIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMuaW5mbyB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcbiAgICApO1xuICB9XG4gIC8qKiBzaG93IHdhcm5pbmcgdG9hc3QgKi9cbiAgd2FybmluZyhcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLndhcm5pbmcgfHwgJyc7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvciBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgKi9cbiAgY2xlYXIodG9hc3RJZD86IG51bWJlcikge1xuICAgIC8vIENhbGwgZXZlcnkgdG9hc3RSZWYgbWFudWFsQ2xvc2UgZnVuY3Rpb25cbiAgICBmb3IgKGNvbnN0IHRvYXN0IG9mIHRoaXMudG9hc3RzKSB7XG4gICAgICBpZiAodG9hc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0b2FzdC50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYW5kIGRlc3Ryb3kgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpIHtcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XG4gICAgdGhpcy50b2FzdHMuc3BsaWNlKGZvdW5kLmluZGV4LCAxKTtcbiAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlIC0gMTtcbiAgICBpZiAoIXRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCB8fCAhdGhpcy50b2FzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlIDwgdGhpcy50b2FzdHJDb25maWcubWF4T3BlbmVkICYmXG4gICAgICB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV1cbiAgICApIHtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBpZiAoIXAuaXNJbmFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgICBwLmFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAqL1xuICBpc0R1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcsIHJlc2V0T25EdXBsaWNhdGU6IGJvb2xlYW4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcmVzZXRPbkR1cGxpY2F0ZSAmJlxuICAgICAgICAgIHRoaXMudG9hc3RzW2ldLnRvYXN0UmVmLmNvbXBvbmVudEluc3RhbmNlLnJlc2V0VGltZW91dFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNldE9uRHVwbGljYXRlKTtcbiAgICAgICAgICB0aGlzLnRvYXN0c1tpXS50b2FzdFJlZi5yZXNldFRpbWVvdXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgcHJpdmF0ZSBhcHBseUNvbmZpZyhvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9KTogR2xvYmFsQ29uZmlnIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnRvYXN0ckNvbmZpZywgLi4ub3ZlcnJpZGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvYXN0IG9iamVjdCBieSBpZFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFRvYXN0KFxuICAgIHRvYXN0SWQ6IG51bWJlclxuICApOiB7IGluZGV4OiBudW1iZXI7IGFjdGl2ZVRvYXN0OiBBY3RpdmVUb2FzdDxhbnk+IH0gfCBudWxsIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0udG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICByZXR1cm4geyBpbmRleDogaSwgYWN0aXZlVG9hc3Q6IHRoaXMudG9hc3RzW2ldIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG5lZWQgdG8gcnVuIGluc2lkZSBhbmd1bGFyJ3Mgem9uZSB0aGVuIGJ1aWxkcyB0aGUgdG9hc3RcbiAgICovXG4gIHByaXZhdGUgX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXG4gICk6IEFjdGl2ZVRvYXN0PGFueT4gfCBudWxsIHtcbiAgICBpZiAoY29uZmlnLm9uQWN0aXZhdGVUaWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+XG4gICAgICAgIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHRvYXN0VHlwZSwgbWVzc2FnZSwgdGl0bGUsIGNvbmZpZylcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0b2FzdFR5cGUsIG1lc3NhZ2UsIHRpdGxlLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGF0dGFjaGVzIHRvYXN0IGRhdGEgdG8gY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCBpZiB0b2FzdCBpcyBkdXBsaWNhdGUgYW5kIHByZXZlbnREdXBsaWNhdGVzID09IFRydWVcbiAgICovXG4gIHByaXZhdGUgX2J1aWxkTm90aWZpY2F0aW9uKFxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXG4gICk6IEFjdGl2ZVRvYXN0PGFueT4gfCBudWxsIHtcbiAgICBpZiAoIWNvbmZpZy50b2FzdENvbXBvbmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b2FzdENvbXBvbmVudCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICAvLyBtYXggb3BlbmVkIGFuZCBhdXRvIGRpc21pc3MgPSB0cnVlXG4gICAgaWYgKFxuICAgICAgbWVzc2FnZSAmJlxuICAgICAgdGhpcy50b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgJiZcbiAgICAgIHRoaXMuaXNEdXBsaWNhdGUobWVzc2FnZSwgdGhpcy50b2FzdHJDb25maWcucmVzZXRUaW1lb3V0T25EdXBsaWNhdGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1RvYXN0TWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgbGV0IGtlZXBJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChcbiAgICAgIHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCAmJlxuICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPj0gdGhpcy50b2FzdHJDb25maWcubWF4T3BlbmVkXG4gICAgKSB7XG4gICAgICBrZWVwSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudG9hc3RyQ29uZmlnLmF1dG9EaXNtaXNzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy50b2FzdHNbMF0udG9hc3RJZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxuICAgICAgY29uZmlnLnBvc2l0aW9uQ2xhc3MsXG4gICAgICB0aGlzLm92ZXJsYXlDb250YWluZXJcbiAgICApO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmluZGV4ICsgMTtcbiAgICBsZXQgc2FuaXRpemVkTWVzc2FnZTogc3RyaW5nIHwgU2FmZUh0bWwgfCB1bmRlZmluZWQgfCBudWxsID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSAmJiBjb25maWcuZW5hYmxlSHRtbCkge1xuICAgICAgc2FuaXRpemVkTWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcbiAgICAgIHRoaXMuaW5kZXgsXG4gICAgICBjb25maWcsXG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0b2FzdFR5cGUsXG4gICAgICB0b2FzdFJlZlxuICAgICk7XG4gICAgY29uc3QgdG9hc3RJbmplY3RvciA9IG5ldyBUb2FzdEluamVjdG9yKHRvYXN0UGFja2FnZSwgdGhpcy5faW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29uZmlnLnRvYXN0Q29tcG9uZW50LCB0b2FzdEluamVjdG9yKTtcbiAgICBjb25zdCBwb3J0YWwgPSBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQsIHRoaXMudG9hc3RyQ29uZmlnLm5ld2VzdE9uVG9wKTtcbiAgICB0b2FzdFJlZi5jb21wb25lbnRJbnN0YW5jZSA9ICg8YW55PnBvcnRhbCkuX2NvbXBvbmVudDtcbiAgICBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0PGFueT4gPSB7XG4gICAgICB0b2FzdElkOiB0aGlzLmluZGV4LFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCAnJyxcbiAgICAgIHRvYXN0UmVmLFxuICAgICAgb25TaG93bjogdG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLFxuICAgICAgb25IaWRkZW46IHRvYXN0UmVmLmFmdGVyQ2xvc2VkKCksXG4gICAgICBvblRhcDogdG9hc3RQYWNrYWdlLm9uVGFwKCksXG4gICAgICBvbkFjdGlvbjogdG9hc3RQYWNrYWdlLm9uQWN0aW9uKCksXG4gICAgICBwb3J0YWxcbiAgICB9O1xuXG4gICAgaWYgKCFrZWVwSW5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnMudG9hc3RSZWYuYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnRvYXN0cy5wdXNoKGlucyk7XG4gICAgcmV0dXJuIGlucztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t0b2FzdC1jb21wb25lbnRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGJ1dHRvbiAqbmdJZj1cIm9wdGlvbnMuY2xvc2VCdXR0b25cIiAoY2xpY2spPVwicmVtb3ZlKClcIiBjbGFzcz1cInRvYXN0LWNsb3NlLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8ZGl2ICpuZ0lmPVwidGl0bGVcIiBbY2xhc3NdPVwib3B0aW9ucy50aXRsZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiPlxuICAgIHt7IHRpdGxlIH19XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiBvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgIW9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydGRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXNzYWdlXCI+XG4gICAge3sgbWVzc2FnZSB9fVxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm9wdGlvbnMucHJvZ3Jlc3NCYXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidG9hc3QtcHJvZ3Jlc3NcIiBbc3R5bGUud2lkdGhdPVwid2lkdGggKyAnJSdcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmbHlJbk91dCcsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaW5hY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe30pKSxcbiAgICAgIHN0YXRlKCdyZW1vdmVkJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oXG4gICAgICAgICdpbmFjdGl2ZSA9PiBhY3RpdmUnLFxuICAgICAgICBhbmltYXRlKCd7eyBlYXNlVGltZSB9fW1zIHt7IGVhc2luZyB9fScpXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IHJlbW92ZWQnLCBhbmltYXRlKCd7eyBlYXNlVGltZSB9fW1zIHt7IGVhc2luZyB9fScpKVxuICAgIF0pXG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgbWVzc2FnZT86IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbDtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IEluZGl2aWR1YWxDb25maWc7XG4gIG9yaWdpbmFsVGltZW91dDogbnVtYmVyO1xuICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXG4gIHdpZHRoID0gLTE7XG4gIC8qKiBhIGNvbWJpbmF0aW9uIG9mIHRvYXN0IHR5cGUgYW5kIG9wdGlvbnMudG9hc3RDbGFzcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdG9hc3RDbGFzc2VzID0gJyc7XG4gIC8qKiBjb250cm9scyBhbmltYXRpb24gKi9cbiAgQEhvc3RCaW5kaW5nKCdAZmx5SW5PdXQnKVxuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogJ2luYWN0aXZlJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIGVhc2VUaW1lOiB0aGlzLnRvYXN0UGFja2FnZS5jb25maWcuZWFzZVRpbWUsXG4gICAgICBlYXNpbmc6ICdlYXNlLWluJ1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSB0aW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgaW50ZXJ2YWxJZDogYW55O1xuICBwcml2YXRlIGhpZGVUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3ViMTogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHN1YjI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcbiAgICBwdWJsaWMgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsXG4gICAgcHJvdGVjdGVkIG5nWm9uZT86IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcbiAgICB0aGlzLnRpdGxlID0gdG9hc3RQYWNrYWdlLnRpdGxlO1xuICAgIHRoaXMub3B0aW9ucyA9IHRvYXN0UGFja2FnZS5jb25maWc7XG4gICAgdGhpcy5vcmlnaW5hbFRpbWVvdXQgPSB0b2FzdFBhY2thZ2UuY29uZmlnLnRpbWVPdXQ7XG4gICAgdGhpcy50b2FzdENsYXNzZXMgPSBgJHt0b2FzdFBhY2thZ2UudG9hc3RUeXBlfSAke1xuICAgICAgdG9hc3RQYWNrYWdlLmNvbmZpZy50b2FzdENsYXNzXG4gICAgfWA7XG4gICAgdGhpcy5zdWIgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRlVG9hc3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YjEgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYubWFudWFsQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIyID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLnRpbWVvdXRSZXNldCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0VGltZW91dCgpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWIxLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWIyLnVuc3Vic2NyaWJlKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG4gIC8qKlxuICAgKiBhY3RpdmF0ZXMgdG9hc3QgYW5kIHNldHMgdGltZW91dFxuICAgKi9cbiAgYWN0aXZhdGVUb2FzdCgpIHtcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCB2YWx1ZTogJ2FjdGl2ZScgfTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCAmJiB0aGlzLm9wdGlvbnMudGltZU91dCkge1xuICAgICAgdGhpcy5vdXRzaWRlVGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLm9wdGlvbnMudGltZU91dCk7XG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlSW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiB1cGRhdGVzIHByb2dyZXNzIGJhciB3aWR0aFxuICAgKi9cbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggPT09IDAgfHwgdGhpcy53aWR0aCA9PT0gMTAwIHx8ICF0aGlzLm9wdGlvbnMudGltZU91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NBbmltYXRpb24gPT09ICdpbmNyZWFzaW5nJykge1xuICAgICAgdGhpcy53aWR0aCA9IDEwMCAtIHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoIDw9IDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA+PSAxMDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRUaW1lb3V0KCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuXG4gICAgdGhpcy5vdXRzaWRlVGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLm9yaWdpbmFsVGltZW91dCk7XG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSB0aGlzLm9yaWdpbmFsVGltZW91dDtcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XG4gICAgdGhpcy53aWR0aCA9IC0xO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCB2YWx1ZTogJ3JlbW92ZWQnIH07XG4gICAgdGhpcy5vdXRzaWRlVGltZW91dChcbiAgICAgICgpID0+IHRoaXMudG9hc3RyU2VydmljZS5yZW1vdmUodGhpcy50b2FzdFBhY2thZ2UudG9hc3RJZCksXG4gICAgICArdGhpcy50b2FzdFBhY2thZ2UuY29uZmlnLmVhc2VUaW1lXG4gICAgKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHRhcFRvYXN0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFwVG9EaXNtaXNzKSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgc3RpY2tBcm91bmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IDA7XG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XG5cbiAgICAvLyBkaXNhYmxlIHByb2dyZXNzQmFyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMud2lkdGggPSAwO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBkZWxheWVkSGlkZVRvYXN0KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCB8fFxuICAgICAgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCA9PT0gMCB8fFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA9PT0gJ3JlbW92ZWQnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCk7XG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0O1xuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICh0aGlzLm9wdGlvbnMudGltZU91dCB8fCAwKTtcbiAgICB0aGlzLndpZHRoID0gLTE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xuICAgICAgdGhpcy5vdXRzaWRlSW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb3V0c2lkZVRpbWVvdXQoZnVuYzogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm5nWm9uZSkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgKHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJ1bkluc2lkZUFuZ3VsYXIoZnVuYyksXG4gICAgICAgICAgICB0aW1lb3V0XG4gICAgICAgICAgKSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYygpLCB0aW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBvdXRzaWRlSW50ZXJ2YWwoZnVuYzogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm5nWm9uZSkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoXG4gICAgICAgICgpID0+XG4gICAgICAgICAgKHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5ydW5JbnNpZGVBbmd1bGFyKGZ1bmMpLFxuICAgICAgICAgICAgdGltZW91dFxuICAgICAgICAgICkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBmdW5jKCksIHRpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zaWRlQW5ndWxhcihmdW5jOiBGdW5jdGlvbikge1xuICAgIGlmICh0aGlzLm5nWm9uZSkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IGZ1bmMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIERlZmF1bHRHbG9iYWxDb25maWcgaW1wbGVtZW50cyBHbG9iYWxDb25maWcge1xuICAvLyBHbG9iYWxcbiAgbWF4T3BlbmVkID0gMDtcbiAgYXV0b0Rpc21pc3MgPSBmYWxzZTtcbiAgbmV3ZXN0T25Ub3AgPSB0cnVlO1xuICBwcmV2ZW50RHVwbGljYXRlcyA9IGZhbHNlO1xuICByZXNldFRpbWVvdXRPbkR1cGxpY2F0ZSA9IGZhbHNlO1xuICBpY29uQ2xhc3NlcyA9IHtcbiAgICBlcnJvcjogJ3RvYXN0LWVycm9yJyxcbiAgICBpbmZvOiAndG9hc3QtaW5mbycsXG4gICAgc3VjY2VzczogJ3RvYXN0LXN1Y2Nlc3MnLFxuICAgIHdhcm5pbmc6ICd0b2FzdC13YXJuaW5nJ1xuICB9O1xuXG4gIC8vIEluZGl2aWR1YWxcbiAgdG9hc3RDb21wb25lbnQgPSBUb2FzdDtcbiAgY2xvc2VCdXR0b24gPSBmYWxzZTtcbiAgZGlzYWJsZVRpbWVPdXQ6IGZhbHNlO1xuICB0aW1lT3V0ID0gNTAwMDtcbiAgZXh0ZW5kZWRUaW1lT3V0ID0gMTAwMDtcbiAgZW5hYmxlSHRtbCA9IGZhbHNlO1xuICBwcm9ncmVzc0JhciA9IGZhbHNlO1xuICB0b2FzdENsYXNzID0gJ3RvYXN0JztcbiAgcG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0aXRsZUNsYXNzID0gJ3RvYXN0LXRpdGxlJztcbiAgbWVzc2FnZUNsYXNzID0gJ3RvYXN0LW1lc3NhZ2UnO1xuICBlYXNpbmcgPSAnZWFzZS1pbic7XG4gIGVhc2VUaW1lID0gMzAwO1xuICB0YXBUb0Rpc21pc3MgPSB0cnVlO1xuICBvbkFjdGl2YXRlVGljayA9IGZhbHNlO1xuICBwcm9ncmVzc0FuaW1hdGlvbjogJ2RlY3JlYXNpbmcnIHwgJ2luY3JlYXNpbmcnID0gJ2RlY3JlYXNpbmcnO1xufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IERlZmF1bHRHbG9iYWxDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtY29uZmlnJztcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbVG9hc3RdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0XSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBUb2FzdHJNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvYXN0ck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDxHbG9iYWxDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFRPQVNUX0NPTkZJRywgdXNlVmFsdWU6IHsgY29uZmlnLCBkZWZhdWx0czogRGVmYXVsdEdsb2JhbENvbmZpZyB9IH0sXG4gICAgICAgIE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgIE92ZXJsYXksXG4gICAgICAgIFRvYXN0clNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBOZ01vZHVsZSxcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3RvYXN0LWNvbXBvbmVudF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGJ1dHRvbiAqbmdJZj1cIm9wdGlvbnMuY2xvc2VCdXR0b25cIiAoY2xpY2spPVwicmVtb3ZlKClcIiBjbGFzcz1cInRvYXN0LWNsb3NlLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2ICpuZ0lmPVwidGl0bGVcIiBbY2xhc3NdPVwib3B0aW9ucy50aXRsZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiPlxyXG4gICAge3sgdGl0bGUgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiBvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2lubmVySFRNTF09XCJtZXNzYWdlXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgIW9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXHJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm1lc3NhZ2VcIj5cclxuICAgIHt7IG1lc3NhZ2UgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwib3B0aW9ucy5wcm9ncmVzc0JhclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LXByb2dyZXNzXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoICsgJyUnXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3ROb0FuaW1hdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbWVzc2FnZT86IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbDtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBvcHRpb25zOiBJbmRpdmlkdWFsQ29uZmlnO1xyXG4gIG9yaWdpbmFsVGltZW91dDogbnVtYmVyO1xyXG4gIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cclxuICB3aWR0aCA9IC0xO1xyXG4gIC8qKiBhIGNvbWJpbmF0aW9uIG9mIHRvYXN0IHR5cGUgYW5kIG9wdGlvbnMudG9hc3RDbGFzcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0b2FzdENsYXNzZXMgPSAnJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcclxuICBnZXQgZGlzcGxheVN0eWxlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScpIHtcclxuICAgICAgcmV0dXJuICdub25lJztcclxuICAgIH1cclxuICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXHJcbiAgc3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gIHByaXZhdGUgdGltZW91dDogYW55O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWxJZDogYW55O1xyXG4gIHByaXZhdGUgaGlkZVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc3ViMTogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc3ViMjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLFxyXG4gICAgcHJvdGVjdGVkIGFwcFJlZjogQXBwbGljYXRpb25SZWZcclxuICApIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRvYXN0UGFja2FnZS5tZXNzYWdlO1xyXG4gICAgdGhpcy50aXRsZSA9IHRvYXN0UGFja2FnZS50aXRsZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRvYXN0UGFja2FnZS5jb25maWc7XHJcbiAgICB0aGlzLm9yaWdpbmFsVGltZW91dCA9IHRvYXN0UGFja2FnZS5jb25maWcudGltZU91dDtcclxuICAgIHRoaXMudG9hc3RDbGFzc2VzID0gYCR7dG9hc3RQYWNrYWdlLnRvYXN0VHlwZX0gJHtcclxuICAgICAgdG9hc3RQYWNrYWdlLmNvbmZpZy50b2FzdENsYXNzXHJcbiAgICB9YDtcclxuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVG9hc3QoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ViMiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi50aW1lb3V0UmVzZXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc2V0VGltZW91dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3ViMS51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zdWIyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcclxuICAgKi9cclxuICBhY3RpdmF0ZVRvYXN0KCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgJiYgdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xyXG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWN0aXZhdGVUaWNrKSB7XHJcbiAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcclxuICAgKi9cclxuICB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgIGlmICh0aGlzLndpZHRoID09PSAwIHx8IHRoaXMud2lkdGggPT09IDEwMCB8fCAhdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xyXG4gICAgdGhpcy53aWR0aCA9IChyZW1haW5pbmcgLyB0aGlzLm9wdGlvbnMudGltZU91dCkgKiAxMDA7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQW5pbWF0aW9uID09PSAnaW5jcmVhc2luZycpIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDEwMCAtIHRoaXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aWR0aCA8PSAwKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPj0gMTAwKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFRpbWVvdXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSB0aGlzLm9yaWdpbmFsVGltZW91dDtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcmlnaW5hbFRpbWVvdXQpO1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKHRoaXMub3JpZ2luYWxUaW1lb3V0IHx8IDApO1xyXG4gICAgdGhpcy53aWR0aCA9IC0xO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRlbGxzIHRvYXN0clNlcnZpY2UgdG8gcmVtb3ZlIHRoaXMgdG9hc3QgYWZ0ZXIgYW5pbWF0aW9uIHRpbWVcclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdyZW1vdmVkJztcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLnJlbW92ZSh0aGlzLnRvYXN0UGFja2FnZS50b2FzdElkKVxyXG4gICAgKTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIHRhcFRvYXN0KCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvYXN0UGFja2FnZS50cmlnZ2VyVGFwKCk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnRhcFRvRGlzbWlzcykge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBzdGlja0Fyb3VuZCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IDA7XHJcbiAgICB0aGlzLmhpZGVUaW1lID0gMDtcclxuXHJcbiAgICAvLyBkaXNhYmxlIHByb2dyZXNzQmFyXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICB0aGlzLndpZHRoID0gMDtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXHJcbiAgZGVsYXllZEhpZGVUb2FzdCgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5vcHRpb25zLmRpc2FibGVUaW1lT3V0IHx8XHJcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQgPT09IDAgfHxcclxuICAgICAgdGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgKCkgPT4gdGhpcy5yZW1vdmUoKSxcclxuICAgICAgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dFxyXG4gICAgKTtcclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dDtcclxuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICh0aGlzLm9wdGlvbnMudGltZU91dCB8fCAwKTtcclxuICAgIHRoaXMud2lkdGggPSAtMTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Tm9BbmltYXRpb25dLFxyXG4gIGV4cG9ydHM6IFtUb2FzdE5vQW5pbWF0aW9uXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUb2FzdE5vQW5pbWF0aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3ROb0FuaW1hdGlvbk1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIk5nTW9kdWxlIiwiU3ViamVjdCIsInRzbGliXzEuX19leHRlbmRzIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkFwcGxpY2F0aW9uUmVmIiwiSW5qZWN0aW9uVG9rZW4iLCJ0c2xpYl8xLl9fdmFsdWVzIiwiU2VjdXJpdHlDb250ZXh0IiwiSW5qZWN0IiwiSW5qZWN0b3IiLCJEb21TYW5pdGl6ZXIiLCJOZ1pvbmUiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJDb21tb25Nb2R1bGUiLCJPcHRpb25hbCIsIlNraXBTZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFXRSxpQ0FBb0IsRUFBYztZQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7U0FBSzs7OztRQUN2QyxxREFBbUI7OztZQUFuQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzlCOztvQkFSRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCOzs7Ozt3QkFQQ0MsZUFBVTs7O3NDQUZaOzs7Ozs7b0JBaUJDQyxhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO3FCQUNuQzs7bUNBcEJEOzs7SUNBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxV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