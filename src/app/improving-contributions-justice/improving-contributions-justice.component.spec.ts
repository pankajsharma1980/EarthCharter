import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingContributionsJusticeComponent } from './improving-contributions-justice.component';

describe('ImprovingContributionsJusticeComponent', () => {
  let component: ImprovingContributionsJusticeComponent;
  let fixture: ComponentFixture<ImprovingContributionsJusticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingContributionsJusticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingContributionsJusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
