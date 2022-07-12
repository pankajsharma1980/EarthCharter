import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveUnderstandingIntegrityComponent } from './improve-understanding-integrity.component';

describe('ImproveUnderstandingIntegrityComponent', () => {
  let component: ImproveUnderstandingIntegrityComponent;
  let fixture: ComponentFixture<ImproveUnderstandingIntegrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveUnderstandingIntegrityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveUnderstandingIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
