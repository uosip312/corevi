import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchuser'
})
export class SearchuserPipe implements PipeTransform {

  transform(users: any[], searchText: string): any[] {
    if (!users) { return []; }
    if (!searchText) { return users; }
    searchText = searchText.toLowerCase();
    return users.filter((it) => {
      return (
        it.name.toLowerCase().includes(searchText) ||
        it.user.toLowerCase().includes(searchText)
      );
    });
  }

}
