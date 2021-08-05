import { PipeTransform } from '@angular/core';
export declare class MakePluralStringPipe implements PipeTransform {
    private irregularMap;
    transform(singularEntity: string, quantity?: number): string;
}
