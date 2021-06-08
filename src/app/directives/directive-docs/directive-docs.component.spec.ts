import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDocsComponent } from './directive-docs.component';

describe('DirectiveDocsComponent', () => {
  let component: DirectiveDocsComponent;
  let fixture: ComponentFixture<DirectiveDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
