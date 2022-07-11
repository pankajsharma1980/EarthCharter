import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingContributionsComponent } from './improving-contributions.component';

describe('ImprovingContributionsComponent', () => {
  let component: ImprovingContributionsComponent;
  let fixture: ComponentFixture<ImprovingContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
