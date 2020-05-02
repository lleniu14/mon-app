import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSoldierComponent } from './section-soldier.component';

describe('SectionSoldierComponent', () => {
  let component: SectionSoldierComponent;
  let fixture: ComponentFixture<SectionSoldierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSoldierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
