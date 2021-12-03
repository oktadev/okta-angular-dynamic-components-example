import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/message';
import { DynamicComponent } from './dynamic.component';

@Component({  
  selector: 'app-smiley',  
  template: `  
    <mat-card class="card">
      <img mat-card-image src="{{data.url}}" alt="Photo of a smiley creature" >  
      <mat-card-content>
        <p>SMILE!</p>
      </mat-card-content>
    </mat-card> `,  
  styles: [` .card { max-width: 300px; } `]
})  
export class SmileyComponent implements DynamicComponent {  
 @Input() public data!: MessageData;  
}
