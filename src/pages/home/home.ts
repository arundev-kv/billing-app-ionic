import { Details } from './../../shared/details';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { BillPage } from "../bill/bill";
import { MyApp } from "../../app/app.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //ac: MyApp;
  details: Details;
  constructor(public navCtrl: NavController) {
    this.details = {customerId: null, customerName: '', billNo: null, billDate: new Date()};
  }
  goToBill(){
    this.navCtrl.push(BillPage,this.details);
  }
}
