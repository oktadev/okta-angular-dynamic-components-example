import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-clawesome',
  template: `
    <p>
      clawesome works!
    </p>
  `,
  styles: [
  ]
})
export class ClawesomeComponent implements DynamicComponent {

  constructor() { }

}
