import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-smiley',
  template: `
    <p>
      smiley works!
    </p>
  `,
  styles: [
  ]
})
export class SmileyComponent implements DynamicComponent {

  constructor() { }

}
