import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
const routes: Routes = [

  {path:'',component: HomeComponent, pathMatch: "full"},
  {path:'list',component: ListComponent, pathMatch: "full"},
  {path:'login',component: LoginComponent, pathMatch: "full"},
  {path:'register',component: RegisterComponent, pathMatch: "full"},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
