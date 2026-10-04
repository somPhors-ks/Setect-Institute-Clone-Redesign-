import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPage } from './academic-page';

describe('AcademicPage', () => {
  let component: AcademicPage;
  let fixture: ComponentFixture<AcademicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
