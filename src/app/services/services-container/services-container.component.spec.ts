import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleServiceService } from '../module-service/module-service.service';

import { ServicesContainerComponent } from './services-container.component';

describe('ServicesContainerComponent', () => {
  let component: ServicesContainerComponent;
  let fixture: ComponentFixture<ServicesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesContainerComponent],
      providers: [ModuleServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
