import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
import { SaveProfileImgPage } from '../save-profile-img/save-profile-img';
*/
import { LoginPage } from '../login/login'
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the AddProfileImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-profile-img',
  templateUrl: 'add-profile-img.html',
})
export class AddProfileImgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goback() {
    this.navCtrl.pop();
  }

  gotoProfilePage() {
    this.navCtrl.push(ProfilePage);
  }
  
}
