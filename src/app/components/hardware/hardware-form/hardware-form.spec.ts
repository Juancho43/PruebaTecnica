import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareForm } from './hardware-form';

describe('HardwareForm', () => {
  let component: HardwareForm;
  let fixture: ComponentFixture<HardwareForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
