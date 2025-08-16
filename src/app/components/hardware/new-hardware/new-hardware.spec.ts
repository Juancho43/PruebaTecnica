import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHardware } from './new-hardware';

describe('NewHardware', () => {
  let component: NewHardware;
  let fixture: ComponentFixture<NewHardware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHardware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHardware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
