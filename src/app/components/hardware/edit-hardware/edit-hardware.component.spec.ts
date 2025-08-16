import { ComponentFixture, TestBed } from '@angular/core/testing';

import  EditHardware  from './edit-hardware.component';

describe('EditHardware', () => {
  let component: EditHardware;
  let fixture: ComponentFixture<EditHardware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHardware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
