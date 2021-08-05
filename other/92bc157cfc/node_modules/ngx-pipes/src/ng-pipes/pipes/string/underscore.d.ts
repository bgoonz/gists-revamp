import { PipeTransform } from '@angular/core';
export declare class UnderscorePipe implements PipeTransform {
    transform(input: string, chars?: string): string;
    transform(input: any, chars?: string): any;
}
