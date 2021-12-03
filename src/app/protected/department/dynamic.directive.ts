import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
