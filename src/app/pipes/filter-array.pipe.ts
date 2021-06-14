import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(values: string [], pattern: string = ''): string [] {
    return values.filter((value)=>value.toLowerCase().includes(pattern.toLowerCase()))
  }

}
