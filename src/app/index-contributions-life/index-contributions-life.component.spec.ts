import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContributionsLifeComponent } from './index-contributions-life.component';

describe('IndexContributionsLifeComponent', () => {
  let component: IndexContributionsLifeComponent;
  let fixture: ComponentFixture<IndexContributionsLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexContributionsLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexContributionsLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
