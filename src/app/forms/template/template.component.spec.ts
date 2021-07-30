import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TemplateComponent } from './template.component';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateComponent],
      imports: [FormsModule, MatFormFieldModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
