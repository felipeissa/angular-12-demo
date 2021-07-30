import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { DataBindingModule } from '../data-binding/data-binding.module';



@NgModule({
  declarations: [ContentParentComponent, ContentChildComponent],
  imports: [
    CommonModule,
    DataBindingModule
  ]
})
export class ContentModule { }
