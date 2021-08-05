import { PipeTransform } from '@angular/core';
export declare class TailPipe implements PipeTransform {
    transform(input: any[], num?: number): any[];
    transform<T>(input: T, num?: number): T;
}
