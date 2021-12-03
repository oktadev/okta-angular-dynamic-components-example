import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyComponent } from './smiley.component';

describe('SmileyComponent', () => {
  let component: SmileyComponent;
  let fixture: ComponentFixture<SmileyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
