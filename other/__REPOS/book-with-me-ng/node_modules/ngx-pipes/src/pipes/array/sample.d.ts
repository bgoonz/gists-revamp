import { PipeTransform } from '@angular/core';
export declare class SamplePipe implements PipeTransform {
    transform(input: any[], len?: number): any[];
    transform<T>(input: T, len?: number): T;
}
