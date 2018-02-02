import { BillViewPage } from './../bill-view/bill-view';
import { ApiService } from './../../shared/api.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bill } from "../../shared/billing.modal";

/**
 * Generated class for the FetchBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-bill',
  templateUrl: 'fetch-bill.html',
})
export class FetchBillPage {
  bill: number;
  fetchedBill: Bill;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchBillPage');
  }

  fetchBill(billNo: number){
    this.apiService.fetchBill(billNo).subscribe(data=>{
      this.fetchedBill = data;
      console.log("fetched bill "+this.fetchedBill.userDetails.customerName);
      this.navCtrl.push(BillViewPage,this.fetchedBill);
    })
  }

}
