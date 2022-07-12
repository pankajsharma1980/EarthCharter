import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContributionsJusticeComponent } from './index-contributions-justice.component';

describe('IndexContributionsJusticeComponent', () => {
  let component: IndexContributionsJusticeComponent;
  let fixture: ComponentFixture<IndexContributionsJusticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexContributionsJusticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexContributionsJusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
