import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingContributionsPlanetComponent } from './improving-contributions-planet.component';

describe('ImprovingContributionsPlanetComponent', () => {
  let component: ImprovingContributionsPlanetComponent;
  let fixture: ComponentFixture<ImprovingContributionsPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingContributionsPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingContributionsPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
