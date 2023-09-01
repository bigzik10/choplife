import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { VendorComponent } from '../vendor/vendor.component';



@NgModule({
  declarations: [
    SignupComponent,
    VendorComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ],

  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
