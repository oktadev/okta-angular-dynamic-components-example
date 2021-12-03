import { Component, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
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
  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective;  
   private interval: number|undefined;  
   private currentIndex = 1;  
   
   private messages: { type: Type<DynamicComponent> }[] = [  
     { type: ClawesomeComponent },  
     { type: PawesomeComponent },  
     { type: SmileyComponent }  
   ];  
   
   public ngOnInit(): void {  
     this.loadComponent();  
     this.rotateMessages();  
   }  
   
   public ngOnDestroy(): void {  
     clearInterval(this.interval);  
   }  
   
   private loadComponent(): void {  
     if (this.messages.length === 0) return;  
     this.currentIndex = (this.currentIndex + 1) % this.messages.length;  
     const message = this.messages[this.currentIndex];  
   
     const viewContainerRef = this.dynamicHost.viewContainerRef;  
     viewContainerRef.clear();  
   
     const componentRef = viewContainerRef.createComponent<DynamicComponent>(message.type);  
   }  
   
   private rotateMessages(): void {  
     this.interval = window.setInterval(() => {  
       this.loadComponent();  
     }, 10000);  
   }  
 }
