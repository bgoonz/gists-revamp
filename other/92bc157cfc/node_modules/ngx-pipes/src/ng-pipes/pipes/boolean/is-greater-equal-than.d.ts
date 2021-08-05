import { PipeTransform } from '@angular/core';
export declare class IsGreaterEqualThanPipe implements PipeTransform {
    transform(input: number, other: number): boolean;
}
