import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PawesomeComponent } from './pawesome.component';

describe('PawesomeComponent', () => {
  let component: PawesomeComponent;
  let fixture: ComponentFixture<PawesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawesomeComponent ],
      imports: [
        MatCardModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PawesomeComponent);
    component = fixture.componentInstance;
    component.data = {url: '', content: { about: 'testing', name: 'test'}};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
