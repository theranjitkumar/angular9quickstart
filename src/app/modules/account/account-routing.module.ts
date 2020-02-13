import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import {UsersComponent} from './pages/users/users.component'

export const routes:Routes = [
  // {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'account', component: AccountComponent},
  {path:'account/users', component: UsersComponent},
];

@NgModule({
  // declarations: [AccountComponent, UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountRoutingModule { }
