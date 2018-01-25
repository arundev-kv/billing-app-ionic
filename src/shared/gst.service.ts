import { Injectable } from "@angular/core";

@Injectable()
export class GstService{
    gst: number;

    constructor(){
        console.log('constructor GstService');
        this.gst = 20;
    }
    setGst(gst: number){

        this.gst = gst;

    }

    getGst(){
        return this.gst;
    }
}