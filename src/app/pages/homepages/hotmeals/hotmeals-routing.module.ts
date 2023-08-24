import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotmealsComponent } from './hotmeals.component';

const routes: Routes = [{ path: '', component: HotmealsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotmealsRoutingModule { }
