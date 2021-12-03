import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OktaAuthStateService } from '@okta/okta-angular';
import { UserClaims, IDToken, AuthState } from '@okta/okta-auth-js';
import { of } from 'rxjs';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const claims: UserClaims = {
    sub: 'sub',
    name: 'Test Name'
  };

  const idToken: IDToken = {
    idToken: 'token',
    clientId: 'client',
    issuer: 'issuer',
    authorizeUrl: 'authorize',
    expiresAt: 123,
    scopes: [],
    claims
  };

  const authState: AuthState = {
    isAuthenticated: true,
    idToken
  };

  let authStateSpy = jasmine.createSpyObj<OktaAuthStateService>([],['authState$']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [
        { provide: OktaAuthStateService, useValue: authStateSpy }
      ]
    });
  });

  it('should show text that welcomes the user by name', () => {
    (Object.getOwnPropertyDescriptor(authStateSpy, 'authState$')?.get as jasmine.Spy).and.returnValue(of(authState));
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const spanEl = fixture.debugElement.query(By.css('span'));
    expect(spanEl).toBeTruthy();
    expect(spanEl.nativeElement.innerHTML).toEqual('Test Name');
  });

  it('should show text that welcomes a user with no name', () => {
    (Object.getOwnPropertyDescriptor(authStateSpy, 'authState$')?.get as jasmine.Spy).and.returnValue(of({
      isAuthenticated: true,
      idToken: {...idToken, claims: {sub: 'sub'}}
    }));

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const spanEl = fixture.debugElement.query(By.css('span'));
    expect(spanEl).toBeFalsy();
  });
});
