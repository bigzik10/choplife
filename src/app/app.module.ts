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
import { SideNavComponent } from './side-nav/side-nav.component';



import { LoginModule } from './pages/authentication/login/login.module';
import { HotmealsComponent } from './hotmeals/hotmeals.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { CartEmptyComponent } from './cart/cart-empty/cart-empty.component';
import { FormsModule } from '@angular/forms';


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
    HotmealsComponent,
    SideNavComponent,
    ClickOutsideDirective,
    CartEmptyComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
