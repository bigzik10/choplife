import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveditemsRoutingModule } from './saveditems-routing.module';
import { SaveditemsComponent } from './saveditems.component';


@NgModule({
  declarations: [
    SaveditemsComponent
  ],
  imports: [
    CommonModule,
    SaveditemsRoutingModule
  ]
})
export class SaveditemsModule { }
