import { InjectionToken } from '@angular/core';
export declare const LOCALE_CONFIG: InjectionToken<LocaleConfig>;
/**
 *  LocaleConfig Interface
 */
export interface LocaleConfig {
    direction?: string;
    separator?: string;
    weekLabel?: string;
    applyLabel?: string;
    cancelLabel?: string;
    clearLabel?: string;
    customRangeLabel?: string;
    daysOfWeek?: string[];
    monthNames?: string[];
    firstDay?: number;
    format?: string;
}
/**
 *  DefaultLocaleConfig
 */
export declare const DefaultLocaleConfig: LocaleConfig;
