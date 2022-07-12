import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContributionsIntegrityComponent } from './index-contributions-integrity.component';

describe('IndexContributionsIntegrityComponent', () => {
  let component: IndexContributionsIntegrityComponent;
  let fixture: ComponentFixture<IndexContributionsIntegrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexContributionsIntegrityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexContributionsIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
