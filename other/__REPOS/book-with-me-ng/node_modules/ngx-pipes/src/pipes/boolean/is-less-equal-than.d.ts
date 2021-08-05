import { PipeTransform } from '@angular/core';
export declare class IsLessEqualThanPipe implements PipeTransform {
    transform(input: number, other: number): boolean;
}
