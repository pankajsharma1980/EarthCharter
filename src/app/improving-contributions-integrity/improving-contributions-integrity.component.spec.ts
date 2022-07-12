import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingContributionsIntegrityComponent } from './improving-contributions-integrity.component';

describe('ImprovingContributionsIntegrityComponent', () => {
  let component: ImprovingContributionsIntegrityComponent;
  let fixture: ComponentFixture<ImprovingContributionsIntegrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprovingContributionsIntegrityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovingContributionsIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
