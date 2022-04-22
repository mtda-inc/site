import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNgTwComponent } from './section-ng-tw.component';

describe('SectionNgTwComponent', () => {
  let component: SectionNgTwComponent;
  let fixture: ComponentFixture<SectionNgTwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNgTwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNgTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
