import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    FooterComponent
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
