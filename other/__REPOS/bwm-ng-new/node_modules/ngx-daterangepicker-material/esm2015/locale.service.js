import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
let LocaleService = class LocaleService {
    constructor(_config) {
        this._config = _config;
    }
    get config() {
        if (!this._config) {
            return DefaultLocaleConfig;
        }
        return Object.assign({}, DefaultLocaleConfig, this._config);
    }
};
LocaleService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Inject(LOCALE_CONFIG)),
    tslib_1.__metadata("design:paramtypes", [Object])
], LocaleService);
export { LocaleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLyIsInNvdXJjZXMiOlsibG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFHNUYsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN4QixZQUEyQyxPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQUcsQ0FBQztJQUVwRSxJQUFJLE1BQU07UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLG1CQUFtQixDQUFDO1NBQzVCO1FBRUQseUJBQVksbUJBQW1CLEVBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUNwRCxDQUFDO0NBQ0YsQ0FBQTtBQVZZLGFBQWE7SUFEekIsVUFBVSxFQUFFO0lBRUUsbUJBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBOztHQUR2QixhQUFhLENBVXpCO1NBVlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTE9DQUxFX0NPTkZJRywgRGVmYXVsdExvY2FsZUNvbmZpZywgTG9jYWxlQ29uZmlnIH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9DT05GSUcpIHByaXZhdGUgX2NvbmZpZzogTG9jYWxlQ29uZmlnKSB7fVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0TG9jYWxlQ29uZmlnO1xuICAgIH1cblxuICAgIHJldHVybiB7Li4uIERlZmF1bHRMb2NhbGVDb25maWcsIC4uLnRoaXMuX2NvbmZpZ307XG4gIH1cbn1cbiJdfQ==