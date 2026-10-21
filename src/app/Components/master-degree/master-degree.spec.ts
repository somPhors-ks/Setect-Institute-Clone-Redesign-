import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDegree } from './master-degree';

describe('MasterDegree', () => {
  let component: MasterDegree;
  let fixture: ComponentFixture<MasterDegree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDegree],
    }).compileComponents();

    fixture = TestBed.createComponent(MasterDegree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
