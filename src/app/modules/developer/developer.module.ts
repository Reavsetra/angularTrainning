import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DevelopersComponent } from './pages/developers/developers.component';


@NgModule({
  declarations: [
    DevelopersComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
