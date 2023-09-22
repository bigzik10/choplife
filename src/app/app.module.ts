import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginModule } from './pages/authentication/login/login.module';

// import { VendorComponent } from './pages/authentication/vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
