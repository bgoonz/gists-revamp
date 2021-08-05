import { PipeTransform } from '@angular/core';
export declare class LeftPadPipe implements PipeTransform {
    transform(str: string, length: number, padCharacter?: string): string;
}
