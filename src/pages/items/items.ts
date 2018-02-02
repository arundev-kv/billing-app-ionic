import { ApiService } from './../../shared/api.service';
import { Product } from './../../shared/product';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  items: Product[];
  public productLength: number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public apiService:ApiService,
              public modalCtrl: ModalController) {



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
    this.apiService.getDataApi()
    .subscribe(i=> {
      this.items =i;
      this.productLength = this.items.length;
      console.log(this.productLength);
    });
    
    

  }

  
  editItem(clickedItem) {

    let modal = this.modalCtrl.create(EditModal,clickedItem);
    modal.present();
    modal.onDidDismiss(data=>{
      this.items[clickedItem.serialNumber-1] = data;
    });
  }

  addItem(){
    this.productLength = this.productLength +1;
    var temp = {serialNumber: this.productLength,itemId: null, itemName: null, itemPrice: null};
    this.items.push(temp);
    let modal = this.modalCtrl.create(EditModal, this.items[this.productLength -1]);
    modal.present();
    modal.onDidDismiss(data=>{
      this.items[this.productLength-1] = data;
    });
  }

  deleteItem(clickedItem: Product){
    let index = clickedItem.serialNumber -1;
    this.items.splice(index,1);
    this.productLength = this.productLength -1;
    for(let i = index; i < this.productLength; i++){
      this.items[i].serialNumber = this.items[i].serialNumber -1;
    }
    this.apiService.deleteItem(this.items);
  }
}


@Component({
  selector:'edit-modal',
  templateUrl: 'edit.modal.html'
})
export class EditModal{

  public selectedItem: Product;
  public tempItem: Product;

  constructor(public viewCtrl: ViewController,
              public navParam: NavParams,
              public apiService: ApiService) {
      this.selectedItem = { serialNumber: null, itemId: null, itemName: null, itemPrice: null};
      this.tempItem = {  serialNumber: null, itemId: null, itemName: null, itemPrice: null};

      this.selectedItem = this.navParam.data;
      
      //console.log("nav reciever"+this.tempItem.itemName);
    
     }

    ionViewDidLoad() {
      //console.log('ionViewDidLoad ItemsPage');
      this.tempItem = Object.assign({},this.selectedItem);
    }

  saveItem(){
    
    this.apiService.updateItem(this.tempItem);
    this.viewCtrl.dismiss(this.tempItem);
    console.log('Save Item' + this.tempItem.itemId);
  }
  cancel() {
  
   this.viewCtrl.dismiss(this.selectedItem);
 }
  
}