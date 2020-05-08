import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchvisit'
})
export class SearchvisitPipe implements PipeTransform {

  transform(visits: any[], searchText: string): any[] {
    if (!visits) { return []; }
    if (!searchText) { return visits; }
    searchText = searchText.toLowerCase();
    return visits.filter((it) => {
      return (
        it.nombre.toLowerCase().includes(searchText) ||
        it.department.toLowerCase().includes(searchText) ||
        it.status.toLowerCase().includes(searchText)
      );
    });
  }

}
