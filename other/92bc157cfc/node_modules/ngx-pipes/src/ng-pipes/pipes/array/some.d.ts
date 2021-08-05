import { PipeTransform } from '@angular/core';
export declare class SomePipe implements PipeTransform {
    transform(input: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean;
    transform<T>(input: T, predicate: (value: any, index: number, array: any[]) => boolean): T;
}
