import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { CallNoticeComponent } from './call-notice/call-notice.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OrderTrackComponent } from './order-track/order-track.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


import { LoginModule } from './pages/authentication/login/login.module';
import { HotmealsComponent } from './hotmeals/hotmeals.component';


// import { VendorComponent } from './pages/authentication/vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactUsComponent,
    CallNoticeComponent,
    CartComponent,
    OrderComponent,
    OrderTrackingComponent,
    OrderTrackComponent,
    HotmealsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
