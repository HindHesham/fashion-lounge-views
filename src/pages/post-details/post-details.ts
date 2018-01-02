import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';
import { MoreButtonPopoverPage } from '../more-button-popover/more-button-popover';
/**
 * Generated class for the PostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  isFavourite:boolean = false;
  isLiked:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
  }
  gotoComments(){
    this.navCtrl.push(CommentsPage);
  }

  presentPopoverMore(myEvent) {
    let popover = this.popoverCtrl.create(MoreButtonPopoverPage);
    console.log('my event', myEvent);
    popover.present({
      ev: myEvent
    });

  }

  addToFavourite(e) {
    this.isFavourite = !this.isFavourite;
    e.stopPropagation();
  }

  isFavouriteProduct() {
    return this.isFavourite;
  }

  addToLiked(e) {
    this.isLiked = !this.isLiked;
    e.stopPropagation();
  }
 
  isLikedPost() {
    return this.isLiked;
  }
  
}
