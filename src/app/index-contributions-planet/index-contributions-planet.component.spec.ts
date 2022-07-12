import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContributionsPlanetComponent } from './index-contributions-planet.component';

describe('IndexContributionsPlanetComponent', () => {
  let component: IndexContributionsPlanetComponent;
  let fixture: ComponentFixture<IndexContributionsPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexContributionsPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexContributionsPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
