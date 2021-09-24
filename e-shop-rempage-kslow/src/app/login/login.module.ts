import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginOverviewComponent } from './component/login-overview/login-overview.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';



@NgModule({
  declarations: [
    LoginOverviewComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
