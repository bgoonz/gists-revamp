import { PipeTransform } from '@angular/core';
export declare class PluckPipe implements PipeTransform {
    transform(input: any[], map: string): any[];
    transform(input: any, map: string): any;
    transform<T>(input: T, map: string): T;
}
