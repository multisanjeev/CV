import { DescriptionPage } from './../description/description';
import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  public showDate: Date;
  pet: string = "puppies";
  items = [];
  
  constructor(public navCtrl: NavController, private camera: Camera, public actionSheetCtrl: ActionSheetController,
     public platform: Platform) {
      this.items = [
        {
          'title': 'Angular',
          'icon': 'angular',
          'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
          'color': '#E63135'
        },
        {
          'title': 'CSS3',
          'icon': 'css3',
          'description': 'The latest version of cascading stylesheets - the styling language of the web!',
          'color': '#0CA9EA'
        },
        {
          'title': 'HTML5',
          'icon': 'html5',
          'description': 'The latest version of the web\'s markup language.',
          'color': '#F46529'
        },
        {
          'title': 'JavaScript',
          'icon': 'javascript',
          'description': 'One of the most popular programming languages on the Web!',
          'color': '#FFD439'
        },
        {
          'title': 'Sass',
          'icon': 'sass',
          'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
          'color': '#CE6296'
        },
        {
          'title': 'NodeJS',
          'icon': 'nodejs',
          'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
          'color': '#78BD43'
        },
        {
          'title': 'Python',
          'icon': 'python',
          'description': 'A clear and powerful object-oriented programming language!',
          'color': '#3575AC'
        },
        {
          'title': 'Markdown',
          'icon': 'markdown',
          'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
          'color': '#412159'
        },
        {
          'title': 'Tux',
          'icon': 'tux',
          'description': 'The official mascot of the Linux kernel!',
          'color': '#000'
        },
      ]
     }

  takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  openMenu() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Albums',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              console.log('Delete clicked');
            }
          },
          {
            text: 'Share',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Play',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: !this.platform.is('ios') ? 'heart-outline' : null,
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
      
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(DescriptionPage, { item: item });
  }

}
