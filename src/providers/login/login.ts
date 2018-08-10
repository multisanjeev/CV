import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private url = "http://localhost/api/authenticate.php";
  private rt_url = "http://10.9.33.182/REST/1.0/";
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  userLogin(userJson){
    return new Promise(resolve => {
      this.http.post(this.url, userJson).subscribe(
        data => { 
          resolve(data);
        }, err => { console.log(err); }
      );  
    })
  }

  getTicketData(queueQuery){
    return new Promise(resolve => {
      this.http.get(this.rt_url + "search/ticket?user=sanjeev.katiyar@agreeya.com&pass=password&query=Queue='" + queueQuery + "'andStatus= 'new'").subscribe(
        data => { 
          resolve(data);
          console.log(data);
        }, err => { console.log(err); }
      );  
    })
  }

}
