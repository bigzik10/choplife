import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './pages/homepages/about/about.component';
import { HotmealsComponent } from './hotmeals/hotmeals.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'order', component: OrderComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'aboutus', component: AboutComponent},
  { path: 'hotmeal', component: HotmealsComponent},

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
  { path: 'login', loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/authentication/signup/signup.module').then(m => m.SignupModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
