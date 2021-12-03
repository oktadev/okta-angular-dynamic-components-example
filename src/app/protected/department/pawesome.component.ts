import { Component } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-pawesome',
  template: `
    <p>
      pawesome works!
    </p>
  `,
  styles: [
  ]
})
export class PawesomeComponent implements DynamicComponent {

  constructor() { }

}
