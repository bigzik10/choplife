import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardpageComponent } from './dashboardpage.component';

const routes: Routes = [{ path: '', component: DashboardpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardpageRoutingModule { }
