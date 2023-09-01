import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './homepages.component';

const routes: Routes = [
  { 
    path: '', component: HomepagesComponent, 
    children: [
      {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexModule),
  },{
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  }, {
    path: 'contactus',
    loadChildren: () =>
      import('./contactus/contactus.module').then((m) => m.ContactusModule),
  },
  {
    path: 'hotmeals',
    loadChildren: () =>
      import('./hotmeals/hotmeals.module').then((m) => m.HotmealsModule),
  },

    ], },

  

 
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagesRoutingModule {}
