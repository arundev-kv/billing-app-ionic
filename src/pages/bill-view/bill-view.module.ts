import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillViewPage } from './bill-view';

@NgModule({
  declarations: [
    BillViewPage,
  ],
  imports: [
    IonicPageModule.forChild(BillViewPage),
  ],
})
export class BillViewPageModule {}
