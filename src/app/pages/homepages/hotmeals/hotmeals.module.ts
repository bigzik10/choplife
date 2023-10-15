import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotmealsRoutingModule } from './hotmeals-routing.module';
import { HotmealsComponent } from './hotmeals.component';


@NgModule({
  declarations: [
    HotmealsComponent
  ],
  imports: [
    CommonModule,
    HotmealsRoutingModule
  ]
})
export class HotmealsModule { }
