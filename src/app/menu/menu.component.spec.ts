import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthStateService } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';
import { of } from 'rxjs';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const authState: AuthState = {
    isAuthenticated: false
  };

  let authStateSpy = jasmine.createSpyObj<OktaAuthStateService>([],
    {authState$: of(authState)});
  let authSpy = jasmine.createSpyObj<OktaAuth>(['signInWithRedirect', 'signOut']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: OktaAuthStateService, useValue: authStateSpy },
        { provide: OktaAuth, useValue: authSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signInWithRedirect with logging in', () => {
    authSpy.signInWithRedirect.and.resolveTo();
    component.login();
    expect(authSpy.signInWithRedirect).toHaveBeenCalled();
  });
});
