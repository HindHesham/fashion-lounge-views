import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { FullSizeDownloadManicanPage } from '../full-size-download-manican/full-size-download-manican';
import { HomePage } from '../home/home';
import { FilterPopoverPage } from '../filter-popover/filter-popover';

// import { Camera } from '@ionic-native/camera';


/**
 * Generated class for the DownloadManicanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-download-manican',
  templateUrl: 'download-manican.html',
})
export class DownloadManicanPage {
  status:any;
  imageSrc: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.status='download'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadManicanPage');
  }
  gotoImageFullSize(){
    this.navCtrl.push(FullSizeDownloadManicanPage);
  }
  gotoHome(){
    this.navCtrl.push(HomePage);
  }

  presentFilterPopover() {
    let popover = this.popoverCtrl.create(FilterPopoverPage);
    popover.present({
    });
  }


  /* git picture from library */
  get_pic() {
    console.log("hi");
    /*
    let options = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }
    this.camera.getPicture(options).then((data) => {
      alert(JSON.stringify(data));
      // base64 encoding...
      this.imageSrc = "data:image/jpeg;base64," + data
    }).catch(err => alert(err));
    */
  }

}
