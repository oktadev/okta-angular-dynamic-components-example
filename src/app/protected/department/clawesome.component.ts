import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/message';
import { DynamicComponent } from './dynamic.component';

@Component({  
  selector: 'app-clawesome',  
  template:  `  
    <mat-card class="card">
      <img mat-card-image src="{{data.url}}" alt="Photo of a clawesome creature" >  
      <mat-card-content>
        <p>{{data.content}}</p>  
      </mat-card-content>
    </mat-card>
  `,  
  styles: [` .card { max-width: 300px; } `]  
})  
export class ClawesomeComponent implements DynamicComponent {  
 @Input() data!: MessageData;  
}
