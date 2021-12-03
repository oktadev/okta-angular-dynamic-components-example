import { Component } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { AuthState } from '@okta/okta-auth-js';
import { Observable, filter, map } from 'rxjs';

@Component({  
  selector: 'app-profile',  
  template: `  
    <ng-container *ngIf="name$ | async as name ">
      <span class="mat-body-1">{{name}}</span>  
    </ng-container> 
`})  
export class ProfileComponent {  
  public name$: Observable<string> = this._authStateService.authState$.pipe( 
    filter((s: AuthState) => !!s && !!s.isAuthenticated),  
    map((s: AuthState) => s.idToken?.claims.name ?? '')  
  );  
  
  constructor(private _authStateService: OktaAuthStateService) { }  
}
