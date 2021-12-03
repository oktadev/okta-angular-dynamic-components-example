import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedComponent } from './protected.component';
import { AuthState } from '@okta/okta-auth-js';
import { OktaAuthStateService } from '@okta/okta-angular';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from '../message.service';

describe('ProtectedComponent', () => {
  let component: ProtectedComponent;
  let fixture: ComponentFixture<ProtectedComponent>;

  const authState: AuthState = {
    isAuthenticated: true,
    idToken: {
      idToken: 'token',
      clientId: 'client',
      issuer: 'issuer',
      authorizeUrl: 'authorize',
      expiresAt: 123,
      scopes: [],
      claims: {
        sub: 'sub',
        name: 'Test Name',
        department: 3
      }
    }
  };

  let authStateSpy = jasmine.createSpyObj<OktaAuthStateService>([],
    {authState$: of(authState)});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedComponent ],
      imports: [
        MatListModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: OktaAuthStateService, useValue: authStateSpy },
        { provide: MessageService, useValue: {getMessages: (d: number) => []}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
