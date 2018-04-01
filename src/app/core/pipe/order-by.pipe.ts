import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(objects: any[], orderBy: string, isAsk?: boolean): any[] {
    let objectsCopy: any[] = objects;
    if (objects && orderBy) {
      objectsCopy = objectsCopy.slice(0);
      objectsCopy.sort(function (a, b) {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (aValue === bValue) return 0;
        if (aValue < bValue) return isAsk ? -1 : 1;
        if (aValue > bValue) return isAsk ? 1 : -1;
        return 0;
      });
    }
    return objectsCopy;
  }

}
