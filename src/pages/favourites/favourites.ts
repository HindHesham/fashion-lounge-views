import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { HomePage } from '../home/home';
import{ SearchPage } from '../search/search';
import { DownloadManicanPage } from '../download-manican/download-manican';
import { ProfilePage } from '../profile/profile';
import { MoreButtonPopoverPage } from '../more-button-popover/more-button-popover';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
  }
  gotoSearch(){
    this.navCtrl.push(SearchPage);
  }
  gotoAddPost(){
    this.navCtrl.push(DownloadManicanPage);
  }
  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }

  presentPopoverMore(myEvent) {
    let popover = this.popoverCtrl.create(MoreButtonPopoverPage);
    console.log('my event', myEvent);
    popover.present({
      ev: myEvent
    });

  }

}
