import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Directive } from '../../directives';
import { Pipes } from '../../pipes';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Directive,
    ...Pipes
  ],
  exports: [
    CommonModule,
    ...Directive,
    ...Pipes
  ]
})
export class SharedModule { }
