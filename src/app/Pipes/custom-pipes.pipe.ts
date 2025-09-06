import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {
  private datePipe = new DatePipe('en-us');
  transform(value: unknown, mode: string): any {
    switch(mode){
      case 'phone': return (value === null || value === "" || value === undefined)? "NA" : "+91 "+value;
      case 'date': return this.datePipe.transform(value as Date, 'dd/MMMM/yyyy');
    }
  }
}
