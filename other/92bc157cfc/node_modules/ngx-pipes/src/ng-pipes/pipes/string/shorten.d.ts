import { PipeTransform } from '@angular/core';
export declare class ShortenPipe implements PipeTransform {
    transform(input: string, length?: number, suffix?: string, wordBreak?: boolean): string;
    transform(input: any, length?: number, suffix?: string, wordBreak?: boolean): any;
}
