import * as tslib_1 from "tslib";
var NgxDaterangepickerMd_1;
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaterangepickerComponent } from './daterangepicker.component';
import { DaterangepickerDirective } from './daterangepicker.directive';
import { LOCALE_CONFIG } from './daterangepicker.config';
import { LocaleService } from './locale.service';
let NgxDaterangepickerMd = NgxDaterangepickerMd_1 = class NgxDaterangepickerMd {
    constructor() {
    }
    static forRoot(config = {}) {
        return {
            ngModule: NgxDaterangepickerMd_1,
            providers: [
                { provide: LOCALE_CONFIG, useValue: config },
                { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] }
            ]
        };
    }
};
NgxDaterangepickerMd = NgxDaterangepickerMd_1 = tslib_1.__decorate([
    NgModule({
        declarations: [
            DaterangepickerComponent,
            DaterangepickerDirective
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [],
        exports: [
            DaterangepickerComponent,
            DaterangepickerDirective
        ],
        entryComponents: [
            DaterangepickerComponent
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], NgxDaterangepickerMd);
export { NgxDaterangepickerMd };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBd0IsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFxQmpELElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFvQjtJQUMvQjtJQUNBLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQXVCLEVBQUU7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUMzQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQzthQUMxRTtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpZLG9CQUFvQjtJQW5CaEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osd0JBQXdCO1lBQ3hCLHdCQUF3QjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1NBQ3BCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7WUFDeEIsd0JBQXdCO1NBQ3pCO1FBQ0QsZUFBZSxFQUFFO1lBQ2Ysd0JBQXdCO1NBQ3pCO0tBQ0YsQ0FBQzs7R0FDVyxvQkFBb0IsQ0FZaEM7U0FaWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9jYWxlQ29uZmlnLCBMT0NBTEVfQ09ORklHIH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RGF0ZXJhbmdlcGlja2VyTWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IExvY2FsZUNvbmZpZyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hEYXRlcmFuZ2VwaWNrZXJNZCxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IExPQ0FMRV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICB7IHByb3ZpZGU6IExvY2FsZVNlcnZpY2UsIHVzZUNsYXNzOiBMb2NhbGVTZXJ2aWNlLCBkZXBzOiBbTE9DQUxFX0NPTkZJR119XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19