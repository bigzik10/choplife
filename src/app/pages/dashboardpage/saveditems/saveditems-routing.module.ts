import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveditemsComponent } from './saveditems.component';

const routes: Routes = [{ path: '', component: SaveditemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveditemsRoutingModule { }
