import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardpageComponent } from './dashboardpage.component';

const routes: Routes = [
  { path: '', component: DashboardpageComponent,
  
  children:[
   {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexModule),
  },
   {
    path: 'saveditems',
    loadChildren: () =>
      import('./saveditems/saveditems.module').then((m) => m.SaveditemsModule),
  },
],
 },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardpageRoutingModule {}
