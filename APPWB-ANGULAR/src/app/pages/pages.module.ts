import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    ProfileComponent,
    InventarioComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
