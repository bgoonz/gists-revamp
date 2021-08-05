import { PipeTransform } from '@angular/core';
export declare class WrapPipe implements PipeTransform {
    transform(str: string, prefix?: string, suffix?: string): string;
}
