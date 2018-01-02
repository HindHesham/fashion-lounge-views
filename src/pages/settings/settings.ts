import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditProfilePage } from '../edit-profile/edit-profile';
import{ LoginPage } from '../login/login';
import { ChangePasswordPage } from '../change-password/change-password';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  gotoHomePage(){
    this.navCtrl.push(HomePage);
  }
  gotoEditProfilePage(){
    this.navCtrl.push(EditProfilePage);
  }
  gotoChangePasswordPage(){
    this.navCtrl.push(ChangePasswordPage);
  }
  logOut(){
    this.navCtrl.push(LoginPage);
  }
}
