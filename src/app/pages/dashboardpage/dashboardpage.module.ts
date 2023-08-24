import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardpageRoutingModule } from './dashboardpage-routing.module';
import { DashboardpageComponent } from './dashboardpage.component';


@NgModule({
  declarations: [
    DashboardpageComponent
  ],
  imports: [
    CommonModule,
    DashboardpageRoutingModule
  ]
})
export class DashboardpageModule { }
