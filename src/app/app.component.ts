import { FetchBillPage } from './../pages/fetch-bill/fetch-bill';
import { ApiService } from './../shared/api.service';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from "../pages/home/home";
import { GstPage } from "../pages/gst/gst";
import { ItemsPage } from "../pages/items/items";

@Component({
  templateUrl: 'app.html',
  providers: [
    ApiService
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: any[];
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {title: 'Home',component: HomePage},
      {title: 'Set GST',component: GstPage},
      {title: 'Items',component: ItemsPage},
      {title: 'Fetch Bill',component: FetchBillPage}
     ];
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }

  sideNav(page){
    this.nav.setRoot(page.component);
  }
  
}
