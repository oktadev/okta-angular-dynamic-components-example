import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClawesomeComponent } from './clawesome.component';

describe('ClawesomeComponent', () => {
  let component: ClawesomeComponent;
  let fixture: ComponentFixture<ClawesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClawesomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
