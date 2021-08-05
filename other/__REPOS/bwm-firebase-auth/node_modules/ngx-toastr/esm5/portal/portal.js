/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function ComponentType() { }
function ComponentType_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    new (...args: any[]): T;
    */
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var /**
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
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
export { ComponentPortal };
function ComponentPortal_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentPortal.prototype._attachedHost;
    /**
     * The type of the component that will be instantiated for attachment.
     * @type {?}
     */
    ComponentPortal.prototype.component;
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalHost.
     * The origin necessary when the host is outside of the Angular application context.
     * @type {?}
     */
    ComponentPortal.prototype.viewContainerRef;
    /**
     * Injector used for the instantiation of the component.
     * @type {?}
     */
    ComponentPortal.prototype.injector;
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var /**
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
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
export { BasePortalHost };
function BasePortalHost_tsickle_Closure_declarations() {
    /**
     * The portal currently attached to the host.
     * @type {?}
     */
    BasePortalHost.prototype._attachedPortal;
    /**
     * A function that will permanently dispose this host.
     * @type {?}
     */
    BasePortalHost.prototype._disposeFn;
    /**
     * @abstract
     * @template T
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvYXN0ci8iLCJzb3VyY2VzIjpbInBvcnRhbC9wb3J0YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7QUFBQTtJQWVFLHlCQUFZLFNBQTJCLEVBQUUsUUFBa0I7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7SUFFRCxvQ0FBb0M7Ozs7Ozs7SUFDcEMsZ0NBQU07Ozs7OztJQUFOLFVBQU8sSUFBb0IsRUFBRSxXQUFvQjtRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdkM7SUFFRCx1Q0FBdUM7Ozs7O0lBQ3ZDLGdDQUFNOzs7O0lBQU47UUFDRSxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0QjtLQUNGO0lBR0Qsc0JBQUksdUNBQVU7UUFEZCxpREFBaUQ7Ozs7O1FBQ2pEO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDO1NBQ25DOzs7T0FBQTtJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFlOzs7Ozs7SUFBZixVQUFnQixJQUFxQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMzQjswQkE1REg7SUE2REMsQ0FBQTs7Ozs7QUEvQ0QsMkJBK0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNRDs7Ozs7QUFBQTs7Ozs7Ozs7SUFPRSwrQkFBTTs7Ozs7SUFBTixVQUFPLE1BQTRCLEVBQUUsV0FBb0I7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDeEQ7Ozs7SUFJRCwrQkFBTTs7O0lBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7O0lBRUQscUNBQVk7Ozs7SUFBWixVQUFhLEVBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDdEI7eUJBL0ZIO0lBZ0dDLENBQUE7Ozs7OztBQTdCRCwwQkE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdG9yLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGU8VD4ge1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVDtcbn1cblxuXG4vKipcbiAqIEEgYENvbXBvbmVudFBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCBpbnN0YW50aWF0ZXMgc29tZSBDb21wb25lbnQgdXBvbiBhdHRhY2htZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsPFQ+IHtcbiAgcHJpdmF0ZSBfYXR0YWNoZWRIb3N0PzogQmFzZVBvcnRhbEhvc3Q7XG4gIC8qKiBUaGUgdHlwZSBvZiB0aGUgY29tcG9uZW50IHRoYXQgd2lsbCBiZSBpbnN0YW50aWF0ZWQgZm9yIGF0dGFjaG1lbnQuICovXG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcblxuICAvKipcbiAgICogW09wdGlvbmFsXSBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXG4gICAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gd2hlcmUgdGhlIGNvbXBvbmVudCAqcmVuZGVycyosIHdoaWNoIGlzIGRldGVybWluZWQgYnkgdGhlIFBvcnRhbEhvc3QuXG4gICAqIFRoZSBvcmlnaW4gbmVjZXNzYXJ5IHdoZW4gdGhlIGhvc3QgaXMgb3V0c2lkZSBvZiB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogSW5qZWN0b3IgdXNlZCBmb3IgdGhlIGluc3RhbnRpYXRpb24gb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgaW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGlzIHBvcnRhbCB0byBhIGhvc3QuICovXG4gIGF0dGFjaChob3N0OiBCYXNlUG9ydGFsSG9zdCwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICAgIHJldHVybiBob3N0LmF0dGFjaCh0aGlzLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICAvKiogRGV0YWNoIHRoaXMgcG9ydGFsIGZyb20gaXRzIGhvc3QgKi9cbiAgZGV0YWNoKCkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG4gICAgaWYgKGhvc3QpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBob3N0LmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcG9ydGFsIGlzIGF0dGFjaGVkIHRvIGEgaG9zdC4gKi9cbiAgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkSG9zdCAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFBvcnRhbEhvc3QgcmVmZXJlbmNlIHdpdGhvdXQgcGVyZm9ybWluZyBgYXR0YWNoKClgLiBUaGlzIGlzIHVzZWQgZGlyZWN0bHkgYnlcbiAgICogdGhlIFBvcnRhbEhvc3Qgd2hlbiBpdCBpcyBwZXJmb3JtaW5nIGFuIGBhdHRhY2goKWAgb3IgYGRldGFjaCgpYC5cbiAgICovXG4gIHNldEF0dGFjaGVkSG9zdChob3N0PzogQmFzZVBvcnRhbEhvc3QpIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cbi8qKlxuICogUGFydGlhbCBpbXBsZW1lbnRhdGlvbiBvZiBQb3J0YWxIb3N0IHRoYXQgb25seSBkZWFscyB3aXRoIGF0dGFjaGluZyBhXG4gKiBDb21wb25lbnRQb3J0YWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQb3J0YWxIb3N0IHtcbiAgLyoqIFRoZSBwb3J0YWwgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBob3N0LiAqL1xuICBwcml2YXRlIF9hdHRhY2hlZFBvcnRhbD86IENvbXBvbmVudFBvcnRhbDxhbnk+O1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZUZuPzogKCkgPT4gdm9pZDtcblxuICBhdHRhY2gocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICBhYnN0cmFjdCBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4sIG5ld2VzdE9uVG9wOiBib29sZWFuKTogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fYXR0YWNoZWRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9kaXNwb3NlRm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbigpO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG59XG4iXX0=