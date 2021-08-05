/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, HostBinding, HostListener, NgModule } from '@angular/core';
import { ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
export class ToastNoAnimation {
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
function ToastNoAnimation_tsickle_Closure_declarations() {
    /** @type {?} */
    ToastNoAnimation.prototype.message;
    /** @type {?} */
    ToastNoAnimation.prototype.title;
    /** @type {?} */
    ToastNoAnimation.prototype.options;
    /** @type {?} */
    ToastNoAnimation.prototype.originalTimeout;
    /**
     * width of progress bar
     * @type {?}
     */
    ToastNoAnimation.prototype.width;
    /**
     * a combination of toast type and options.toastClass
     * @type {?}
     */
    ToastNoAnimation.prototype.toastClasses;
    /**
     * controls animation
     * @type {?}
     */
    ToastNoAnimation.prototype.state;
    /** @type {?} */
    ToastNoAnimation.prototype.timeout;
    /** @type {?} */
    ToastNoAnimation.prototype.intervalId;
    /** @type {?} */
    ToastNoAnimation.prototype.hideTime;
    /** @type {?} */
    ToastNoAnimation.prototype.sub;
    /** @type {?} */
    ToastNoAnimation.prototype.sub1;
    /** @type {?} */
    ToastNoAnimation.prototype.sub2;
    /** @type {?} */
    ToastNoAnimation.prototype.toastrService;
    /** @type {?} */
    ToastNoAnimation.prototype.toastPackage;
    /** @type {?} */
    ToastNoAnimation.prototype.appRef;
}
export class ToastNoAnimationModule {
}
ToastNoAnimationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ToastNoAnimation],
                exports: [ToastNoAnimation],
                entryComponents: [ToastNoAnimation]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm9hbmltYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvYXN0ci8iLCJzb3VyY2VzIjpbInRvYXN0ci90b2FzdC1ub2FuaW1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFFBQVEsRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQW9CLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXVCakQsTUFBTTs7Ozs7O0lBMkJKLFlBQ1ksYUFBNEIsRUFDL0IsY0FDRyxNQUFzQjtRQUZ0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixpQkFBWSxHQUFaLFlBQVk7UUFDVCxXQUFNLEdBQU4sTUFBTSxDQUFnQjs7OztxQkF4QjFCLENBQUMsQ0FBQzs7Ozs0QkFFMkIsRUFBRTs7OztxQkFXL0IsVUFBVTtRQWFoQixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxZQUFZLENBQUMsU0FBUyxJQUMzQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQ3RCLEVBQUUsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENB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QyxnQkFBZ0IsQ0FBQztnQkFDM0IsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1t0b2FzdC1jb21wb25lbnRdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxidXR0b24gKm5nSWY9XCJvcHRpb25zLmNsb3NlQnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZSgpXCIgY2xhc3M9XCJ0b2FzdC1jbG9zZS1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzXT1cIm9wdGlvbnMudGl0bGVDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIj5cclxuICAgIHt7IHRpdGxlIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCJcclxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmICFvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXNzYWdlXCI+XHJcbiAgICB7eyBtZXNzYWdlIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm9wdGlvbnMucHJvZ3Jlc3NCYXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1wcm9ncmVzc1wiIFtzdHlsZS53aWR0aF09XCJ3aWR0aCArICclJ1wiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcclxuICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcclxuICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXHJcbiAgd2lkdGggPSAtMTtcclxuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdG9hc3RDbGFzc2VzID0gJyc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XHJcbiAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIGNvbnRyb2xzIGFuaW1hdGlvbiAqL1xyXG4gIHN0YXRlID0gJ2luYWN0aXZlJztcclxuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcclxuICBwcml2YXRlIGludGVydmFsSWQ6IGFueTtcclxuICBwcml2YXRlIGhpZGVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcclxuICAgIHB1YmxpYyB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcclxuICAgIHByb3RlY3RlZCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcclxuICAgIHRoaXMudGl0bGUgPSB0b2FzdFBhY2thZ2UudGl0bGU7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0b2FzdFBhY2thZ2UuY29uZmlnO1xyXG4gICAgdGhpcy5vcmlnaW5hbFRpbWVvdXQgPSB0b2FzdFBhY2thZ2UuY29uZmlnLnRpbWVPdXQ7XHJcbiAgICB0aGlzLnRvYXN0Q2xhc3NlcyA9IGAke3RvYXN0UGFja2FnZS50b2FzdFR5cGV9ICR7XHJcbiAgICAgIHRvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc1xyXG4gICAgfWA7XHJcbiAgICB0aGlzLnN1YiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi5hZnRlckFjdGl2YXRlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ViMSA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi5tYW51YWxDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YjIgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYudGltZW91dFJlc2V0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnN1YjEudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3ViMi51bnN1YnNjcmliZSgpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGFjdGl2YXRlcyB0b2FzdCBhbmQgc2V0cyB0aW1lb3V0XHJcbiAgICovXHJcbiAgYWN0aXZhdGVUb2FzdCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSAnYWN0aXZlJztcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVUaW1lT3V0ICYmIHRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0sIHRoaXMub3B0aW9ucy50aW1lT3V0KTtcclxuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkFjdGl2YXRlVGljaykge1xyXG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCB8fCB0aGlzLndpZHRoID09PSAxMDAgfHwgIXRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcclxuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0FuaW1hdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpZHRoID49IDEwMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRUaW1lb3V0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcmlnaW5hbFRpbWVvdXQ7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3JpZ2luYWxUaW1lb3V0KTtcclxuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICh0aGlzLm9yaWdpbmFsVGltZW91dCB8fCAwKTtcclxuICAgIHRoaXMud2lkdGggPSAtMTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXHJcbiAgICovXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMuc3RhdGUgPSAncmVtb3ZlZCc7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgIHRoaXMudG9hc3RyU2VydmljZS5yZW1vdmUodGhpcy50b2FzdFBhY2thZ2UudG9hc3RJZClcclxuICAgICk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICB0YXBUb2FzdCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgc3RpY2tBcm91bmQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSAwO1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBwcm9ncmVzc0JhclxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCB8fFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0ID09PSAwIHx8XHJcbiAgICAgIHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+IHRoaXMucmVtb3ZlKCksXHJcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXRcclxuICAgICk7XHJcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQ7XHJcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XHJcbiAgICB0aGlzLndpZHRoID0gLTE7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdE5vQW5pbWF0aW9uXSxcclxuICBleHBvcnRzOiBbVG9hc3ROb0FuaW1hdGlvbl0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3ROb0FuaW1hdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb25Nb2R1bGUge31cclxuIl19