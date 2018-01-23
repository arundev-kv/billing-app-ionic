import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GstPage } from './gst';

@NgModule({
  declarations: [
    GstPage,
  ],
  imports: [
    IonicPageModule.forChild(GstPage),
  ],
})
export class GstPageModule {}
