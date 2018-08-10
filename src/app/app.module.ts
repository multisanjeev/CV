import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { VideoPlayer } from '@ionic-native/video-player';
import { BatteryStatus } from '@ionic-native/battery-status';
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DescriptionPage } from "../pages/description/description";
import { QueuePage } from "../pages/queue/queue";
import { TicketsPage } from "../pages/tickets/tickets";
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DescriptionPage,LoginPage,QueuePage,TicketsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,DescriptionPage,LoginPage,QueuePage,TicketsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    VideoPlayer,
    BatteryStatus,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {}
