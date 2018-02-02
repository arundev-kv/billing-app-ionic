import { GstService } from './../shared/gst.service';
import { GstPage } from './../pages/gst/gst';
import { SettingsPage } from './../pages/settings/settings';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



 
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BillPage } from "../pages/bill/bill";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../shared/api.service";
import { HttpModule } from "@angular/http";
import { ItemsPage, EditModal } from "../pages/items/items";
import { BillViewPage } from "../pages/bill-view/bill-view";
import { FetchBillPage } from "../pages/fetch-bill/fetch-bill";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BillPage,
    SettingsPage,
    GstPage,
    ItemsPage,
    EditModal,
    BillViewPage,
    FetchBillPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BillPage,
    SettingsPage,
    GstPage,
    ItemsPage,
    EditModal,
    BillViewPage,
    FetchBillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GstService,
    ApiService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
