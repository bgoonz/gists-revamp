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
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export { OverlayRef };
function OverlayRef_tsickle_Closure_declarations() {
    /** @type {?} */
    OverlayRef.prototype._portalHost;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3RyLyIsInNvdXJjZXMiOlsib3ZlcmxheS9vdmVybGF5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU9BOzs7O0FBQUE7SUFDRSxvQkFBb0IsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0tBQUk7Ozs7OztJQUVuRCwyQkFBTTs7Ozs7SUFBTixVQUNFLE1BQTRCLEVBQzVCLFdBQTJCO1FBQTNCLDRCQUFBLEVBQUEsa0JBQTJCO1FBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDckQ7SUFFRDs7O09BR0c7Ozs7O0lBQ0gsMkJBQU07Ozs7SUFBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2xDO3FCQXZCSDtJQXdCQyxDQUFBOzs7OztBQWpCRCxzQkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VQb3J0YWxIb3N0LCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYW4gb3ZlcmxheSB0aGF0IGhhcyBiZWVuIGNyZWF0ZWQgd2l0aCB0aGUgT3ZlcmxheSBzZXJ2aWNlLlxuICogVXNlZCB0byBtYW5pcHVsYXRlIG9yIGRpc3Bvc2Ugb2Ygc2FpZCBvdmVybGF5LlxuICovXG5leHBvcnQgY2xhc3MgT3ZlcmxheVJlZiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BvcnRhbEhvc3Q6IEJhc2VQb3J0YWxIb3N0KSB7fVxuXG4gIGF0dGFjaChcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+LFxuICAgIG5ld2VzdE9uVG9wOiBib29sZWFuID0gdHJ1ZSxcbiAgKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWxIb3N0LmF0dGFjaChwb3J0YWwsIG5ld2VzdE9uVG9wKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBhbiBvdmVybGF5IGZyb20gYSBwb3J0YWwuXG4gICAqIEByZXR1cm5zIFJlc29sdmVzIHdoZW4gdGhlIG92ZXJsYXkgaGFzIGJlZW4gZGV0YWNoZWQuXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbEhvc3QuZGV0YWNoKCk7XG4gIH1cbn1cbiJdfQ==