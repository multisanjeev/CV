import { HttpClient,HttpClientModule,HttpHeaders  } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs";
import { LoadingController, ToastController } from 'ionic-angular';


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

 //private url = "http://localhost/api/";
  //private rt_url = "http://10.9.33.182/REST/1.0/";
  private url = "https://staging.agreeya.net:8084/api/";
  //private rt_url = "http://10.9.33.182/REST/2.0/";
  private rt_url = "http://14.141.136.108:4444/REST/2.0/";
  public headerParam = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'*',
    'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
  });
  constructor(public http: HttpClient,public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    console.log('Hello LoginProvider Provider');
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }

  showToast(position: string, msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  userLogin(userJson){
    return new Promise(resolve => {
      this.http.post(this.url +'authenticate.php', userJson).subscribe(
        data => { 
          resolve(data);
        }, err => { console.log(err); }
      );  
    })
  }

  /*userLogin(userJson){
    return new Promise(resolve => {
      this.http.post(this.rt_url, userJson, { headers:this.headerParam,withCredentials: true} ).subscribe(
        data => { 
          resolve(data);
        }, err => { console.log(err); }
      );  
    })
  } */

  getTicketData(queue,status){
    let query = {"user":"root","pass":"AgreeYa!@#","url":"http://10.9.33.182/REST/2.0/queues","queue":queue,'status':status};
    return new Promise(resolve => {
      this.http.post(this.url +'queue.php', query).subscribe(
        data => { 
          resolve(data);
         // console.log(data);
        }, err => { console.log(err); }
      );  
    })
  }

  getTicketDetail(ticketId){
    let query = {"user":"root","pass":"AgreeYa!@#","url":this.rt_url,"ticketId": ticketId};
    return new Promise(resolve => {
      this.http.post(this.url +'tickets.php', query).subscribe(
        data => { 
          resolve(data);
          //console.log(data);
        }, err => { console.log(err); }
      );  
    })
  }

  addCommentAndCorrespondence(ticketId,content,action){
    let query = {"user":"root","pass":"AgreeYa!@#","url":this.rt_url,"ticketId": ticketId, "action": action, "content": content};
    return new Promise(resolve => {
      this.http.post(this.url +'addRemark.php', query).subscribe(
        data => { 
          resolve(data);
          console.log(data);
        }, err => { console.log(err); }
      );  
    })
  }

 /* getTicketData(searchParam){
    return new Promise(resolve => {
      this.http.post(this.url +'ticketList.php', searchParam).subscribe(
        data => { 
          resolve(data);
        }, err => { console.log(err); }
      );  
    })
  } */

}
