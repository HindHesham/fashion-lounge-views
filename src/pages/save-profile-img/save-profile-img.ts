import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ LoginPage } from '../login/login'
import { ProfilePage } from '../profile/profile';
import { AddProfileImgPage } from '../add-profile-img/add-profile-img';

/**
 * Generated class for the SaveProfileImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-save-profile-img',
  templateUrl: 'save-profile-img.html',
})
export class SaveProfileImgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveProfileImgPage');
  }
  goback() {
    this.navCtrl.pop();
  }
  gotoAddImagePage(){
    this.navCtrl.push(AddProfileImgPage);
  }
  gotoProfilePage()
  {
    this.navCtrl.push(ProfilePage);
  }
}
