import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageHardware} from './page-hardware';

describe('PageHardware', () => {
  let component: PageHardware;
  let fixture: ComponentFixture<PageHardware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHardware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHardware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
