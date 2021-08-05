import { PipeTransform } from '@angular/core';
export declare class SumPipe implements PipeTransform {
    transform(num: any[]): number;
    transform<T>(num: any): T;
}
