import { Book } from './../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yearSort'
})
export class YearSortPipe implements PipeTransform {

    transform(value: Book[], year: number): Book[] {

        return value
            .filter(b => b.readYear === year)
            .sort((a: Book, b: Book) => {
                const aNumDate = +new Date(+a.readYear, Math.abs(+a.readMonth - 1), +a.readDay);
                const bNumDate = +new Date(+b.readYear, Math.abs(+b.readMonth - 1), +b.readDay);
                return bNumDate - aNumDate;
            });
    }

}
