import { GstService } from './../shared/gst.service';
import { GstPage } from './../pages/gst/gst';
import { SettingsPage } from './../pages/settings/settings';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BillPage } from "../pages/bill/bill";
import { FormsModule } from "@angular/forms";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BillPage,
    SettingsPage,
    GstPage
  ],
  imports: [
    BrowserModule,FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BillPage,
    SettingsPage,
    GstPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GstService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
