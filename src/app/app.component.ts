import { SettingsPage } from './../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from "../pages/home/home";
import { GstPage } from "../pages/gst/gst";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: any[];
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {title: 'Home',component: HomePage},
      {title: 'Set GST',component: GstPage},
      {title: 'Settings',component: SettingsPage}
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
