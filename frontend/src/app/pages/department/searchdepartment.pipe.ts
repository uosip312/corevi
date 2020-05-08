import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchdepartment'
})
export class SearchdepartmentPipe implements PipeTransform {

  transform(departments: any[], searchText: string): any[] {
    if (!departments) { return []; }
    if (!searchText) { return departments; }
    searchText = searchText.toLowerCase();
    return departments.filter((it) => {
      return (
        it.department.toLowerCase().includes(searchText));
    });
  }

}
