import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [{ path: '', component: ProtectedComponent, canActivate: [ OktaAuthGuard ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
