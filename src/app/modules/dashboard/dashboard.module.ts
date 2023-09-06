import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardHubComponent } from './components/dashboard-hub/dashboard-hub.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [DashboardPageComponent, DashboardHubComponent, LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
