import { Item } from './item';
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs';
import { Product } from "./product";

@Injectable()
export class ApiService{
    currentItem: Product[];
    private baseUrl = 'https://ionic-billing-app.firebaseio.com';

    constructor( private http: Http){
        //this.currentItem = [];  
        this.getDataApi().subscribe(result=>{
            this.currentItem = result;
        });
        console.log("this.currentItem : "+this.currentItem);
    }

    getDataApi(): Observable<Array<Product>>{
        return this.http.get(`${this.baseUrl}/Item.json`)
        .map((response: Response)=>{
            console.log("response :" + response.json());
            return response.json();
        });
    }
}