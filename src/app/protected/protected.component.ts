import { Component, OnInit } from '@angular/core';

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
      <app-department></app-department>  
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

  constructor() { }

  ngOnInit(): void {
  }

}
