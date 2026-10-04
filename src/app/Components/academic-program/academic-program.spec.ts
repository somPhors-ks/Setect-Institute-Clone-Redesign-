import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgram } from './academic-program';

describe('AcademicProgram', () => {
  let component: AcademicProgram;
  let fixture: ComponentFixture<AcademicProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicProgram],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicProgram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
