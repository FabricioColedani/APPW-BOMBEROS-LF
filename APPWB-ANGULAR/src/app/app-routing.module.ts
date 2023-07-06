import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogsComponent } from './pages/logs/logs.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'logs', component : LogsComponent },
  { path: 'profile', component : ProfileComponent},
  { path: 'inventario', component : InventarioComponent},
  { path: 'tutorial', component : TutorialComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
