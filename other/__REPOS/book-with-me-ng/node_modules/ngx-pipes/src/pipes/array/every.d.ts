import { PipeTransform } from '@angular/core';
export declare class EveryPipe implements PipeTransform {
    transform(input: any, predicate: (value: any, index: number, array: any[]) => boolean): boolean | any[];
}
