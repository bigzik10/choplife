import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/homepages/homepages.module').then(m => m.HomepagesModule) }, { path: 'authentication', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule) }, { path: 'dashboardpage', loadChildren: () => import('./pages/dashboardpage/dashboardpage.module').then(m => m.DashboardpageModule) } ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
