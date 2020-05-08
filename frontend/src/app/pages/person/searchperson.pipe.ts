import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchperson'
})
export class SearchpersonPipe implements PipeTransform {

  transform(persons: any[], searchText: string): any[] {
    if (!persons) { return []; }
    if (!searchText) { return persons; }
    searchText = searchText.toLowerCase();
    return persons.filter((it) => {
      return (
        it.nombre.toLowerCase().includes(searchText) ||
        it.cedula.toLowerCase().includes(searchText)
      );
    });
  }

}
