import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
