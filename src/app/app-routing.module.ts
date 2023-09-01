import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
