import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false 
})
export class FlattenPipe implements PipeTransform {

  transform(value: any) {
    return value.flat(Infinity);
  }

}
