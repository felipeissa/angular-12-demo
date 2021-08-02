import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterSetterComponent } from './getter-setter.component';

describe('GetterSetterComponent', () => {
  let component: GetterSetterComponent;
  let fixture: ComponentFixture<GetterSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetterSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetterSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
