import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ ShowPostsPage } from '../show-posts/show-posts';
import { FollowersPage } from '../followers/followers';
import { FollowingPage } from '../following/following';
import { FavouritesPage } from '../favourites/favourites';
import { HomePage } from '../home/home';
import { DownloadManicanPage } from '../download-manican/download-manican';
import { SettingsPage } from '../settings/settings';
import{ SearchPage } from '../search/search';
import { SaveProfileImgPage } from '../save-profile-img/save-profile-img';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  tab1Root = ShowPostsPage;
  tab2Root = FollowersPage;
  tab3Root = FollowingPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  gotoSettings(){
    this.navCtrl.push(SettingsPage);
  }
  gotoAddProfileImage(){
    this.navCtrl.push(SaveProfileImgPage);
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
  gotoSearch(){
    this.navCtrl.push(SearchPage);
  }

}
