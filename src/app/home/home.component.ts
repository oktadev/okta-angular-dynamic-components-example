import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-home',  
  template: `  
    <div class="welcome">
      <h2 class="mat-display-1">Welcome! Log in to get started.</h2>
      <img src="assets/undraw_welcome.svg" alt="welcome illustration" />
    </div> `,  
  styles: [`  
    .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;  
 
      h2 { margin: 3rem; }  
      img { width: 40%; } 
    } 
  `]  
})  
export class HomeComponent { }
