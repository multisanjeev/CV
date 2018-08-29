import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController  } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginProvider } from "../../providers/login/login";


@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {
  public modalPara;
  public contant : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public formBuilder: FormBuilder, public loginProvider: LoginProvider,public toastCtrl: ToastController) {
    this.modalPara = navParams.data.modelPara;
    this.contant = this.formBuilder.group({
      remark: ['', Validators.required]
    });
  }

  showToast(position: string, msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  submitAction(ticketId, action){
    this.loginProvider.presentLoading();
    this.dismiss();
    this.loginProvider.addCommentAndCorrespondence(ticketId, this.contant.value.remark, action).then(
      data => { console.log(data);
        let result:any = data;
        if(result[0] == "Message recorded"){
          this.showToast('top', action + ' has been added successfully.');
        } else {
          this.showToast('top', 'Something missing. Please try again.');
        }
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
