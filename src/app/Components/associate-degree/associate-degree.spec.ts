import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateDegree } from './associate-degree';

describe('AssociateDegree', () => {
  let component: AssociateDegree;
  let fixture: ComponentFixture<AssociateDegree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateDegree],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociateDegree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
