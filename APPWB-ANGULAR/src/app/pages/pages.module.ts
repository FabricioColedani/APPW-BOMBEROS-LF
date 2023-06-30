import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegisterComponent } from './register/register.component';
import { LogsComponent } from './logs/logs.component';
import { TutorialComponent } from './tutorial/tutorial.component';



@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    ProfileComponent,
    InventarioComponent,
    RegisterComponent,
    LogsComponent,
    TutorialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndexComponent,
    LoginComponent,
    ProfileComponent,
    InventarioComponent,
    RegisterComponent,
    LogsComponent,
    TutorialComponent
  ]

})
export class PagesModule { }
