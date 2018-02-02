import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bill } from "../../shared/billing.modal";

/**
 * Generated class for the BillViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill-view',
  templateUrl: 'bill-view.html',
})
export class BillViewPage {

  bill: Bill;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.bill = navParams.data;
    console.log("Bill "+this.bill.userDetails.customerName);
    console.log("Item "+this.bill.userItems[0].itemName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillViewPage');
  }
  
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
