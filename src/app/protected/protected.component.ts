import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { AuthState } from '@okta/okta-auth-js';
import { filter, map, take } from 'rxjs';
import { MessageItem } from '../message';
import { MessageService } from '../message.service';

@Component({  
  selector: 'app-protected',  
  template: `  
    <div class="dashboard">
      <main>
        <h2>My tasks</h2>
        <mat-selection-list #todo class="task-list">
          <mat-list-option *ngFor="let task of tasks">  
            {{task}}  
          </mat-list-option>
        </mat-selection-list>
      </main>
      <app-department [messages]="messages"></app-department>  
   </div>
   `,  
  styles: [`  
    .dashboard { 
      margin-top: 2rem; display: flex;  
      main { 
        width: 75%;
        h2 { text-align: center; }
        .task-list { width: 80%; margin: auto; }
        mat-selection-list { max-width: 800px; }
      }
    }
  `]  
})
export class ProtectedComponent implements OnInit {

  public tasks: string[] = [
    'Respond to that one email',
    'Look into the thing',
    'Reply to their inquiry',
    'Set up the automation'
  ];

  public messages: MessageItem[] = [];

  constructor(private _authStateService: OktaAuthStateService, private _messageService: MessageService) { }  

  ngOnInit(): void {
    this._authStateService.authState$.pipe(  
      filter((s: AuthState) => !!s && !!s.isAuthenticated),  
      map((s: AuthState) => +s.idToken?.claims['department'] ?? 0),  
      take(1)  
    ).subscribe(  
      (d: number) => this.messages = this._messageService.getMessages(d)  
    );  
  }

}
