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



@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderTrackingComponent,
    CartComponent,
    HeaderComponent,
    CallNoticeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
