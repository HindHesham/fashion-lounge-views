import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullSizeDownloadManicanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-full-size-download-manican',
  templateUrl: 'full-size-download-manican.html',
})
export class FullSizeDownloadManicanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullSizeDownloadManicanPage');
  }
  gotoPrevPage(){
    this.navCtrl.pop();
  }
}
