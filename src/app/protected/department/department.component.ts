import { Component, Input, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { MessageItem, MessageType } from 'src/app/message';
import { ClawesomeComponent } from './clawesome.component';
import { DynamicComponent } from './dynamic.component';
import { DynamicDirective } from './dynamic.directive';
import { PawesomeComponent } from './pawesome.component';
import { SmileyComponent } from './smiley.component';

@Component({
  selector: 'app-department',
  template: `  
   <h3 class="mat-headline">Relax, you got this</h3>
   <ng-template appDynamic></ng-template>
  `,
  styles: [`  
    h3 { text-align: center; } 
  `]
})
export class DepartmentComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicDirective, { static: true }) private dynamicHost!: DynamicDirective;
  @Input() public messages: MessageItem[] = [];

  private interval: number | undefined;
  private currentIndex = 1;

  public ngOnInit(): void {
    this.loadComponent();
    this.rotateMessages();
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private componentTypeFactory(type: MessageType): Type<DynamicComponent> {
    let comp: Type<DynamicComponent>;
    if (type === 'Pawesome') {
      comp = PawesomeComponent;
    } else if (type === 'Clawesome') {
      comp = ClawesomeComponent;
    } else {
      comp = SmileyComponent;
    }
    return comp;
  }

  private loadComponent(): void {
    if (this.messages.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    const message = this.messages[this.currentIndex];

    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.componentTypeFactory(message.type));
    componentRef.instance.data = message.data;
  }

  private rotateMessages(): void {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 10000);
  }
}
