import { GstService } from './../../shared/gst.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gst',
  templateUrl: 'gst.html',
})
export class GstPage {
  gst: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gstService: GstService) {
    this.gst = gstService.getGst();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GstPage');
  }

  changeGst(){
    this.gstService.setGst(this.gst);
  }
}
