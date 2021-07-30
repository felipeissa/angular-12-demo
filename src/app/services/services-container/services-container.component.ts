import { Component, OnInit } from '@angular/core';
import { ModuleServiceService } from '../module-service/module-service.service';
import { RootServiceService } from '../root-service.service';

@Component({
  selector: 'app-services-container',
  templateUrl: './services-container.component.html',
  styleUrls: ['./services-container.component.scss']
})
export class ServicesContainerComponent implements OnInit {

  message = '';
  constructor(
    private readonly moduleService: ModuleServiceService,
    private readonly rootService: RootServiceService
  ) { }

  ngOnInit() {
  }

  executeModuleService() {
    const value = this.moduleService.calculate();

    this.message = `Module service returned value ${value}`;
  }

  executeRootService() {
    const value = this.rootService.calculate();

    value.subscribe((subscribeValue) => this.message = `Root subscribe value is ${subscribeValue}`)

    this.message = `Root service returned value ${value}`;
  }

}
