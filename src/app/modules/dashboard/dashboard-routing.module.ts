import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';

export const routes:Routes = [
  // {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'dashboard/home', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
