import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCompanyComponent } from './section-company.component';

describe('SectionCompanyComponent', () => {
  let component: SectionCompanyComponent;
  let fixture: ComponentFixture<SectionCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
