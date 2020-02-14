import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/account/login/login.component';
import { UsersComponent } from './modules/account/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {path:'test', component: AppComponent},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
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
