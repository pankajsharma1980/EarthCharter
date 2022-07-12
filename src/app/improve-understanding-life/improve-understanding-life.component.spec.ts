import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveUnderstandingLifeComponent } from './improve-understanding-life.component';

describe('ImproveUnderstandingLifeComponent', () => {
  let component: ImproveUnderstandingLifeComponent;
  let fixture: ComponentFixture<ImproveUnderstandingLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveUnderstandingLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveUnderstandingLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
