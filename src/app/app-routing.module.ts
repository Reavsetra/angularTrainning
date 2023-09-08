import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './modules/dashboard/pages/login-page/login-page.component';
import { adminGuard, authGuard } from './core/guards/auth.guard';
import { DevelopersComponent } from './modules/developer/pages/developers/developers.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'devs',
    component: DevelopersComponent,
    loadChildren: () => import('./modules/developer/developer.module').then((module) => module.DeveloperModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: DashboardPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [authGuard, adminGuard],
    data: {
      userType: 'Admin'
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
