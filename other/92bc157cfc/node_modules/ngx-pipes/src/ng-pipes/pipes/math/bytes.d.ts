import { PipeTransform } from '@angular/core';
export declare class BytesPipe implements PipeTransform {
    private dictionary;
    transform(value: number, precision?: number | undefined): string | number;
}
