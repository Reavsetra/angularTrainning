import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './modules/dashboard/pages/login-page/login-page.component';
import { HomeComponent } from './modules/welcome/pages/home/home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
