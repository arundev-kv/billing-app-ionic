import { ApiService } from './../../shared/api.service';
import { GstService } from './../../shared/gst.service';
import { Item } from './../../shared/item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Details } from "../../shared/details";
import { Product } from "../../shared/product";
import { AlertController } from 'ionic-angular';

import { BillViewPage } from "../bill-view/bill-view";
import { Bill } from "../../shared/billing.modal";

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
  currentProducts: Product[];
  userDetails: Details;
  bill: Bill;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gstService: GstService,
              public apiService: ApiService,
              public alertCtrl: AlertController) {
    //console.log('constructor BillPage');

    this.currentItems = [];
    this.count = 0;

    this.gstPercent = gstService.getGst();
    this.userDetails = navParams.data;
    //console.log(this.userDetails.customerName);

    this.apiService.getDataApi().subscribe(result=>{
    this.currentProducts = result;
  });
  }
  alert() {
    
    let confirm = this.alertCtrl.create({
      title: 'Do you need to save the data?',
      message: 'can change the data or not',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            
            this.bill = {userDetails: this.userDetails, userItems: this.currentItems, total: this.grandTotal, gst: this.gst};
            this.apiService.postBill(this.bill);
            this.navCtrl.push(BillViewPage,this.bill);
            console.log('save clicked');
          }
        }
      ]
    });
    confirm.present();


  }

  addProduct(){
    this.count = this.count+1;
    var temp = {serialNo:this.count, itemId: null, itemName: '', itemNo: null, quantity: null, price: null, discount: null,amount: null};
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
    this.gst = +(this.gst.toFixed(2));
    this.grandTotal = this.netTotal+this.gst;
    this.grandTotal = +(this.grandTotal.toFixed(2));
  }


  onSelected(selectedItem: Item){
    let tempProduct: Product;
    for(let product of this.currentProducts){
      if(selectedItem.itemName == product.itemName)
        tempProduct = product;
    }
    if(tempProduct != null){
      this.currentItems[selectedItem.serialNo -1].itemNo = tempProduct.itemId;
      this.currentItems[selectedItem.serialNo -1].price = tempProduct.itemPrice;
    }
      
  }
  

}
