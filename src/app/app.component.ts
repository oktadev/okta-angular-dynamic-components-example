import { Component } from '@angular/core';

@Component({  
  selector: 'app-root',  
  template: `  
    <mat-toolbar color="primary" class="toolbar">
      <h1>My favorite work app</h1>
      <div>
        <app-profile></app-profile> 
        <app-menu></app-menu> 
      </div>
    </mat-toolbar>
    <router-outlet></router-outlet> 
  `,  
  styles: [`  
   .toolbar { display: flex; justify-content: space-between; }
 `]  
})  
export class AppComponent { }