import { Item } from './item';
import { Injectable } from '@angular/core';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs';
import { Product } from "./product";
import { Bill } from "./billing.modal";

@Injectable()
export class ApiService{
    
    currentItems: Product[];
    private baseUrl = 'https://ionic-billing-app.firebaseio.com';

    constructor( private http: Http){
        //this.currentItem = [];  
       
        //console.log("this.currentItem : "+this.currentItem);
    }

    getDataApi(): Observable<Array<Product>>{
        return this.http.get(`${this.baseUrl}/Item.json`)
        .map((response: Response)=>{
            //console.log("response :" + response.json());
            return response.json();
        });
    }

    fetchBill(billNo: number): Observable<Bill>{
        return this.http.get(`${this.baseUrl}/bills/${billNo}.json`)
        .map((response: Response)=>{
            return response.json();
        });
    }

    updateItem(currentItem: Product) {
        console.log('Service Update' + currentItem.serialNumber);
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.put(`${this.baseUrl}/Item/${currentItem.serialNumber-1}.json`,JSON.stringify(currentItem),options)
        // .map(res=>{
        //     res.json();
        // })
         .toPromise();
    }
    deleteItem(toDelete: Product[]){
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.put(`${this.baseUrl}/Item.json`,JSON.stringify(toDelete),options)
        .toPromise();
    }

    postBill(bill: Bill){
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.put(`${this.baseUrl}/bills/${bill.userDetails.billNo}.json`,JSON.stringify(bill),options)
        .toPromise();
    }
}