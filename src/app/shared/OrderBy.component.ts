import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], arg: string): any {

    if (arg === 'desc') {
      return value.reverse();
    }
  }

}
