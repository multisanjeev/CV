import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {

  public msgType: string;
  public ticketData;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionsheetCtrl: ActionSheetController) {
    this.ticketData = navParams.data.ticket;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketDetailPage');
  }

}
