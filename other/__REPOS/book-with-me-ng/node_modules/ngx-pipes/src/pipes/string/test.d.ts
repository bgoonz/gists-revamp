import { PipeTransform } from '@angular/core';
export declare class TestPipe implements PipeTransform {
    transform(text: string, pattern: string, flags?: string): boolean;
    transform<T>(text: T, pattern: string, flags?: string): T;
}
