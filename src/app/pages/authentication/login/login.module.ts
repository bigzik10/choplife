import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
// import { VendorComponent } from '../vendor/vendor.component';
// import { VerificationComponent } from '../verification/verification.component';
import { SignupModule } from '../signup/signup.module';
// import { IndexModule } from '../../dashboardpage/index/index.module';


@NgModule({
  declarations: [
    LoginComponent,
 
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SignupModule,
    
  ],

  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
