import * as $ from 'jquery'; // For Angular 6

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Directive } from '../../directives';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Directive
  ],
  exports: [
    CommonModule,
    ...Directive
  ]
})
export class SharedModule { }
