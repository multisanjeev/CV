import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ActionSheetController,AlertController,ModalController } from 'ionic-angular';
import { LoginProvider } from "../../providers/login/login";
import { TicketDetailPage } from "../ticket-detail/ticket-detail";
import { ModalContentPage } from "../modal-content/modal-content";

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
  public queueName;
  public tickets = [];
  public ticketData;
  public initTicket = 'new';
  //public ticketDetailArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider, 
    public actionsheetCtrl: ActionSheetController, public platform: Platform, public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
    this.loginProvider.presentLoading();
    this.queueName = navParams.data.queue;
    for( let ticketData of navParams.data.ticket){
      this.loginProvider.getTicketDetail(ticketData.id).then(
        data => {
          let ticketDetail:any = data;
          this.tickets.push({"id": ticketDetail.id, "subject": ticketDetail.Subject});
        }
      )
    }
  }

  getTicketByStatus(queue, status){
    this.loginProvider.presentLoading();
    this.tickets = [];
    this.loginProvider.getTicketData(queue,status).then(
      data => {
        let itemArray:any = data;
        for( let ticketData of itemArray.items){
          console.log(ticketData.id);
          this.loginProvider.getTicketDetail(ticketData.id).then(
            data => {
              let ticketDetail:any = data;
              this.tickets.push({"id": ticketDetail.id, "subject": ticketDetail.Subject});
            }
          )
        }
      }
    );
  }

  detailPage(ticketData){
    this.navCtrl.push(TicketDetailPage, {ticket: ticketData});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

  openMenu(item) {
    let actionSheet = this.actionsheetCtrl.create({
      //title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Create',
          icon: !this.platform.is('ios') ? 'md-open' : null,
          handler: () => {
            //this.openModal('comment', item);
            this.loginProvider.showToast('top','Coming Soon !');
          }
        },
        {
          text: 'Correspondence',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'md-add-circle' : null,
          handler: () => {
            this.openModal('correspond', item);
          }
        },
        {
          text: 'Comment',
          icon: !this.platform.is('ios') ? 'md-add-circle' : null,
          handler: () => {
            this.openModal('comment', item);
          }
        },
        {
          text: 'Detail',
          icon: !this.platform.is('ios') ? 'md-open' : null,
          handler: () => {
            this.loginProvider.showToast('top','Coming Soon !');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openModal(action, ticket) {
    let modelPara = {"action": action, "ticket": ticket};
    let modal = this.modalCtrl.create(ModalContentPage, {"modelPara": modelPara});
    modal.present();
  }

  /*doPrompt(actionTitle, ticketSubject) {
    let prompt = this.alertCtrl.create({
      title: actionTitle,
      message: ticketSubject,
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  } */

}
