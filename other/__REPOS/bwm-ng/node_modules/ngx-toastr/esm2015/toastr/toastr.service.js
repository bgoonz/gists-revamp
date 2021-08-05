/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, Injector, NgZone, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Overlay } from '../overlay/overlay';
import { ComponentPortal } from '../portal/portal';
import { ToastInjector, ToastRef } from './toast-injector';
import { TOAST_CONFIG } from './toast-token';
import { ToastPackage } from './toastr-config';
/**
 * @record
 * @template C
 */
export function ActiveToast() { }
function ActiveToast_tsickle_Closure_declarations() {
    /**
     * Your Toast ID. Use this to close it individually
     * @type {?}
     */
    ActiveToast.prototype.toastId;
    /**
     * the message of your toast. Stored to prevent duplicates
     * @type {?}
     */
    ActiveToast.prototype.message;
    /**
     * a reference to the component see portal.ts
     * @type {?}
     */
    ActiveToast.prototype.portal;
    /**
     * a reference to your toast
     * @type {?}
     */
    ActiveToast.prototype.toastRef;
    /**
     * triggered when toast is active
     * @type {?}
     */
    ActiveToast.prototype.onShown;
    /**
     * triggered when toast is destroyed
     * @type {?}
     */
    ActiveToast.prototype.onHidden;
    /**
     * triggered on toast click
     * @type {?}
     */
    ActiveToast.prototype.onTap;
    /**
     * available for your use in custom toast
     * @type {?}
     */
    ActiveToast.prototype.onAction;
}
export class ToastrService {
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
function ToastrService_tsickle_Closure_declarations() {
    /** @type {?} */
    ToastrService.prototype.toastrConfig;
    /** @type {?} */
    ToastrService.prototype.currentlyActive;
    /** @type {?} */
    ToastrService.prototype.toasts;
    /** @type {?} */
    ToastrService.prototype.overlayContainer;
    /** @type {?} */
    ToastrService.prototype.previousToastMessage;
    /** @type {?} */
    ToastrService.prototype.index;
    /** @type {?} */
    ToastrService.prototype.overlay;
    /** @type {?} */
    ToastrService.prototype._injector;
    /** @type {?} */
    ToastrService.prototype.sanitizer;
    /** @type {?} */
    ToastrService.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3RyLyIsInNvdXJjZXMiOlsidG9hc3RyL3RvYXN0ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1IsTUFBTSxFQUNOLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBa0MsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCL0UsTUFBTTs7Ozs7Ozs7SUFRSixZQUN3QixLQUFpQixFQUMvQixTQUNBLFdBQ0EsV0FDQTtRQUhBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFDVCxjQUFTLEdBQVQsU0FBUztRQUNULFdBQU0sR0FBTixNQUFNOytCQVhFLENBQUM7c0JBQ1UsRUFBRTtxQkFHZixDQUFDO1FBU2YsdUJBQU0sYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLHFCQUFRLGFBQWEsRUFBSyxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLHFCQUN4QixhQUFhLENBQUMsV0FBVyxFQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcs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RUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ2pDLE1BQU07U0FDUCxDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQzthQUNqRCxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Ozs7WUF4UWQsVUFBVTs7Ozs0Q0FVTixNQUFNLFNBQUMsWUFBWTtZQXBDZixPQUFPO1lBTmQsUUFBUTtZQUlELFlBQVk7WUFIbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBTZWN1cml0eUNvbnRleHRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgVG9hc3RJbmplY3RvciwgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcbmltcG9ydCB7IFRvYXN0VG9rZW4sIFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlVG9hc3Q8Qz4ge1xuICAvKiogWW91ciBUb2FzdCBJRC4gVXNlIHRoaXMgdG8gY2xvc2UgaXQgaW5kaXZpZHVhbGx5ICovXG4gIHRvYXN0SWQ6IG51bWJlcjtcbiAgLyoqIHRoZSBtZXNzYWdlIG9mIHlvdXIgdG9hc3QuIFN0b3JlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZXMgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuICAvKiogYSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBzZWUgcG9ydGFsLnRzICovXG4gIHBvcnRhbDogQ29tcG9uZW50UmVmPEM+O1xuICAvKiogYSByZWZlcmVuY2UgdG8geW91ciB0b2FzdCAqL1xuICB0b2FzdFJlZjogVG9hc3RSZWY8Qz47XG4gIC8qKiB0cmlnZ2VyZWQgd2hlbiB0b2FzdCBpcyBhY3RpdmUgKi9cbiAgb25TaG93bjogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgZGVzdHJveWVkICovXG4gIG9uSGlkZGVuOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiB0cmlnZ2VyZWQgb24gdG9hc3QgY2xpY2sgKi9cbiAgb25UYXA6IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIGF2YWlsYWJsZSBmb3IgeW91ciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIG9uQWN0aW9uOiBPYnNlcnZhYmxlPGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdHJTZXJ2aWNlIHtcbiAgdG9hc3RyQ29uZmlnOiBHbG9iYWxDb25maWc7XG4gIGN1cnJlbnRseUFjdGl2ZSA9IDA7XG4gIHRvYXN0czogQWN0aXZlVG9hc3Q8YW55PltdID0gW107XG4gIG92ZXJsYXlDb250YWluZXI6IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlO1xuICBwcmV2aW91c1RvYXN0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRPQVNUX0NPTkZJRykgdG9rZW46IFRvYXN0VG9rZW4sXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IG5ldyB0b2tlbi5kZWZhdWx0cygpO1xuICAgIHRoaXMudG9hc3RyQ29uZmlnID0geyAuLi5kZWZhdWx0Q29uZmlnLCAuLi50b2tlbi5jb25maWcgfTtcbiAgICB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3NlcyA9IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWcuaWNvbkNsYXNzZXMsXG4gICAgICAuLi50b2tlbi5jb25maWcuaWNvbkNsYXNzZXNcbiAgICB9O1xuICB9XG4gIC8qKiBzaG93IHRvYXN0ICovXG4gIHNob3coXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9LFxuICAgIHR5cGUgPSAnJ1xuICApIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcbiAgICApO1xuICB9XG4gIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgc3VjY2VzcyhcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgfHwgJyc7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xuICBlcnJvcihcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLmVycm9yIHx8ICcnO1xuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcbiAgICAgIHR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxuICAgICk7XG4gIH1cbiAgLyoqIHNob3cgaW5mbyB0b2FzdCAqL1xuICBpbmZvKFxuICAgIG1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fVxuICApIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMuaW5mbyB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgICB0eXBlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcbiAgICApO1xuICB9XG4gIC8qKiBzaG93IHdhcm5pbmcgdG9hc3QgKi9cbiAgd2FybmluZyhcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge31cbiAgKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLndhcm5pbmcgfHwgJyc7XG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgICAgdHlwZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvciBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgKi9cbiAgY2xlYXIodG9hc3RJZD86IG51bWJlcikge1xuICAgIC8vIENhbGwgZXZlcnkgdG9hc3RSZWYgbWFudWFsQ2xvc2UgZnVuY3Rpb25cbiAgICBmb3IgKGNvbnN0IHRvYXN0IG9mIHRoaXMudG9hc3RzKSB7XG4gICAgICBpZiAodG9hc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0b2FzdC50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYW5kIGRlc3Ryb3kgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpIHtcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XG4gICAgdGhpcy50b2FzdHMuc3BsaWNlKGZvdW5kLmluZGV4LCAxKTtcbiAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlIC0gMTtcbiAgICBpZiAoIXRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCB8fCAhdGhpcy50b2FzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlIDwgdGhpcy50b2FzdHJDb25maWcubWF4T3BlbmVkICYmXG4gICAgICB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV1cbiAgICApIHtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBpZiAoIXAuaXNJbmFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgICBwLmFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAqL1xuICBpc0R1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcsIHJlc2V0T25EdXBsaWNhdGU6IGJvb2xlYW4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcmVzZXRPbkR1cGxpY2F0ZSAmJlxuICAgICAgICAgIHRoaXMudG9hc3RzW2ldLnRvYXN0UmVmLmNvbXBvbmVudEluc3RhbmNlLnJlc2V0VGltZW91dFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNldE9uRHVwbGljYXRlKTtcbiAgICAgICAgICB0aGlzLnRvYXN0c1tpXS50b2FzdFJlZi5yZXNldFRpbWVvdXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgcHJpdmF0ZSBhcHBseUNvbmZpZyhvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9KTogR2xvYmFsQ29uZmlnIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnRvYXN0ckNvbmZpZywgLi4ub3ZlcnJpZGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvYXN0IG9iamVjdCBieSBpZFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFRvYXN0KFxuICAgIHRvYXN0SWQ6IG51bWJlclxuICApOiB7IGluZGV4OiBudW1iZXI7IGFjdGl2ZVRvYXN0OiBBY3RpdmVUb2FzdDxhbnk+IH0gfCBudWxsIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0udG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICByZXR1cm4geyBpbmRleDogaSwgYWN0aXZlVG9hc3Q6IHRoaXMudG9hc3RzW2ldIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG5lZWQgdG8gcnVuIGluc2lkZSBhbmd1bGFyJ3Mgem9uZSB0aGVuIGJ1aWxkcyB0aGUgdG9hc3RcbiAgICovXG4gIHByaXZhdGUgX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXG4gICk6IEFjdGl2ZVRvYXN0PGFueT4gfCBudWxsIHtcbiAgICBpZiAoY29uZmlnLm9uQWN0aXZhdGVUaWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+XG4gICAgICAgIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHRvYXN0VHlwZSwgbWVzc2FnZSwgdGl0bGUsIGNvbmZpZylcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0b2FzdFR5cGUsIG1lc3NhZ2UsIHRpdGxlLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGF0dGFjaGVzIHRvYXN0IGRhdGEgdG8gY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCBpZiB0b2FzdCBpcyBkdXBsaWNhdGUgYW5kIHByZXZlbnREdXBsaWNhdGVzID09IFRydWVcbiAgICovXG4gIHByaXZhdGUgX2J1aWxkTm90aWZpY2F0aW9uKFxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXG4gICk6IEFjdGl2ZVRvYXN0PGFueT4gfCBudWxsIHtcbiAgICBpZiAoIWNvbmZpZy50b2FzdENvbXBvbmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b2FzdENvbXBvbmVudCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICAvLyBtYXggb3BlbmVkIGFuZCBhdXRvIGRpc21pc3MgPSB0cnVlXG4gICAgaWYgKFxuICAgICAgbWVzc2FnZSAmJlxuICAgICAgdGhpcy50b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgJiZcbiAgICAgIHRoaXMuaXNEdXBsaWNhdGUobWVzc2FnZSwgdGhpcy50b2FzdHJDb25maWcucmVzZXRUaW1lb3V0T25EdXBsaWNhdGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1RvYXN0TWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgbGV0IGtlZXBJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChcbiAgICAgIHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCAmJlxuICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPj0gdGhpcy50b2FzdHJDb25maWcubWF4T3BlbmVkXG4gICAgKSB7XG4gICAgICBrZWVwSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudG9hc3RyQ29uZmlnLmF1dG9EaXNtaXNzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy50b2FzdHNbMF0udG9hc3RJZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxuICAgICAgY29uZmlnLnBvc2l0aW9uQ2xhc3MsXG4gICAgICB0aGlzLm92ZXJsYXlDb250YWluZXJcbiAgICApO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmluZGV4ICsgMTtcbiAgICBsZXQgc2FuaXRpemVkTWVzc2FnZTogc3RyaW5nIHwgU2FmZUh0bWwgfCB1bmRlZmluZWQgfCBudWxsID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSAmJiBjb25maWcuZW5hYmxlSHRtbCkge1xuICAgICAgc2FuaXRpemVkTWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcbiAgICAgIHRoaXMuaW5kZXgsXG4gICAgICBjb25maWcsXG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0b2FzdFR5cGUsXG4gICAgICB0b2FzdFJlZlxuICAgICk7XG4gICAgY29uc3QgdG9hc3RJbmplY3RvciA9IG5ldyBUb2FzdEluamVjdG9yKHRvYXN0UGFja2FnZSwgdGhpcy5faW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29uZmlnLnRvYXN0Q29tcG9uZW50LCB0b2FzdEluamVjdG9yKTtcbiAgICBjb25zdCBwb3J0YWwgPSBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQsIHRoaXMudG9hc3RyQ29uZmlnLm5ld2VzdE9uVG9wKTtcbiAgICB0b2FzdFJlZi5jb21wb25lbnRJbnN0YW5jZSA9ICg8YW55PnBvcnRhbCkuX2NvbXBvbmVudDtcbiAgICBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0PGFueT4gPSB7XG4gICAgICB0b2FzdElkOiB0aGlzLmluZGV4LFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCAnJyxcbiAgICAgIHRvYXN0UmVmLFxuICAgICAgb25TaG93bjogdG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLFxuICAgICAgb25IaWRkZW46IHRvYXN0UmVmLmFmdGVyQ2xvc2VkKCksXG4gICAgICBvblRhcDogdG9hc3RQYWNrYWdlLm9uVGFwKCksXG4gICAgICBvbkFjdGlvbjogdG9hc3RQYWNrYWdlLm9uQWN0aW9uKCksXG4gICAgICBwb3J0YWxcbiAgICB9O1xuXG4gICAgaWYgKCFrZWVwSW5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnMudG9hc3RSZWYuYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnRvYXN0cy5wdXNoKGlucyk7XG4gICAgcmV0dXJuIGlucztcbiAgfVxufVxuIl19