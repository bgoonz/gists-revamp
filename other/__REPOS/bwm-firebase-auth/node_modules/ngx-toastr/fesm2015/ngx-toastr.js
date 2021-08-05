import { Directive, ElementRef, NgModule, ApplicationRef, ComponentFactoryResolver, Injectable, InjectionToken, Inject, Injector, NgZone, SecurityContext, Component, HostBinding, HostListener, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastContainerDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    getContainerElement() {
        return this.el.nativeElement;
    }
}
ToastContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[toastContainer]',
                exportAs: 'toastContainer',
            },] }
];
/** @nocollapse */
ToastContainerDirective.ctorParameters = () => [
    { type: ElementRef }
];
class ToastContainerModule {
}
ToastContainerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ToastContainerDirective],
                exports: [ToastContainerDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Everything a toast needs to launch
 */
class ToastPackage {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
        this.toastRef.afterClosed().subscribe(() => {
            this._onAction.complete();
            this._onTap.complete();
        });
    }
    /**
     * Fired on click
     * @return {?}
     */
    triggerTap() {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    }
    /**
     * @return {?}
     */
    onTap() {
        return this._onTap.asObservable();
    }
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    triggerAction(action) {
        this._onAction.next(action);
    }
    /**
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
class ComponentPortal {
    /**
     * @param {?} component
     * @param {?} injector
     */
    constructor(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    }
    /**
     * Detach this portal from its host
     * @return {?}
     */
    detach() {
        const /** @type {?} */ host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    }
    /**
     * Whether this portal is attached to a host.
     * @return {?}
     */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?=} host
     * @return {?}
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
class BasePortalHost {
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
}

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
class DomPortalHost extends BasePortalHost {
    /**
     * @param {?} _hostDomElement
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
        super();
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    attachComponentPortal(portal, newestOnTop) {
        const /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        let /** @type {?} */ componentRef;
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
        this.setDisposeFn(() => {
            this._appRef.detachView(componentRef.hostView);
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
    }
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    _getComponentRootNode(componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    /**
     * @param {?} _portalHost
     */
    constructor(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?=} newestOnTop
     * @return {?}
     */
    attach(portal, newestOnTop = true) {
        return this._portalHost.attach(portal, newestOnTop);
    }
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    detach() {
        return this._portalHost.detach();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
class OverlayContainer {
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    _createContainer() {
        const /** @type {?} */ container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    }
}

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
class Overlay {
    /**
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    constructor(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    create(positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    }
    /**
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    getPaneElement(positionClass = '', overlayContainer) {
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    _createPaneElement(positionClass, overlayContainer) {
        const /** @type {?} */ pane = document.createElement('div');
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
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    _createOverlayRef(pane) {
        return new OverlayRef(this._createPortalHost(pane));
    }
}
Overlay.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Overlay.ctorParameters = () => [
    { type: OverlayContainer },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/**
 * Providers for Overlay and its related injectables.
 */
const /** @type {?} */ OVERLAY_PROVIDERS = [
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
class ToastRef {
    /**
     * @param {?} _overlayRef
     */
    constructor(_overlayRef) {
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
    manualClose() {
        this._manualClose.next();
        this._manualClose.complete();
    }
    /**
     * @return {?}
     */
    manualClosed() {
        return this._manualClose.asObservable();
    }
    /**
     * @return {?}
     */
    timeoutReset() {
        return this._resetTimeout.asObservable();
    }
    /**
     * Close the toast.
     * @return {?}
     */
    close() {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
    }
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * @return {?}
     */
    isInactive() {
        return this._activate.isStopped;
    }
    /**
     * @return {?}
     */
    activate() {
        this._activate.next();
        this._activate.complete();
    }
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    afterActivate() {
        return this._activate.asObservable();
    }
    /**
     * Reset the toast timouts
     * @return {?}
     */
    resetTimeout() {
        this._resetTimeout.next();
    }
}
/**
 * Custom injector type specifically for instantiating components with a toast.
 */
class ToastInjector {
    /**
     * @param {?} _toastPackage
     * @param {?} _parentInjector
     */
    constructor(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ TOAST_CONFIG = new InjectionToken('ToastConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastrService {
    /**
     * @param {?} token
     * @param {?} overlay
     * @param {?} _injector
     * @param {?} sanitizer
     * @param {?} ngZone
     */
    constructor(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        const /** @type {?} */ defaultConfig = new token.defaults();
        this.toastrConfig = Object.assign({}, defaultConfig, token.config);
        this.toastrConfig.iconClasses = Object.assign({}, defaultConfig.iconClasses, token.config.iconClasses);
    }
    /**
     * show toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    show(message, title, override = {}, type = '') {
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show successful toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    success(message, title, override = {}) {
        const /** @type {?} */ type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show error toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    error(message, title, override = {}) {
        const /** @type {?} */ type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show info toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    info(message, title, override = {}) {
        const /** @type {?} */ type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show warning toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    warning(message, title, override = {}) {
        const /** @type {?} */ type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    clear(toastId) {
        // Call every toastRef manualClose function
        for (const /** @type {?} */ toast of this.toasts) {
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
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    remove(toastId) {
        const /** @type {?} */ found = this._findToast(toastId);
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
            const /** @type {?} */ p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    }
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @param {?} resetOnDuplicate
     * @return {?}
     */
    isDuplicate(message, resetOnDuplicate) {
        for (let /** @type {?} */ i = 0; i < this.toasts.length; i++) {
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
    }
    /**
     * create a clone of global config and apply individual settings
     * @param {?=} override
     * @return {?}
     */
    applyConfig(override = {}) {
        return Object.assign({}, this.toastrConfig, override);
    }
    /**
     * Find toast object by id
     * @param {?} toastId
     * @return {?}
     */
    _findToast(toastId) {
        for (let /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    }
    /**
     * Determines the need to run inside angular's zone then builds the toast
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    _preBuildNotification(toastType, message, title, config) {
        if (config.onActivateTick) {
            return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
        }
        return this._buildNotification(toastType, message, title, config);
    }
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    _buildNotification(toastType, message, title, config) {
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
        let /** @type {?} */ keepInactive = false;
        if (this.toastrConfig.maxOpened &&
            this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
            }
        }
        const /** @type {?} */ overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        let /** @type {?} */ sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        const /** @type {?} */ toastRef = new ToastRef(overlayRef);
        const /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        const /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
        const /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
        const /** @type {?} */ portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        toastRef.componentInstance = (/** @type {?} */ (portal))._component;
        const /** @type {?} */ ins = {
            toastId: this.index,
            message: message || '',
            toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal
        };
        if (!keepInactive) {
            setTimeout(() => {
                ins.toastRef.activate();
                this.currentlyActive = this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    }
}
ToastrService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastrService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
    { type: Overlay },
    { type: Injector },
    { type: DomSanitizer },
    { type: NgZone }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Toast {
    /**
     * @param {?} toastrService
     * @param {?} toastPackage
     * @param {?=} ngZone
     */
    constructor(toastrService, toastPackage, ngZone) {
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
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
            this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
            this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
            this.resetTimeout();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    activateToast() {
        this.state = Object.assign({}, this.state, { value: 'active' });
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.outsideTimeout(() => this.remove(), this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.outsideInterval(() => this.updateProgress(), 10);
            }
        }
    }
    /**
     * updates progress bar width
     * @return {?}
     */
    updateProgress() {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        const /** @type {?} */ now = new Date().getTime();
        const /** @type {?} */ remaining = this.hideTime - now;
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
    }
    /**
     * @return {?}
     */
    resetTimeout() {
        console.log('test');
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.outsideTimeout(() => this.remove(), this.originalTimeout);
        this.options.timeOut = this.originalTimeout;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(() => this.updateProgress(), 10);
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    remove() {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = Object.assign({}, this.state, { value: 'removed' });
        this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
    }
    /**
     * @return {?}
     */
    tapToast() {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    stickAround() {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    /**
     * @return {?}
     */
    delayedHideToast() {
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state.value === 'removed') {
            return;
        }
        this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(() => this.updateProgress(), 10);
        }
    }
    /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    outsideTimeout(func, timeout) {
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(() => (this.timeout = setTimeout(() => this.runInsideAngular(func), timeout)));
        }
        else {
            this.timeout = setTimeout(() => func(), timeout);
        }
    }
    /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    outsideInterval(func, timeout) {
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(() => (this.intervalId = setInterval(() => this.runInsideAngular(func), timeout)));
        }
        else {
            this.intervalId = setInterval(() => func(), timeout);
        }
    }
    /**
     * @param {?} func
     * @return {?}
     */
    runInsideAngular(func) {
        if (this.ngZone) {
            this.ngZone.run(() => func());
        }
        else {
            func();
        }
    }
}
Toast.decorators = [
    { type: Component, args: [{
                selector: '[toast-component]',
                template: `
  <button *ngIf="options.closeButton" (click)="remove()" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }}
  </div>
  <div *ngIf="message && options.enableHtml" role="alertdialog" aria-live="polite"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alertdialog" aria-live="polite"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
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
Toast.ctorParameters = () => [
    { type: ToastrService },
    { type: ToastPackage },
    { type: NgZone }
];
Toast.propDecorators = {
    toastClasses: [{ type: HostBinding, args: ['class',] }],
    state: [{ type: HostBinding, args: ['@flyInOut',] }],
    tapToast: [{ type: HostListener, args: ['click',] }],
    stickAround: [{ type: HostListener, args: ['mouseenter',] }],
    delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DefaultGlobalConfig {
    constructor() {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastrModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: { config, defaults: DefaultGlobalConfig } },
                OverlayContainer,
                Overlay,
                ToastrService,
            ],
        };
    }
}
ToastrModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [Toast],
                declarations: [Toast],
                entryComponents: [Toast],
            },] }
];
/** @nocollapse */
ToastrModule.ctorParameters = () => [
    { type: ToastrModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastNoAnimation {
    /**
     * @param {?} toastrService
     * @param {?} toastPackage
     * @param {?} appRef
     */
    constructor(toastrService, toastPackage, appRef) {
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
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
            this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
            this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
            this.resetTimeout();
        });
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        if (this.state === 'inactive') {
            return 'none';
        }
        return 'inherit';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    activateToast() {
        this.state = 'active';
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(() => {
                this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(() => this.updateProgress(), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    }
    /**
     * updates progress bar width
     * @return {?}
     */
    updateProgress() {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        const /** @type {?} */ now = new Date().getTime();
        const /** @type {?} */ remaining = this.hideTime - now;
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
    }
    /**
     * @return {?}
     */
    resetTimeout() {
        console.log('test');
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    remove() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
    }
    /**
     * @return {?}
     */
    tapToast() {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    stickAround() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    /**
     * @return {?}
     */
    delayedHideToast() {
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
}
ToastNoAnimation.decorators = [
    { type: Component, args: [{
                selector: '[toast-component]',
                template: `
  <button *ngIf="options.closeButton" (click)="remove()" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }}
  </div>
  <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `
            }] }
];
/** @nocollapse */
ToastNoAnimation.ctorParameters = () => [
    { type: ToastrService },
    { type: ToastPackage },
    { type: ApplicationRef }
];
ToastNoAnimation.propDecorators = {
    toastClasses: [{ type: HostBinding, args: ['class',] }],
    displayStyle: [{ type: HostBinding, args: ['style.display',] }],
    tapToast: [{ type: HostListener, args: ['click',] }],
    stickAround: [{ type: HostListener, args: ['mouseenter',] }],
    delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
};
class ToastNoAnimationModule {
}
ToastNoAnimationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ToastNoAnimation],
                exports: [ToastNoAnimation],
                entryComponents: [ToastNoAnimation]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ToastContainerDirective, ToastContainerModule, Toast, ToastrService, ToastPackage, DefaultGlobalConfig, ToastrModule, ToastRef, ToastInjector, TOAST_CONFIG, ToastNoAnimation, ToastNoAnimationModule, ComponentPortal, BasePortalHost, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0ci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHItY29uZmlnLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3BvcnRhbC9wb3J0YWwudHMiLCJuZzovL25neC10b2FzdHIvcG9ydGFsL2RvbS1wb3J0YWwtaG9zdC50cyIsIm5nOi8vbmd4LXRvYXN0ci9vdmVybGF5L292ZXJsYXktcmVmLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXIudHMiLCJuZzovL25neC10b2FzdHIvb3ZlcmxheS9vdmVybGF5LnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC1pbmplY3Rvci50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QtdG9rZW4udHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0ci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC5jb21wb25lbnQudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL2RlZmF1bHQtY29uZmlnLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHIubW9kdWxlLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC1ub2FuaW1hdGlvbi5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b2FzdENvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3RvYXN0Q29udGFpbmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cbiAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogZGlzYWJsZSBib3RoIHRpbWVPdXQgYW5kIGV4dGVuZGVkVGltZU91dFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZVRpbWVPdXQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0b2FzdCB0aW1lIHRvIGxpdmUgaW4gbWlsbGlzZWNvbmRzXG4gICAqIGRlZmF1bHQ6IDUwMDBcbiAgICovXG4gIHRpbWVPdXQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHRvYXN0IHNob3cgY2xvc2UgYnV0dG9uXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBjbG9zZUJ1dHRvbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRpbWUgdG8gY2xvc2UgYWZ0ZXIgYSB1c2VyIGhvdmVycyBvdmVyIHRvYXN0XG4gICAqIGRlZmF1bHQ6IDEwMDBcbiAgICovXG4gIGV4dGVuZGVkVGltZU91dDogbnVtYmVyO1xuICAvKipcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByb2dyZXNzQmFyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBjaGFuZ2VzIHRvYXN0IHByb2dyZXNzIGJhciBhbmltYXRpb25cbiAgICogZGVmYXVsdDogZGVjcmVhc2luZ1xuICAgKi9cbiAgcHJvZ3Jlc3NBbmltYXRpb24/OiAnaW5jcmVhc2luZycgfCAnZGVjcmVhc2luZyc7XG4gIC8qKlxuICAgKiByZW5kZXIgaHRtbCBpbiB0b2FzdCBtZXNzYWdlIChwb3NzaWJseSB1bnNhZmUpXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBlbmFibGVIdG1sOiBib29sZWFuO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbXBvbmVudFxuICAgKiBkZWZhdWx0OiB0b2FzdFxuICAgKi9cbiAgdG9hc3RDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbnRhaW5lclxuICAgKiBkZWZhdWx0OiB0b2FzdC10b3AtcmlnaHRcbiAgICovXG4gIHBvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgdGl0bGVDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IG1lc3NhZ2VcbiAgICogZGVmYXVsdDogdG9hc3QtbWVzc2FnZVxuICAgKi9cbiAgbWVzc2FnZUNsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbmltYXRpb24gZWFzaW5nIG9uIHRvYXN0XG4gICAqIGRlZmF1bHQ6IGVhc2UtaW5cbiAgICovXG4gIGVhc2luZzogc3RyaW5nO1xuICAvKipcbiAgICogYW5pbWF0aW9uIGVhc2UgdGltZSBvbiB0b2FzdFxuICAgKiBkZWZhdWx0OiAzMDBcbiAgICovXG4gIGVhc2VUaW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiBjbGlja2luZyBvbiB0b2FzdCBkaXNtaXNzZXMgaXRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgdGFwVG9EaXNtaXNzOiBib29sZWFuO1xuICAvKipcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cbiAgICogZGVmYXVsdDogVG9hc3RcbiAgICovXG4gIHRvYXN0Q29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG4gIC8qKlxuICAgKiBIZWxwcyBzaG93IHRvYXN0IGZyb20gYSB3ZWJzb2NrZXQgb3IgZnJvbSBldmVudCBvdXRzaWRlIEFuZ3VsYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIG9uQWN0aXZhdGVUaWNrOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0ckljb25DbGFzc2VzIHtcbiAgZXJyb3I6IHN0cmluZztcbiAgaW5mbzogc3RyaW5nO1xuICBzdWNjZXNzOiBzdHJpbmc7XG4gIHdhcm5pbmc6IHN0cmluZztcbn1cblxuLyoqXG4gKiBHbG9iYWwgVG9hc3QgY29uZmlndXJhdGlvblxuICogSW5jbHVkZXMgYWxsIEluZGl2aWR1YWxDb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcbiAgICogWmVybyBpcyB1bmxpbWl0ZWRcbiAgICogZGVmYXVsdDogMFxuICAgKi9cbiAgbWF4T3BlbmVkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW47XG4gIGljb25DbGFzc2VzOiBQYXJ0aWFsPFRvYXN0ckljb25DbGFzc2VzPjtcbiAgLyoqXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgbmV3ZXN0T25Ub3A6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBibG9jayBkdXBsaWNhdGUgbWVzc2FnZXNcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZXNldCB0b2FzdCB0aW1lb3V0IHdoZW4gdGhlcmUncyBhIGR1cGxpY2F0ZSAocHJldmVudER1cGxpY2F0ZXMgbmVlZHMgdG8gYmUgc2V0IHRvIHRydWUpXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICByZXNldFRpbWVvdXRPbkR1cGxpY2F0ZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBFdmVyeXRoaW5nIGEgdG9hc3QgbmVlZHMgdG8gbGF1bmNoXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdFBhY2thZ2Uge1xuICBwcml2YXRlIF9vblRhcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfb25BY3Rpb24gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0SWQ6IG51bWJlcixcbiAgICBwdWJsaWMgY29uZmlnOiBJbmRpdmlkdWFsQ29uZmlnLFxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgcHVibGljIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b2FzdFJlZjogVG9hc3RSZWY8YW55PlxuICApIHtcbiAgICB0aGlzLnRvYXN0UmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLl9vblRhcC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpcmVkIG9uIGNsaWNrICovXG4gIHRyaWdnZXJUYXAoKSB7XG4gICAgdGhpcy5fb25UYXAubmV4dCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZy50YXBUb0Rpc21pc3MpIHtcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25UYXAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25UYXAuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogYXZhaWxhYmxlIGZvciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XG4gICAgdGhpcy5fb25BY3Rpb24ubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgb25BY3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25BY3Rpb24uYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cblxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHktaW50ZXJmYWNlICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbFRvYXN0ckNvbmZpZyBleHRlbmRzIEdsb2JhbENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHt9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdG9yLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGU8VD4ge1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVDtcbn1cblxuXG4vKipcbiAqIEEgYENvbXBvbmVudFBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCBpbnN0YW50aWF0ZXMgc29tZSBDb21wb25lbnQgdXBvbiBhdHRhY2htZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsPFQ+IHtcbiAgcHJpdmF0ZSBfYXR0YWNoZWRIb3N0PzogQmFzZVBvcnRhbEhvc3Q7XG4gIC8qKiBUaGUgdHlwZSBvZiB0aGUgY29tcG9uZW50IHRoYXQgd2lsbCBiZSBpbnN0YW50aWF0ZWQgZm9yIGF0dGFjaG1lbnQuICovXG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcblxuICAvKipcbiAgICogW09wdGlvbmFsXSBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXG4gICAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gd2hlcmUgdGhlIGNvbXBvbmVudCAqcmVuZGVycyosIHdoaWNoIGlzIGRldGVybWluZWQgYnkgdGhlIFBvcnRhbEhvc3QuXG4gICAqIFRoZSBvcmlnaW4gbmVjZXNzYXJ5IHdoZW4gdGhlIGhvc3QgaXMgb3V0c2lkZSBvZiB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogSW5qZWN0b3IgdXNlZCBmb3IgdGhlIGluc3RhbnRpYXRpb24gb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgaW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGlzIHBvcnRhbCB0byBhIGhvc3QuICovXG4gIGF0dGFjaChob3N0OiBCYXNlUG9ydGFsSG9zdCwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICAgIHJldHVybiBob3N0LmF0dGFjaCh0aGlzLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICAvKiogRGV0YWNoIHRoaXMgcG9ydGFsIGZyb20gaXRzIGhvc3QgKi9cbiAgZGV0YWNoKCkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG4gICAgaWYgKGhvc3QpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBob3N0LmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcG9ydGFsIGlzIGF0dGFjaGVkIHRvIGEgaG9zdC4gKi9cbiAgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkSG9zdCAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFBvcnRhbEhvc3QgcmVmZXJlbmNlIHdpdGhvdXQgcGVyZm9ybWluZyBgYXR0YWNoKClgLiBUaGlzIGlzIHVzZWQgZGlyZWN0bHkgYnlcbiAgICogdGhlIFBvcnRhbEhvc3Qgd2hlbiBpdCBpcyBwZXJmb3JtaW5nIGFuIGBhdHRhY2goKWAgb3IgYGRldGFjaCgpYC5cbiAgICovXG4gIHNldEF0dGFjaGVkSG9zdChob3N0PzogQmFzZVBvcnRhbEhvc3QpIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cbi8qKlxuICogUGFydGlhbCBpbXBsZW1lbnRhdGlvbiBvZiBQb3J0YWxIb3N0IHRoYXQgb25seSBkZWFscyB3aXRoIGF0dGFjaGluZyBhXG4gKiBDb21wb25lbnRQb3J0YWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQb3J0YWxIb3N0IHtcbiAgLyoqIFRoZSBwb3J0YWwgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBob3N0LiAqL1xuICBwcml2YXRlIF9hdHRhY2hlZFBvcnRhbD86IENvbXBvbmVudFBvcnRhbDxhbnk+O1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZUZuPzogKCkgPT4gdm9pZDtcblxuICBhdHRhY2gocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICBhYnN0cmFjdCBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4sIG5ld2VzdE9uVG9wOiBib29sZWFuKTogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fYXR0YWNoZWRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9kaXNwb3NlRm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbigpO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnLi9wb3J0YWwnO1xuXG4vKipcbiAqIEEgUG9ydGFsSG9zdCBmb3IgYXR0YWNoaW5nIHBvcnRhbHMgdG8gYW4gYXJiaXRyYXJ5IERPTSBlbGVtZW50IG91dHNpZGUgb2YgdGhlIEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBwYXJ0IG9mIHRoZSBwb3J0YWwgY29yZSB0aGF0IGRpcmVjdGx5IHRvdWNoZXMgdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvbVBvcnRhbEhvc3QgZXh0ZW5kcyBCYXNlUG9ydGFsSG9zdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2hvc3REb21FbGVtZW50OiBFbGVtZW50LFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBnaXZlbiBDb21wb25lbnRQb3J0YWwgdG8gRE9NIGVsZW1lbnQgdXNpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5cbiAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWRcbiAgICovXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPixcbiAgICBuZXdlc3RPblRvcDogYm9vbGVhbixcbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgcG9ydGFsLmNvbXBvbmVudCxcbiAgICApO1xuICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcblxuICAgIC8vIElmIHRoZSBwb3J0YWwgc3BlY2lmaWVzIGEgVmlld0NvbnRhaW5lclJlZiwgd2Ugd2lsbCB1c2UgdGhhdCBhcyB0aGUgYXR0YWNobWVudCBwb2ludFxuICAgIC8vIGZvciB0aGUgY29tcG9uZW50IChpbiB0ZXJtcyBvZiBBbmd1bGFyJ3MgY29tcG9uZW50IHRyZWUsIG5vdCByZW5kZXJpbmcpLlxuICAgIC8vIFdoZW4gdGhlIFZpZXdDb250YWluZXJSZWYgaXMgbWlzc2luZywgd2UgdXNlIHRoZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRpcmVjdGx5XG4gICAgLy8gYW5kIHRoZW4gbWFudWFsbHkgYXR0YWNoIHRoZSBDaGFuZ2VEZXRlY3RvciBmb3IgdGhhdCBjb21wb25lbnQgdG8gdGhlIGFwcGxpY2F0aW9uICh3aGljaFxuICAgIC8vIGhhcHBlbnMgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIGEgVmlld0NvbnRhaW5lcikuXG4gICAgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUocG9ydGFsLmluamVjdG9yKTtcblxuICAgIC8vIFdoZW4gY3JlYXRpbmcgYSBjb21wb25lbnQgb3V0c2lkZSBvZiBhIFZpZXdDb250YWluZXIsIHdlIG5lZWQgdG8gbWFudWFsbHkgcmVnaXN0ZXJcbiAgICAvLyBpdHMgQ2hhbmdlRGV0ZWN0b3Igd2l0aCB0aGUgYXBwbGljYXRpb24uIFRoaXMgQVBJIGlzIHVuZm9ydHVuYXRlbHkgbm90IHlldCBwdWJsaXNoZWRcbiAgICAvLyBpbiBBbmd1bGFyIGNvcmUuIFRoZSBjaGFuZ2UgZGV0ZWN0b3IgbXVzdCBhbHNvIGJlIGRlcmVnaXN0ZXJlZCB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAvLyBpcyBkZXN0cm95ZWQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIHRoaXMuc2V0RGlzcG9zZUZuKCgpID0+IHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXQgdGhpcyBwb2ludCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbnRpYXRlZCwgc28gd2UgbW92ZSBpdCB0byB0aGUgbG9jYXRpb24gaW4gdGhlIERPTVxuICAgIC8vIHdoZXJlIHdlIHdhbnQgaXQgdG8gYmUgcmVuZGVyZWQuXG4gICAgaWYgKG5ld2VzdE9uVG9wKSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHRoaXMuX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZiksXG4gICAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50LmZpcnN0Q2hpbGQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy5fZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSByb290IEhUTUxFbGVtZW50IGZvciBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50LiAqL1xuICBwcml2YXRlIF9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvdmVybGF5IHRoYXQgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBPdmVybGF5IHNlcnZpY2UuXG4gKiBVc2VkIHRvIG1hbmlwdWxhdGUgb3IgZGlzcG9zZSBvZiBzYWlkIG92ZXJsYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5UmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9ydGFsSG9zdDogQmFzZVBvcnRhbEhvc3QpIHt9XG5cbiAgYXR0YWNoKFxuICAgIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4sXG4gICAgbmV3ZXN0T25Ub3A6IGJvb2xlYW4gPSB0cnVlLFxuICApOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbEhvc3QuYXR0YWNoKHBvcnRhbCwgbmV3ZXN0T25Ub3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIGFuIG92ZXJsYXkgZnJvbSBhIHBvcnRhbC5cbiAgICogQHJldHVybnMgUmVzb2x2ZXMgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBkZXRhY2hlZC5cbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5kZXRhY2goKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGUgT3ZlcmxheUNvbnRhaW5lciBpcyB0aGUgY29udGFpbmVyIGluIHdoaWNoIGFsbCBvdmVybGF5cyB3aWxsIGxvYWQuXG4gKiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgaW4gdGhlIHJvb3QgY29tcG9uZW50IHRvIGVuc3VyZSBpdCBpcyBwcm9wZXJseSBzaGFyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIG92ZXJsYXkgY29udGFpbmVyIGVsZW1lbnQuICBJdCB3aWxsIGxhemlseVxuICAgKiBjcmVhdGUgdGhlIGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgIGl0IGlzIGNhbGxlZCB0byBmYWNpbGl0YXRlIHVzaW5nXG4gICAqIHRoZSBjb250YWluZXIgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzLlxuICAgKiBAcmV0dXJucyB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGdldENvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyRWxlbWVudCkgeyB0aGlzLl9jcmVhdGVDb250YWluZXIoKTsgfVxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gICAqIHdpdGggdGhlICdjZGstb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21Qb3J0YWxIb3N0IH0gZnJvbSAnLi4vcG9ydGFsL2RvbS1wb3J0YWwtaG9zdCc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbi8qKlxuICogU2VydmljZSB0byBjcmVhdGUgT3ZlcmxheXMuIE92ZXJsYXlzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBwaWVjZXMgb2YgZmxvYXRpbmcgVUksIG1lYW50IHRvIGJlXG4gKiB1c2VkIGFzIGEgbG93LWxldmVsIGJ1aWxkaW5nIGJ1aWxkaW5nIGJsb2NrIGZvciBvdGhlciBjb21wb25lbnRzLiBEaWFsb2dzLCB0b29sdGlwcywgbWVudXMsXG4gKiBzZWxlY3RzLCBldGMuIGNhbiBhbGwgYmUgYnVpbHQgdXNpbmcgb3ZlcmxheXMuIFRoZSBzZXJ2aWNlIHNob3VsZCBwcmltYXJpbHkgYmUgdXNlZCBieSBhdXRob3JzXG4gKiBvZiByZS11c2FibGUgY29tcG9uZW50cyByYXRoZXIgdGhhbiBkZXZlbG9wZXJzIGJ1aWxkaW5nIGVuZC11c2VyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBBbiBvdmVybGF5ICppcyogYSBQb3J0YWxIb3N0LCBzbyBhbnkga2luZCBvZiBQb3J0YWwgY2FuIGJlIGxvYWRlZCBpbnRvIG9uZS5cbiAqL1xuIEBJbmplY3RhYmxlKClcbiAgZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuICAgIC8vIE5hbWVzcGFjZSBwYW5lcyBieSBvdmVybGF5IGNvbnRhaW5lclxuICAgIHByaXZhdGUgX3BhbmVFbGVtZW50czogTWFwPFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlLCB7c3RyaW5nPzogSFRNTEVsZW1lbnR9PiA9IG5ldyBNYXAoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3ZlcmxheS5cbiAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICovXG4gIGNyZWF0ZShwb3NpdGlvbkNsYXNzPzogc3RyaW5nLCBvdmVybGF5Q29udGFpbmVyPzogVG9hc3RDb250YWluZXJEaXJlY3RpdmUpOiBPdmVybGF5UmVmIHtcbiAgICAvLyBnZXQgZXhpc3RpbmcgcGFuZSBpZiBwb3NzaWJsZVxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVPdmVybGF5UmVmKHRoaXMuZ2V0UGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lcikpO1xuICB9XG5cbiAgZ2V0UGFuZUVsZW1lbnQocG9zaXRpb25DbGFzczogc3RyaW5nID0gJycsIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIXRoaXMuX3BhbmVFbGVtZW50cy5nZXQob3ZlcmxheUNvbnRhaW5lcikpIHtcbiAgICAgIHRoaXMuX3BhbmVFbGVtZW50cy5zZXQob3ZlcmxheUNvbnRhaW5lciwge30pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKVtwb3NpdGlvbkNsYXNzXSkge1xuICAgICAgdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKVtwb3NpdGlvbkNsYXNzXSA9IHRoaXMuX2NyZWF0ZVBhbmVFbGVtZW50KHBvc2l0aW9uQ2xhc3MsIG92ZXJsYXlDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIERPTSBlbGVtZW50IGZvciBhbiBvdmVybGF5IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICogQHJldHVybnMgTmV3bHktY3JlYXRlZCBwYW5lIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZVBhbmVFbGVtZW50KHBvc2l0aW9uQ2xhc3M6IHN0cmluZywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYW5lLmlkID0gJ3RvYXN0LWNvbnRhaW5lcic7XG4gICAgcGFuZS5jbGFzc0xpc3QuYWRkKHBvc2l0aW9uQ2xhc3MpO1xuICAgIHBhbmUuY2xhc3NMaXN0LmFkZCgndG9hc3QtY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIW92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmFwcGVuZENoaWxkKHBhbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5hcHBlbmRDaGlsZChwYW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRG9tUG9ydGFsSG9zdCBpbnRvIHdoaWNoIHRoZSBvdmVybGF5IGNvbnRlbnQgY2FuIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBob3N0LlxuICAgKiBAcmV0dXJucyBBIHBvcnRhbCBob3N0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3J0YWxIb3N0KHBhbmU6IEhUTUxFbGVtZW50KTogRG9tUG9ydGFsSG9zdCB7XG4gICAgcmV0dXJuIG5ldyBEb21Qb3J0YWxIb3N0KHBhbmUsIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIE92ZXJsYXlSZWYgZm9yIGFuIG92ZXJsYXkgaW4gdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgKiBAcGFyYW0gcGFuZSBET00gZWxlbWVudCBmb3IgdGhlIG92ZXJsYXlcbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYocGFuZTogSFRNTEVsZW1lbnQpOiBPdmVybGF5UmVmIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlSZWYodGhpcy5fY3JlYXRlUG9ydGFsSG9zdChwYW5lKSk7XG4gIH1cbn1cblxuXG4vKiogUHJvdmlkZXJzIGZvciBPdmVybGF5IGFuZCBpdHMgcmVsYXRlZCBpbmplY3RhYmxlcy4gKi9cbmV4cG9ydCBjb25zdCBPVkVSTEFZX1BST1ZJREVSUyA9IFtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbnRhaW5lcixcbl07XG4iLCJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgVG9hc3RQYWNrYWdlIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYSB0b2FzdCBvcGVuZWQgdmlhIHRoZSBUb2FzdHIgc2VydmljZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UmVmPFQ+IHtcbiAgLyoqIFRoZSBpbnN0YW5jZSBvZiBjb21wb25lbnQgb3BlbmVkIGludG8gdGhlIHRvYXN0LiAqL1xuICBjb21wb25lbnRJbnN0YW5jZTogVDtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHRvYXN0IGhhcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBwcml2YXRlIF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2YXRlZCAqL1xuICBwcml2YXRlIF9hY3RpdmF0ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCBjbG9zZSBiZWZvcmUgdGhlIHRpbWVvdXQgKi9cbiAgcHJpdmF0ZSBfbWFudWFsQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8qKiBub3RpZmllcyB0aGUgdG9hc3QgdGhhdCBpdCBzaG91bGQgcmVzZXQgdGhlIHRpbWVvdXRzICovXG4gIHByaXZhdGUgX3Jlc2V0VGltZW91dCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7fVxuXG4gIG1hbnVhbENsb3NlKCkge1xuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbWFudWFsQ2xvc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbnVhbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdGltZW91dFJlc2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2V0VGltZW91dC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgdG9hc3QuXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2FjdGl2YXRlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fcmVzZXRUaW1lb3V0LmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgdG9hc3QgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpc0luYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZS5pc1N0b3BwZWQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLl9hY3RpdmF0ZS5uZXh0KCk7XG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSB0b2FzdCBoYXMgc3RhcnRlZCBvcGVuaW5nLiAqL1xuICBhZnRlckFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIFJlc2V0IHRoZSB0b2FzdCB0aW1vdXRzICovXG4gIHJlc2V0VGltZW91dCgpIHtcbiAgICB0aGlzLl9yZXNldFRpbWVvdXQubmV4dCgpO1xuICB9XG59XG5cbi8qKiBDdXN0b20gaW5qZWN0b3IgdHlwZSBzcGVjaWZpY2FsbHkgZm9yIGluc3RhbnRpYXRpbmcgY29tcG9uZW50cyB3aXRoIGEgdG9hc3QuICovXG5leHBvcnQgY2xhc3MgVG9hc3RJbmplY3RvciBpbXBsZW1lbnRzIEluamVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsXG4gICAgcHJpdmF0ZSBfcGFyZW50SW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgaWYgKHRva2VuID09PSBUb2FzdFBhY2thZ2UgJiYgdGhpcy5fdG9hc3RQYWNrYWdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdG9hc3RQYWNrYWdlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW5qZWN0b3IuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFRva2VuIHtcbiAgY29uZmlnOiBHbG9iYWxDb25maWc7XG4gIGRlZmF1bHRzOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBUT0FTVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VG9hc3RUb2tlbj4oJ1RvYXN0Q29uZmlnJyk7XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE5nWm9uZSxcbiAgU2VjdXJpdHlDb250ZXh0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcbmltcG9ydCB7IFRvYXN0SW5qZWN0b3IsIFRvYXN0UmVmIH0gZnJvbSAnLi90b2FzdC1pbmplY3Rvcic7XG5pbXBvcnQgeyBUb2FzdFRva2VuLCBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LXRva2VuJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVRvYXN0PEM+IHtcbiAgLyoqIFlvdXIgVG9hc3QgSUQuIFVzZSB0aGlzIHRvIGNsb3NlIGl0IGluZGl2aWR1YWxseSAqL1xuICB0b2FzdElkOiBudW1iZXI7XG4gIC8qKiB0aGUgbWVzc2FnZSBvZiB5b3VyIHRvYXN0LiBTdG9yZWQgdG8gcHJldmVudCBkdXBsaWNhdGVzICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgLyoqIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgc2VlIHBvcnRhbC50cyAqL1xuICBwb3J0YWw6IENvbXBvbmVudFJlZjxDPjtcbiAgLyoqIGEgcmVmZXJlbmNlIHRvIHlvdXIgdG9hc3QgKi9cbiAgdG9hc3RSZWY6IFRvYXN0UmVmPEM+O1xuICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgYWN0aXZlICovXG4gIG9uU2hvd246IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGRlc3Ryb3llZCAqL1xuICBvbkhpZGRlbjogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogdHJpZ2dlcmVkIG9uIHRvYXN0IGNsaWNrICovXG4gIG9uVGFwOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiBhdmFpbGFibGUgZm9yIHlvdXIgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xuICBvbkFjdGlvbjogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RyU2VydmljZSB7XG4gIHRvYXN0ckNvbmZpZzogR2xvYmFsQ29uZmlnO1xuICBjdXJyZW50bHlBY3RpdmUgPSAwO1xuICB0b2FzdHM6IEFjdGl2ZVRvYXN0PGFueT5bXSA9IFtdO1xuICBvdmVybGF5Q29udGFpbmVyOiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZTtcbiAgcHJldmlvdXNUb2FzdE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBpbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUT0FTVF9DT05GSUcpIHRva2VuOiBUb2FzdFRva2VuLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBuZXcgdG9rZW4uZGVmYXVsdHMoKTtcbiAgICB0aGlzLnRvYXN0ckNvbmZpZyA9IHsgLi4uZGVmYXVsdENvbmZpZywgLi4udG9rZW4uY29uZmlnIH07XG4gICAgdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMgPSB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLmljb25DbGFzc2VzLFxuICAgICAgLi4udG9rZW4uY29uZmlnLmljb25DbGFzc2VzXG4gICAgfTtcbiAgfVxuICAvKiogc2hvdyB0b2FzdCAqL1xuICBzaG93KFxuICAgIG1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSxcbiAgICB0eXBlID0gJydcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIHN1Y2Nlc3MoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XG4gICkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzIHx8ICcnO1xuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxuICAgICk7XG4gIH1cbiAgLyoqIHNob3cgZXJyb3IgdG9hc3QgKi9cbiAgZXJyb3IoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XG4gICkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcbiAgICApO1xuICB9XG4gIC8qKiBzaG93IGluZm8gdG9hc3QgKi9cbiAgaW5mbyhcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLmluZm8gfHwgJyc7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gIHdhcm5pbmcoXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XG4gICkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nIHx8ICcnO1xuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3IgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIGNsZWFyKHRvYXN0SWQ/OiBudW1iZXIpIHtcbiAgICAvLyBDYWxsIGV2ZXJ5IHRvYXN0UmVmIG1hbnVhbENsb3NlIGZ1bmN0aW9uXG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xuICAgICAgaWYgKHRvYXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodG9hc3QudG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICByZW1vdmUodG9hc3RJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgZm91bmQgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3VuZC5hY3RpdmVUb2FzdC50b2FzdFJlZi5jbG9zZSgpO1xuICAgIHRoaXMudG9hc3RzLnNwbGljZShmb3VuZC5pbmRleCwgMSk7XG4gICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSAtIDE7XG4gICAgaWYgKCF0aGlzLnRvYXN0ckNvbmZpZy5tYXhPcGVuZWQgfHwgIXRoaXMudG9hc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA8IHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCAmJlxuICAgICAgdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdXG4gICAgKSB7XG4gICAgICBjb25zdCBwID0gdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdLnRvYXN0UmVmO1xuICAgICAgaWYgKCFwLmlzSW5hY3RpdmUoKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgICAgcC5hY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRvYXN0IG1lc3NhZ2UgaXMgYWxyZWFkeSBzaG93blxuICAgKi9cbiAgaXNEdXBsaWNhdGUobWVzc2FnZTogc3RyaW5nLCByZXNldE9uRHVwbGljYXRlOiBib29sZWFuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLm1lc3NhZ2UgPT09IG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJlc2V0T25EdXBsaWNhdGUgJiZcbiAgICAgICAgICB0aGlzLnRvYXN0c1tpXS50b2FzdFJlZi5jb21wb25lbnRJbnN0YW5jZS5yZXNldFRpbWVvdXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzZXRPbkR1cGxpY2F0ZSk7XG4gICAgICAgICAgdGhpcy50b2FzdHNbaV0udG9hc3RSZWYucmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBjcmVhdGUgYSBjbG9uZSBvZiBnbG9iYWwgY29uZmlnIGFuZCBhcHBseSBpbmRpdmlkdWFsIHNldHRpbmdzICovXG4gIHByaXZhdGUgYXBwbHlDb25maWcob3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSk6IEdsb2JhbENvbmZpZyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy50b2FzdHJDb25maWcsIC4uLm92ZXJyaWRlIH07XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2FzdCBvYmplY3QgYnkgaWRcbiAgICovXG4gIHByaXZhdGUgX2ZpbmRUb2FzdChcbiAgICB0b2FzdElkOiBudW1iZXJcbiAgKTogeyBpbmRleDogbnVtYmVyOyBhY3RpdmVUb2FzdDogQWN0aXZlVG9hc3Q8YW55PiB9IHwgbnVsbCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGksIGFjdGl2ZVRvYXN0OiB0aGlzLnRvYXN0c1tpXSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBuZWVkIHRvIHJ1biBpbnNpZGUgYW5ndWxhcidzIHpvbmUgdGhlbiBidWlsZHMgdGhlIHRvYXN0XG4gICAqL1xuICBwcml2YXRlIF9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZ1xuICApOiBBY3RpdmVUb2FzdDxhbnk+IHwgbnVsbCB7XG4gICAgaWYgKGNvbmZpZy5vbkFjdGl2YXRlVGljaykge1xuICAgICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bigoKSA9PlxuICAgICAgICB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0b2FzdFR5cGUsIG1lc3NhZ2UsIHRpdGxlLCBjb25maWcpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odG9hc3RUeXBlLCBtZXNzYWdlLCB0aXRsZSwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxuICAgKiByZXR1cm5zIG51bGwgaWYgdG9hc3QgaXMgZHVwbGljYXRlIGFuZCBwcmV2ZW50RHVwbGljYXRlcyA9PSBUcnVlXG4gICAqL1xuICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZ1xuICApOiBBY3RpdmVUb2FzdDxhbnk+IHwgbnVsbCB7XG4gICAgaWYgKCFjb25maWcudG9hc3RDb21wb25lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndG9hc3RDb21wb25lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgLy8gbWF4IG9wZW5lZCBhbmQgYXV0byBkaXNtaXNzID0gdHJ1ZVxuICAgIGlmIChcbiAgICAgIG1lc3NhZ2UgJiZcbiAgICAgIHRoaXMudG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzICYmXG4gICAgICB0aGlzLmlzRHVwbGljYXRlKG1lc3NhZ2UsIHRoaXMudG9hc3RyQ29uZmlnLnJlc2V0VGltZW91dE9uRHVwbGljYXRlKVxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNUb2FzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBrZWVwSW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRvYXN0ckNvbmZpZy5tYXhPcGVuZWQgJiZcbiAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID49IHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZFxuICAgICkge1xuICAgICAga2VlcEluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnRvYXN0ckNvbmZpZy5hdXRvRGlzbWlzcykge1xuICAgICAgICB0aGlzLmNsZWFyKHRoaXMudG9hc3RzWzBdLnRvYXN0SWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShcbiAgICAgIGNvbmZpZy5wb3NpdGlvbkNsYXNzLFxuICAgICAgdGhpcy5vdmVybGF5Q29udGFpbmVyXG4gICAgKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCArIDE7XG4gICAgbGV0IHNhbml0aXplZE1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sIHwgdW5kZWZpbmVkIHwgbnVsbCA9IG1lc3NhZ2U7XG4gICAgaWYgKG1lc3NhZ2UgJiYgY29uZmlnLmVuYWJsZUh0bWwpIHtcbiAgICAgIHNhbml0aXplZE1lc3NhZ2UgPSB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbWVzc2FnZSk7XG4gICAgfVxuICAgIGNvbnN0IHRvYXN0UmVmID0gbmV3IFRvYXN0UmVmKG92ZXJsYXlSZWYpO1xuICAgIGNvbnN0IHRvYXN0UGFja2FnZSA9IG5ldyBUb2FzdFBhY2thZ2UoXG4gICAgICB0aGlzLmluZGV4LFxuICAgICAgY29uZmlnLFxuICAgICAgc2FuaXRpemVkTWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdG9hc3RUeXBlLFxuICAgICAgdG9hc3RSZWZcbiAgICApO1xuICAgIGNvbnN0IHRvYXN0SW5qZWN0b3IgPSBuZXcgVG9hc3RJbmplY3Rvcih0b2FzdFBhY2thZ2UsIHRoaXMuX2luamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbmZpZy50b2FzdENvbXBvbmVudCwgdG9hc3RJbmplY3Rvcik7XG4gICAgY29uc3QgcG9ydGFsID0gb3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50LCB0aGlzLnRvYXN0ckNvbmZpZy5uZXdlc3RPblRvcCk7XG4gICAgdG9hc3RSZWYuY29tcG9uZW50SW5zdGFuY2UgPSAoPGFueT5wb3J0YWwpLl9jb21wb25lbnQ7XG4gICAgY29uc3QgaW5zOiBBY3RpdmVUb2FzdDxhbnk+ID0ge1xuICAgICAgdG9hc3RJZDogdGhpcy5pbmRleCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJycsXG4gICAgICB0b2FzdFJlZixcbiAgICAgIG9uU2hvd246IHRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKSxcbiAgICAgIG9uSGlkZGVuOiB0b2FzdFJlZi5hZnRlckNsb3NlZCgpLFxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxuICAgICAgb25BY3Rpb246IHRvYXN0UGFja2FnZS5vbkFjdGlvbigpLFxuICAgICAgcG9ydGFsXG4gICAgfTtcblxuICAgIGlmICgha2VlcEluYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5zLnRvYXN0UmVmLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy50b2FzdHMucHVzaChpbnMpO1xuICAgIHJldHVybiBpbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbdG9hc3QtY29tcG9uZW50XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxidXR0b24gKm5nSWY9XCJvcHRpb25zLmNsb3NlQnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZSgpXCIgY2xhc3M9XCJ0b2FzdC1jbG9zZS1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGRpdiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzXT1cIm9wdGlvbnMudGl0bGVDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIj5cbiAgICB7eyB0aXRsZSB9fVxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbaW5uZXJIVE1MXT1cIm1lc3NhZ2VcIj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmICFvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwibWVzc2FnZVwiPlxuICAgIHt7IG1lc3NhZ2UgfX1cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJvcHRpb25zLnByb2dyZXNzQmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LXByb2dyZXNzXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoICsgJyUnXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmx5SW5PdXQnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2luYWN0aXZlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHt9KSksXG4gICAgICBzdGF0ZSgncmVtb3ZlZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKFxuICAgICAgICAnaW5hY3RpdmUgPT4gYWN0aXZlJyxcbiAgICAgICAgYW5pbWF0ZSgne3sgZWFzZVRpbWUgfX1tcyB7eyBlYXNpbmcgfX0nKVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiByZW1vdmVkJywgYW5pbWF0ZSgne3sgZWFzZVRpbWUgfX1tcyB7eyBlYXNpbmcgfX0nKSlcbiAgICBdKVxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBvcHRpb25zOiBJbmRpdmlkdWFsQ29uZmlnO1xuICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcbiAgLyoqIHdpZHRoIG9mIHByb2dyZXNzIGJhciAqL1xuICB3aWR0aCA9IC0xO1xuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRvYXN0Q2xhc3NlcyA9ICcnO1xuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gIEBIb3N0QmluZGluZygnQGZseUluT3V0JylcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6ICdpbmFjdGl2ZScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBlYXNlVGltZTogdGhpcy50b2FzdFBhY2thZ2UuY29uZmlnLmVhc2VUaW1lLFxuICAgICAgZWFzaW5nOiAnZWFzZS1pbidcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgdGltZW91dDogYW55O1xuICBwcml2YXRlIGludGVydmFsSWQ6IGFueTtcbiAgcHJpdmF0ZSBoaWRlVGltZTogbnVtYmVyO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzdWIyOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2UsXG4gICAgcHVibGljIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLFxuICAgIHByb3RlY3RlZCBuZ1pvbmU/OiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gdG9hc3RQYWNrYWdlLm1lc3NhZ2U7XG4gICAgdGhpcy50aXRsZSA9IHRvYXN0UGFja2FnZS50aXRsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0b2FzdFBhY2thZ2UuY29uZmlnO1xuICAgIHRoaXMub3JpZ2luYWxUaW1lb3V0ID0gdG9hc3RQYWNrYWdlLmNvbmZpZy50aW1lT3V0O1xuICAgIHRoaXMudG9hc3RDbGFzc2VzID0gYCR7dG9hc3RQYWNrYWdlLnRvYXN0VHlwZX0gJHtcbiAgICAgIHRvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc1xuICAgIH1gO1xuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3ViMiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi50aW1lb3V0UmVzZXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMi51bnN1YnNjcmliZSgpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuICAvKipcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcbiAgICovXG4gIGFjdGl2YXRlVG9hc3QoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgdmFsdWU6ICdhY3RpdmUnIH07XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgJiYgdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcbiAgICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcbiAgICovXG4gIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgIGlmICh0aGlzLndpZHRoID09PSAwIHx8IHRoaXMud2lkdGggPT09IDEwMCB8fCAhdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcbiAgICB0aGlzLndpZHRoID0gKHJlbWFpbmluZyAvIHRoaXMub3B0aW9ucy50aW1lT3V0KSAqIDEwMDtcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQW5pbWF0aW9uID09PSAnaW5jcmVhc2luZycpIHtcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA8PSAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPj0gMTAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0VGltZW91dCgpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcblxuICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcmlnaW5hbFRpbWVvdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcmlnaW5hbFRpbWVvdXQ7XG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKHRoaXMub3B0aW9ucy50aW1lT3V0IHx8IDApO1xuICAgIHRoaXMud2lkdGggPSAtMTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICB0aGlzLm91dHNpZGVJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgdmFsdWU6ICdyZW1vdmVkJyB9O1xuICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnRvYXN0clNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpLFxuICAgICAgK3RoaXMudG9hc3RQYWNrYWdlLmNvbmZpZy5lYXNlVGltZVxuICAgICk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0YXBUb2FzdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9hc3RQYWNrYWdlLnRyaWdnZXJUYXAoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIHN0aWNrQXJvdW5kKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSAwO1xuICAgIHRoaXMuaGlkZVRpbWUgPSAwO1xuXG4gICAgLy8gZGlzYWJsZSBwcm9ncmVzc0JhclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLndpZHRoID0gMDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgZGVsYXllZEhpZGVUb2FzdCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgfHxcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQgPT09IDAgfHxcbiAgICAgIHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm91dHNpZGVUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dDtcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XG4gICAgdGhpcy53aWR0aCA9IC0xO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG91dHNpZGVUaW1lb3V0KGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICh0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5ydW5JbnNpZGVBbmd1bGFyKGZ1bmMpLFxuICAgICAgICAgICAgdGltZW91dFxuICAgICAgICAgICkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgdGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgb3V0c2lkZUludGVydmFsKGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICh0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICgpID0+IHRoaXMucnVuSW5zaWRlQW5ndWxhcihmdW5jKSxcbiAgICAgICAgICAgIHRpbWVvdXRcbiAgICAgICAgICApKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gZnVuYygpLCB0aW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc2lkZUFuZ3VsYXIoZnVuYzogRnVuY3Rpb24pIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBmdW5jKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0R2xvYmFsQ29uZmlnIGltcGxlbWVudHMgR2xvYmFsQ29uZmlnIHtcbiAgLy8gR2xvYmFsXG4gIG1heE9wZW5lZCA9IDA7XG4gIGF1dG9EaXNtaXNzID0gZmFsc2U7XG4gIG5ld2VzdE9uVG9wID0gdHJ1ZTtcbiAgcHJldmVudER1cGxpY2F0ZXMgPSBmYWxzZTtcbiAgcmVzZXRUaW1lb3V0T25EdXBsaWNhdGUgPSBmYWxzZTtcbiAgaWNvbkNsYXNzZXMgPSB7XG4gICAgZXJyb3I6ICd0b2FzdC1lcnJvcicsXG4gICAgaW5mbzogJ3RvYXN0LWluZm8nLFxuICAgIHN1Y2Nlc3M6ICd0b2FzdC1zdWNjZXNzJyxcbiAgICB3YXJuaW5nOiAndG9hc3Qtd2FybmluZydcbiAgfTtcblxuICAvLyBJbmRpdmlkdWFsXG4gIHRvYXN0Q29tcG9uZW50ID0gVG9hc3Q7XG4gIGNsb3NlQnV0dG9uID0gZmFsc2U7XG4gIGRpc2FibGVUaW1lT3V0OiBmYWxzZTtcbiAgdGltZU91dCA9IDUwMDA7XG4gIGV4dGVuZGVkVGltZU91dCA9IDEwMDA7XG4gIGVuYWJsZUh0bWwgPSBmYWxzZTtcbiAgcHJvZ3Jlc3NCYXIgPSBmYWxzZTtcbiAgdG9hc3RDbGFzcyA9ICd0b2FzdCc7XG4gIHBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdGl0bGVDbGFzcyA9ICd0b2FzdC10aXRsZSc7XG4gIG1lc3NhZ2VDbGFzcyA9ICd0b2FzdC1tZXNzYWdlJztcbiAgZWFzaW5nID0gJ2Vhc2UtaW4nO1xuICBlYXNlVGltZSA9IDMwMDtcbiAgdGFwVG9EaXNtaXNzID0gdHJ1ZTtcbiAgb25BY3RpdmF0ZVRpY2sgPSBmYWxzZTtcbiAgcHJvZ3Jlc3NBbmltYXRpb246ICdkZWNyZWFzaW5nJyB8ICdpbmNyZWFzaW5nJyA9ICdkZWNyZWFzaW5nJztcbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBEZWZhdWx0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWNvbmZpZyc7XG5pbXBvcnQgeyBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LXRva2VuJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1RvYXN0XSxcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb2FzdF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVG9hc3RyTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2FzdHJNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEl0IHNob3VsZCBvbmx5IGJlIGltcG9ydGVkIGluIHlvdXIgYXBwbGljYXRpb25cXCdzIG1haW4gbW9kdWxlLicpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBhcnRpYWw8R2xvYmFsQ29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdHJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBUT0FTVF9DT05GSUcsIHVzZVZhbHVlOiB7IGNvbmZpZywgZGVmYXVsdHM6IERlZmF1bHRHbG9iYWxDb25maWcgfSB9LFxuICAgICAgICBPdmVybGF5Q29udGFpbmVyLFxuICAgICAgICBPdmVybGF5LFxuICAgICAgICBUb2FzdHJTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1t0b2FzdC1jb21wb25lbnRdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxidXR0b24gKm5nSWY9XCJvcHRpb25zLmNsb3NlQnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZSgpXCIgY2xhc3M9XCJ0b2FzdC1jbG9zZS1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzXT1cIm9wdGlvbnMudGl0bGVDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIj5cclxuICAgIHt7IHRpdGxlIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCJcclxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmICFvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXNzYWdlXCI+XHJcbiAgICB7eyBtZXNzYWdlIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm9wdGlvbnMucHJvZ3Jlc3NCYXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1wcm9ncmVzc1wiIFtzdHlsZS53aWR0aF09XCJ3aWR0aCArICclJ1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcclxuICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcclxuICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXHJcbiAgd2lkdGggPSAtMTtcclxuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdG9hc3RDbGFzc2VzID0gJyc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XHJcbiAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIGNvbnRyb2xzIGFuaW1hdGlvbiAqL1xyXG4gIHN0YXRlID0gJ2luYWN0aXZlJztcclxuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcclxuICBwcml2YXRlIGludGVydmFsSWQ6IGFueTtcclxuICBwcml2YXRlIGhpZGVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcclxuICAgIHB1YmxpYyB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcclxuICAgIHByb3RlY3RlZCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcclxuICAgIHRoaXMudGl0bGUgPSB0b2FzdFBhY2thZ2UudGl0bGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0b2FzdFBhY2thZ2UuY29uZmlnO1xyXG4gICAgdGhpcy5vcmlnaW5hbFRpbWVvdXQgPSB0b2FzdFBhY2thZ2UuY29uZmlnLnRpbWVPdXQ7XHJcbiAgICB0aGlzLnRvYXN0Q2xhc3NlcyA9IGAke3RvYXN0UGFja2FnZS50b2FzdFR5cGV9ICR7XHJcbiAgICAgIHRvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc1xyXG4gICAgfWA7XHJcbiAgICB0aGlzLnN1YiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi5hZnRlckFjdGl2YXRlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ViMSA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi5tYW51YWxDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YjIgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYudGltZW91dFJlc2V0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnN1YjEudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3ViMi51bnN1YnNjcmliZSgpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGFjdGl2YXRlcyB0b2FzdCBhbmQgc2V0cyB0aW1lb3V0XHJcbiAgICovXHJcbiAgYWN0aXZhdGVUb2FzdCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSAnYWN0aXZlJztcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVUaW1lT3V0ICYmIHRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0sIHRoaXMub3B0aW9ucy50aW1lT3V0KTtcclxuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkFjdGl2YXRlVGljaykge1xyXG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCB8fCB0aGlzLndpZHRoID09PSAxMDAgfHwgIXRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcclxuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0FuaW1hdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpZHRoID49IDEwMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRUaW1lb3V0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcmlnaW5hbFRpbWVvdXQ7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3JpZ2luYWxUaW1lb3V0KTtcclxuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICh0aGlzLm9yaWdpbmFsVGltZW91dCB8fCAwKTtcclxuICAgIHRoaXMud2lkdGggPSAtMTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMuc3RhdGUgPSAncmVtb3ZlZCc7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgIHRoaXMudG9hc3RyU2VydmljZS5yZW1vdmUodGhpcy50b2FzdFBhY2thZ2UudG9hc3RJZClcclxuICAgICk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICB0YXBUb2FzdCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgc3RpY2tBcm91bmQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSAwO1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBwcm9ncmVzc0JhclxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0ID09PSAwIHx8XHJcbiAgICAgIHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+IHRoaXMucmVtb3ZlKCksXHJcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXRcclxuICAgICk7XHJcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQ7XHJcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XHJcbiAgICB0aGlzLndpZHRoID0gLTE7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdE5vQW5pbWF0aW9uXSxcclxuICBleHBvcnRzOiBbVG9hc3ROb0FuaW1hdGlvbl0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3ROb0FuaW1hdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb25Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztJQVdFLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUs7Ozs7SUFDdkMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDOUI7OztZQVJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBUEMsVUFBVTs7Ozs7WUFlWCxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ25DOzs7Ozs7O0FDbkJEOzs7QUF3SUE7Ozs7Ozs7OztJQUlFLFlBQ1MsU0FDQSxRQUNBLFNBQ0EsT0FDQSxXQUNBO1FBTEEsWUFBTyxHQUFQLE9BQU87UUFDUCxXQUFNLEdBQU4sTUFBTTtRQUNOLFlBQU8sR0FBUCxP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