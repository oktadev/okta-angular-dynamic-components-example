import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/message';
import { DynamicComponent } from './dynamic.component';

@Component({  
  selector: 'app-pawesome',  
  template: `  
    <mat-card class="card">
      <mat-card-header>
        <mat-card-title>{{data.content.name}}</mat-card-title>  
        <mat-card-subtitle>Good doggo</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="{{data.url}}" alt="Photo of a pawesome creature" >  
      <mat-card-content>
        <p> {{data.content.about}} </p>
      </mat-card-content>
    </mat-card>
  `,  
  styles: [` .card { max-width: 300px; } `]  
})  
export class PawesomeComponent implements DynamicComponent {  
 @Input() data!: MessageData;  
}
