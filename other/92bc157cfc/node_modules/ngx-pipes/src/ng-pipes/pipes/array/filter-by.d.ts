import { PipeTransform } from '@angular/core';
export declare class FilterByPipe implements PipeTransform {
    transform(input: any[], props: Array<string>, search?: any, strict?: boolean): any[];
    transform<T>(input: T, props: Array<string>, search?: any, strict?: boolean): T;
}
