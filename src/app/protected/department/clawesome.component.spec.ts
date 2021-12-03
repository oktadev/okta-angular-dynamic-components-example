import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClawesomeComponent } from './clawesome.component';

describe('ClawesomeComponent', () => {
  let component: ClawesomeComponent;
  let fixture: ComponentFixture<ClawesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClawesomeComponent ],
      imports: [
        MatCardModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClawesomeComponent);
    component = fixture.componentInstance;
    component.data = {url: '', content: 'testing'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
