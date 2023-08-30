import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepagesRoutingModule } from './homepages-routing.module';
import { HomepagesComponent } from './homepages.component';
import { LoginModule } from '../authentication/login/login.module';



@NgModule({
  declarations: [
    HomepagesComponent
  ],
  imports: [
    CommonModule,
    HomepagesRoutingModule,
    LoginModule,
  
  ]
})
export class HomepagesModule { }
