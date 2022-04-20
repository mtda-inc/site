import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStackComponent } from './section-stack.component';

describe('SectionStackComponent', () => {
  let component: SectionStackComponent;
  let fixture: ComponentFixture<SectionStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
