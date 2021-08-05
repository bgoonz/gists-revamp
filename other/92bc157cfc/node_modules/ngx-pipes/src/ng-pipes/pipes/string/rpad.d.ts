import { PipeTransform } from '@angular/core';
export declare class RightPadPipe implements PipeTransform {
    transform(str: string, length?: number, padCharacter?: string): string;
}
