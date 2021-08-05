import { PipeTransform } from '@angular/core';
export declare class PercentagePipe implements PipeTransform {
    transform(num: number, total?: number, floor?: boolean): number;
    transform<T>(num: T, total?: number, floor?: boolean): T;
}
