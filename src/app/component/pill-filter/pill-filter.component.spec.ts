import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillFilterComponent } from './pill-filter.component';

describe('PillFilterComponent', () => {
  let component: PillFilterComponent;
  let fixture: ComponentFixture<PillFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
