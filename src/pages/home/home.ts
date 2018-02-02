import { Details } from './../../shared/details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BillPage } from "../bill/bill";
import { MyApp } from "../../app/app.component";
//import { ApiService } from "../../shared/api.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
  }
  //ac: MyApp;
  details: Details;
  constructor(public navCtrl: NavController) {
    //console.log('constructor HomePage');
    this.details = {customerId: null, customerName: '', billNo: null, billDate: new Date()};
  }
  goToBill(){
    this.navCtrl.push(BillPage,this.details);
  }
}
