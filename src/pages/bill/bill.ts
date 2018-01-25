import { ApiService } from './../../shared/api.service';
import { GstService } from './../../shared/gst.service';
import { Item } from './../../shared/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Details } from "../../shared/details";

/**
 * Generated class for the BillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html',
})
export class BillPage {

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BillPage');
  }

  count: number;
  item: Item;
  currentItems: Item[];
  gst: number;
  gstPercent: number;
  grandTotal: number;
  netTotal: number;

  userDetails: Details;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gstService: GstService,
              public apiService: ApiService) {
    //console.log('constructor BillPage');

    this.currentItems=[];
    this.count=0;

    this.gstPercent = gstService.getGst();
    this.userDetails = navParams.data;
    //console.log(this.userDetails.customerName);
  }

  addItem(){
    this.count = this.count+1;
    var temp = {serialNo:this.count,itemId: null, itemName: '', itemNo: null, quantity: null, price: null, discount: null,amount: null};
    this.currentItems.push(temp);
  }



  deleteItem(item1: Item){
    
    let temp: number;
    //console.log(item1);

    let index: number = item1.serialNo-1;
    temp = this.currentItems[index].amount;
    this.currentItems.splice(index,1);
    this.count = this.count-1;
    for(let i = index;i < this.count; i++){
      this.currentItems[i].serialNo = this.currentItems[i].serialNo-1;

    }

  
    this.netTotal = +(this.netTotal-temp).toFixed(2);
    //console.log(this.netTotal + "amount");

    this.gst = +(this.gstPercent*this.netTotal)/100;
    this.gst = +(this.gst.toFixed(2));
    this.grandTotal = this.netTotal+this.gst;
    this.grandTotal = +(this.grandTotal.toFixed(2));
    
}
  calcAmount(i: number){
    let index: number = i-1;
    let total: number = 0;
    let discount: number;
    this.gst = 0;
    this.netTotal = 0;
    this.grandTotal = 0;

    this.currentItems[index].amount  = ( +this.currentItems[index].quantity)*(+this.currentItems[index].price);
    discount = this.currentItems[index].amount*(( +this.currentItems[index].discount)/100);
    this.currentItems[index].amount = this.currentItems[index].amount-discount;

    
    
    for(let item of this.currentItems){
      this.netTotal+=item.amount;
    }
    //console.log(this.netTotal);
    this.gst = +(this.gstPercent*this.netTotal)/100;
    this.gst = +(this.gst.toFixed(2))
    this.grandTotal = this.netTotal+this.gst;
    this.grandTotal = +(this.grandTotal.toFixed(2));
  }
  

}
