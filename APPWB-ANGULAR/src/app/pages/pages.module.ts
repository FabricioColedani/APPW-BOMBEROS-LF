import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegisterComponent } from './register/register.component';
import { LogsComponent } from './logs/logs.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    ProfileComponent,
    InventarioComponent,
    RegisterComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    IndexComponent,
    LoginComponent,
    ProfileComponent,
    InventarioComponent,
    RegisterComponent,
    LogsComponent
  ]

})
export class PagesModule { }
