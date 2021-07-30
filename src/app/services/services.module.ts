import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesContainerComponent } from './services-container/services-container.component';
import { ModuleServiceService } from './module-service/module-service.service';

@NgModule({
  declarations: [ServicesContainerComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ModuleServiceService
  ]
})
export class ServicesModule { }
