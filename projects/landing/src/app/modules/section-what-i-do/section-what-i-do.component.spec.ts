import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatIDoComponent } from './section-what-i-do.component';

describe('SectionWhatIDoComponent', () => {
  let component: SectionWhatIDoComponent;
  let fixture: ComponentFixture<SectionWhatIDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatIDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhatIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
