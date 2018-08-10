import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketsPage } from "../tickets/tickets";
import { LoginProvider } from "../../providers/login/login";
import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the QueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
})
export class QueuePage {
  private queueList;
  public loginUserInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider,
    private videoPlayer: VideoPlayer) {
    this.loginUserInfo = navParams.data.loginUserInfo;
    this.queueList = [
      {
        'id': 1,
        'title': 'IT-Helpdesk',
        'pic': 'assets/imgs/thumbnail-duckling-3.jpg',
      },
      {
        'id': 20,
        'title': 'RT_Queue',
        'pic': 'assets/imgs/thumbnail-duckling-4.jpg',
      },
      {
        'id': 21,
        'title': 'IRC_Queue',
        'pic': 'assets/imgs/thumbnail-duckling-2.jpg',
      },
      {
        'id': 23,
        'title': 'Cogent_Ext_Support',
        'pic': 'assets/imgs/thumbnail-duckling-1.jpg',
      },
      {
        'id': 25,
        'title': 'SPM_Support',
        'pic': 'assets/imgs/thumbnail-duckling-1.jpg',
      },
      {
        'id': 27,
        'title': 'QuickAppsQuestions',
        'pic': 'assets/imgs/thumbnail-duckling-2.jpg',
      }
    ];
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  ticketListPage(queueData) {
    this.loginProvider.getTicketData(queueData.title).then(
      data => { console.log(data); }
    );
    this.navCtrl.push(TicketsPage, {list: queueData});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueuePage');
  }

  // Playing a video.
  playVideo(){
    this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}
