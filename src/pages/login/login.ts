import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QueuePage } from "../queue/queue";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import 'rxjs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public initpage: string = "login";
  public fetchData:any;
  private login : FormGroup;
  private signup : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
  public loginProvider: LoginProvider,private storage: Storage) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signup = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });

    storage.set('name', 'Max');
  }

  submitLoginForm(){
    let userJson = {"userName": this.login.value.email };
    this.loginProvider.userLogin(userJson).then(
      data => { this.fetchData = data;}
    );
    if(this.fetchData){
      console.log(this.fetchData);
      if(this.fetchData.id){
        this.navCtrl.setRoot(QueuePage, {loginUserInfo: this.fetchData});
      }
    }
  }

  gotoHomePage(){
    this.navCtrl.setRoot(QueuePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
