import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/account/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {path:'test', component: AppComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
  // {
  //   path: 'dashboard',
  //   loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
