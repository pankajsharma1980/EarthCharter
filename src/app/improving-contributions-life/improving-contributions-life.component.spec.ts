import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingContributionsLifeComponent } from './improving-contributions-life.component';

describe('ImprovingContributionsLifeComponent', () => {
  let component: ImprovingContributionsLifeComponent;
  let fixture: ComponentFixture<ImprovingContributionsLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingContributionsLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingContributionsLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
