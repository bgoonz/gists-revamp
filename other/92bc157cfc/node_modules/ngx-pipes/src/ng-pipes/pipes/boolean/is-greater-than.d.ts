import { PipeTransform } from '@angular/core';
export declare class IsGreaterThanPipe implements PipeTransform {
    transform(input: number, other: number): boolean;
}
