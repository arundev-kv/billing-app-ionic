import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchBillPage } from './fetch-bill';

@NgModule({
  declarations: [
    FetchBillPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchBillPage),
  ],
})
export class FetchBillPageModule {}
