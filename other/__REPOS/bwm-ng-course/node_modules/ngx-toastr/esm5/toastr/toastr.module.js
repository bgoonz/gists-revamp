/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { Overlay } from '../overlay/overlay';
import { OverlayContainer } from '../overlay/overlay-container';
import { DefaultGlobalConfig } from './default-config';
import { TOAST_CONFIG } from './toast-token';
import { Toast } from './toast.component';
import { ToastrService } from './toastr.service';
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
export { ToastrModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdHIvIiwic291cmNlcyI6WyJ0b2FzdHIvdG9hc3RyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQVUvQyxzQkFBb0MsWUFBMEI7UUFDNUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdHQUFnRyxDQUFDLENBQUM7U0FDbkg7S0FDRjs7Ozs7SUFDTSxvQkFBTzs7OztJQUFkLFVBQWUsTUFBa0M7UUFBbEMsdUJBQUEsRUFBQSxXQUFrQztRQUMvQyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxFQUFFO2dCQUM5RSxnQkFBZ0I7Z0JBQ2hCLE9BQU87Z0JBQ1AsYUFBYTthQUNkO1NBQ0YsQ0FBQztLQUNIOztnQkF0QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNoQixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ3JCLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztpQkFDekI7Ozs7Z0JBRW1ELFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFROzt1QkF4Qm5DOztTQXVCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IERlZmF1bHRHbG9iYWxDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtY29uZmlnJztcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbVG9hc3RdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0XSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBUb2FzdHJNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvYXN0ck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDxHbG9iYWxDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFRPQVNUX0NPTkZJRywgdXNlVmFsdWU6IHsgY29uZmlnLCBkZWZhdWx0czogRGVmYXVsdEdsb2JhbENvbmZpZyB9IH0sXG4gICAgICAgIE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgIE92ZXJsYXksXG4gICAgICAgIFRvYXN0clNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==