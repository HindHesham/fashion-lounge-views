import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-more-button-popover',
  templateUrl: 'more-button-popover.html',
})
export class MoreButtonPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  openPage(page) {
    this.viewCtrl.dismiss();
    console.log('from popover');
  }

}
