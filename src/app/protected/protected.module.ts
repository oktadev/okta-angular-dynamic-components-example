import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { DepartmentComponent } from './department/department.component';
import { DynamicDirective } from './department/dynamic.directive';
import { ClawesomeComponent } from './department/clawesome.component';
import { PawesomeComponent } from './department/pawesome.component';
import { SmileyComponent } from './department/smiley.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ProtectedComponent,
    DepartmentComponent,
    DynamicDirective,
    ClawesomeComponent,
    PawesomeComponent,
    SmileyComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class ProtectedModule { }
