import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { InventarioComponent } from './inventario/inventario.component';
import { RegisterComponent } from './register/register.component';
import { LogsComponent } from './logs/logs.component';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
=======
import { TutorialComponent } from './tutorial/tutorial.component';
>>>>>>> 607a1e2024e46ad88e223e624327284075ebf965



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
    LogsComponent,
    TutorialComponent
  ]

})
export class PagesModule { }
