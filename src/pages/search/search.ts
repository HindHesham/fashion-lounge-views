import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{ HomePage } from '../home/home';
import { FavouritesPage } from '../favourites/favourites';
import { ProfilePage } from '../profile/profile';
import { DownloadManicanPage } from '../download-manican/download-manican';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  gotoHome(){
    this.navCtrl.push(HomePage);
  }
  gotoAddPost(){
    this.navCtrl.push(DownloadManicanPage);
  }
  gotoFavourites(){
    this.navCtrl.push(FavouritesPage);
  }
  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
