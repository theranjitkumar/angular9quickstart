import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AccountRoutingModule} from './account-routing.module'
 
import { AccountComponent } from './account.component';
import { UsersComponent } from './pages/users/users.component';



@NgModule({
  declarations: [AccountComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
