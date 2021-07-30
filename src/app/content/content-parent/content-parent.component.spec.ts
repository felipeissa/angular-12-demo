import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentChildComponent } from '../content-child/content-child.component';

import { ContentParentComponent } from './content-parent.component';

describe('ContentParentComponent', () => {
  let component: ContentParentComponent;
  let fixture: ComponentFixture<ContentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentParentComponent, ContentChildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
