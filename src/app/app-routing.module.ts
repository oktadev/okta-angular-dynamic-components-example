import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'protected', loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule) },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
