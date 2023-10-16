import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './pages/homepages/about/about.component';
import { HotmealsComponent } from './hotmeals/hotmeals.component';
import { CartComponent } from './cart/cart.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'hotmeal', component: HotmealsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-tracking', component: OrderTrackingComponent },

  {
    path: '',
    loadChildren: () =>
      import('./pages/homepages/homepages.module').then(
        (m) => m.HomepagesModule
      ),
  },

  {
    path: 'dashboardpage',
    loadChildren: () =>
      import('./pages/dashboardpage/dashboardpage.module').then(
        (m) => m.DashboardpageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/authentication/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
