import { PipeTransform } from '@angular/core';
export declare class ShufflePipe implements PipeTransform {
    transform(input: any[]): any[];
    transform<T>(input: T): T;
}
