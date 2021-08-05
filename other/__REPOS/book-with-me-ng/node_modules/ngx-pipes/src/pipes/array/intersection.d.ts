import { PipeTransform } from '@angular/core';
export declare class IntersectionPipe implements PipeTransform {
    transform(input: any[], ...args: any[]): any[];
    transform<T>(input: T, ...args: any[]): T;
}
