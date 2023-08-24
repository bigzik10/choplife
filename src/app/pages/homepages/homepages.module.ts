import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepagesRoutingModule } from './homepages-routing.module';
import { HomepagesComponent } from './homepages.component';


@NgModule({
  declarations: [
    HomepagesComponent
  ],
  imports: [
    CommonModule,
    HomepagesRoutingModule
  ]
})
export class HomepagesModule { }
