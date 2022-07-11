import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveUnderstandingComponent } from './improve-understanding.component';

describe('ImproveUnderstandingComponent', () => {
  let component: ImproveUnderstandingComponent;
  let fixture: ComponentFixture<ImproveUnderstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveUnderstandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveUnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
