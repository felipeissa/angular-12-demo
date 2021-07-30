import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [TemplateComponent, ReactiveComponent],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class FormsModule { }
