import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHarware } from './edit-harware';

describe('EditHarware', () => {
  let component: EditHarware;
  let fixture: ComponentFixture<EditHarware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHarware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHarware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
