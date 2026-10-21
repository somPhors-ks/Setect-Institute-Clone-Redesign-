import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgingCourse } from './bridging-course';

describe('BridgingCourse', () => {
  let component: BridgingCourse;
  let fixture: ComponentFixture<BridgingCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgingCourse],
    }).compileComponents();

    fixture = TestBed.createComponent(BridgingCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
