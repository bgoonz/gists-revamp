import { PipeTransform } from '@angular/core';
export declare class IsLessThanPipe implements PipeTransform {
    transform(input: number, other: number): boolean;
}
