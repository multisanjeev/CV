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
import { TicketDetailPage } from "../pages/ticket-detail/ticket-detail";
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ModalContentPage } from "../pages/modal-content/modal-content";
import { CommonPage } from "../pages/common/common";
import { StreamingMedia } from '@ionic-native/streaming-media';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DescriptionPage,LoginPage,QueuePage,TicketsPage,TicketDetailPage,ModalContentPage,CommonPage
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
    HomePage,DescriptionPage,LoginPage,QueuePage,TicketsPage,TicketDetailPage,ModalContentPage,CommonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    VideoPlayer,
    BatteryStatus,
    DatePicker,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {}
