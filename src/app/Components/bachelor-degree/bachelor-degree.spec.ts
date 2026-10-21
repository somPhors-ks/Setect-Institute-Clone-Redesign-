import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorDegree } from './bachelor-degree';

describe('BachelorDegree', () => {
  let component: BachelorDegree;
  let fixture: ComponentFixture<BachelorDegree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachelorDegree],
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorDegree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
