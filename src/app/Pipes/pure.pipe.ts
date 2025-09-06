import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    return value*value;
  }
}
