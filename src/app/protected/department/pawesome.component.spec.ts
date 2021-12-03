import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawesomeComponent } from './pawesome.component';

describe('PawesomeComponent', () => {
  let component: PawesomeComponent;
  let fixture: ComponentFixture<PawesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawesomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
