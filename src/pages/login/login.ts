import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QueuePage } from "../queue/queue";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import 'rxjs';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  public login : FormGroup;
  public signup : FormGroup;
  public cam : CameraOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
  public loginProvider: LoginProvider,public storage: Storage,private camera: Camera) {
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
    this.cam = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }

  submitLoginForm(){
   // let userJson = {"userName": this.login.value.email };
    let userJson = {"user": this.login.value.email, "pass":this.login.value.password };
    this.loginProvider.userLogin(userJson).then(
      data => { this.fetchData = data;}
    );
    if(this.fetchData){
      console.log(this.fetchData);
      if(this.fetchData.id){
        this.navCtrl.setRoot(QueuePage, {loginUserInfo: this.fetchData});
      }
    } else {
      this.fetchData = {"id":21, "Name":"sanjeev Katiyar"}
      this.navCtrl.setRoot(QueuePage, {loginUserInfo: this.fetchData});
    }

  }

  gotoHomePage(){
    this.navCtrl.setRoot(QueuePage);
  }

  camClick(){
    this.camera.getPicture(this.cam).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
