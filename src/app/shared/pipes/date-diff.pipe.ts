import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    let diff = (new Date(value).getTime() - args.getTime()) / (1000 * 3600 * 24);
    return diff;
  }

}
