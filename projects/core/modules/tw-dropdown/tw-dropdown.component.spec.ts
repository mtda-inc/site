import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwDropdownComponent } from './tw-dropdown.component';

describe('TwDropdownComponent', () => {
  let component: TwDropdownComponent;
  let fixture: ComponentFixture<TwDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
