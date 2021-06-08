import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDocsComponent } from './pipe-docs.component';

describe('PipeDocsComponent', () => {
  let component: PipeDocsComponent;
  let fixture: ComponentFixture<PipeDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
