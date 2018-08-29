import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketsPage } from "../tickets/tickets";
import { LoginProvider } from "../../providers/login/login";
import { VideoPlayer,VideoOptions } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';


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
  public queueList;
  public loginUserInfo;
  public videoOpts : VideoOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider,
    public videoPlayer : VideoPlayer, public streamingMedia: StreamingMedia) {

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };
    
    this.streamingMedia.playVideo('https://www.w3schools.com/tags/mov_bbb.mp4', options);
      
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
    this.loginProvider.presentLoading();
    this.loginProvider.getTicketData(queueData.title,'new').then(
      data => {
        let itemArray:any = data;
        this.navCtrl.push(TicketsPage, {list: queueData, queue: queueData.title, ticket: itemArray.items});
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueuePage');
  }

  // Playing a video.
  public playVideo(){
    this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('https://www.w3schools.com/tags/mov_bbb.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });    
}
public stopPlayingVideo(){
    this.videoPlayer.close();
}

}
