import { PipeTransform } from '@angular/core';
export declare class LatinisePipe implements PipeTransform {
    private latinMap;
    transform(input: string, chars?: string): string;
    transform(input: any, chars?: string): any;
}
