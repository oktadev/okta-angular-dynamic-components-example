import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SmileyComponent } from './smiley.component';

describe('SmileyComponent', () => {
  let component: SmileyComponent;
  let fixture: ComponentFixture<SmileyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileyComponent ],
      imports: [
        MatCardModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyComponent);
    component = fixture.componentInstance;
    component.data = {url: ''};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
