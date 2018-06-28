import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const grid: number = 100/12;

@Pipe({
  name: 'calcWidth'
})
export class CalcWidthPipe implements PipeTransform {

  constructor(
    private _sanitizer: DomSanitizer
  ) {}

  transform(value: any, fromDate?: any, toDate?: any): any {

    let fromDiff = (new Date(fromDate).getTime() - value.getTime()) / (1000 * 3600 * 24);
    let toDiff = (new Date(toDate).getTime() - value.getTime()) / (1000 * 3600 * 24);
    let style = "width: calc(100%*1/12*"+ toDiff + ");left: "+ grid * fromDiff + "%;";

    return this._sanitizer.bypassSecurityTrustStyle(style.toString());
  }

}
