import { PipeTransform } from '@angular/core';
export declare class UniquePipe implements PipeTransform {
    transform(input: any[], args?: string | undefined): any[];
    transform<T>(input: T, args?: string | undefined): T;
}
