import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteHardware} from './delete-hardware';

describe('DeleteHardware', () => {
  let component: DeleteHardware;
  let fixture: ComponentFixture<DeleteHardware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteHardware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHardware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
