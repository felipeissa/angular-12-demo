import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildBindingComponent } from './child-binding/child-binding.component';



@NgModule({
  declarations: [DataBindingComponent, ChildBindingComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildBindingComponent]
})
export class DataBindingModule { }
