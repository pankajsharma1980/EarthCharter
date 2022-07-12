import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveUnderstandingPlanetComponent } from './improve-understanding-planet.component';

describe('ImproveUnderstandingPlanetComponent', () => {
  let component: ImproveUnderstandingPlanetComponent;
  let fixture: ComponentFixture<ImproveUnderstandingPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveUnderstandingPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveUnderstandingPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
