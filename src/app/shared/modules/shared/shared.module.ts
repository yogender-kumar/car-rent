import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { Directive } from '../../directives';
import { Pipes } from '../../pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...Directive,
    ...Pipes
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...Directive,
    ...Pipes
  ]
})
export class SharedModule { }
