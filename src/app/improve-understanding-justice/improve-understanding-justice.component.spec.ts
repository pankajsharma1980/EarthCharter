import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveUnderstandingJusticeComponent } from './improve-understanding-justice.component';

describe('ImproveUnderstandingJusticeComponent', () => {
  let component: ImproveUnderstandingJusticeComponent;
  let fixture: ComponentFixture<ImproveUnderstandingJusticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveUnderstandingJusticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveUnderstandingJusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
