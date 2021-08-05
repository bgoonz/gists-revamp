import { PipeTransform } from '@angular/core';
export declare class TimeAgoPipe implements PipeTransform {
    private static YEAR_MS;
    private static MAPPER;
    /**
     * @param inputDate: Date | Moment - not included as TypeScript interface,
     * in order to keep `ngx-pipes` "pure" from dependencies!
     */
    transform(inputDate: any): string;
}
