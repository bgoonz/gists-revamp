import { PipeTransform } from '@angular/core';
export declare class MatchPipe implements PipeTransform {
    transform(text: string, pattern: string, flags?: string): RegExpMatchArray | null;
    transform<T>(text: T, pattern: string, flags?: string): T;
}
