import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
var LocaleService = /** @class */ (function () {
    function LocaleService(_config) {
        this._config = _config;
    }
    Object.defineProperty(LocaleService.prototype, "config", {
        get: function () {
            if (!this._config) {
                return DefaultLocaleConfig;
            }
            return tslib_1.__assign({}, DefaultLocaleConfig, this._config);
        },
        enumerable: true,
        configurable: true
    });
    LocaleService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(LOCALE_CONFIG)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LocaleService);
    return LocaleService;
}());
export { LocaleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLyIsInNvdXJjZXMiOlsibG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFHNUY7SUFDRSx1QkFBMkMsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUFHLENBQUM7SUFFcEUsc0JBQUksaUNBQU07YUFBVjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLG1CQUFtQixDQUFDO2FBQzVCO1lBRUQsNEJBQVksbUJBQW1CLEVBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNwRCxDQUFDOzs7T0FBQTtJQVRVLGFBQWE7UUFEekIsVUFBVSxFQUFFO1FBRUUsbUJBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBOztPQUR2QixhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMT0NBTEVfQ09ORklHLCBEZWZhdWx0TG9jYWxlQ29uZmlnLCBMb2NhbGVDb25maWcgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0NPTkZJRykgcHJpdmF0ZSBfY29uZmlnOiBMb2NhbGVDb25maWcpIHt9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIERlZmF1bHRMb2NhbGVDb25maWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsuLi4gRGVmYXVsdExvY2FsZUNvbmZpZywgLi4udGhpcy5fY29uZmlnfTtcbiAgfVxufVxuIl19