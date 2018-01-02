import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';
import { NotificationPage } from '../notification/notification';
import { PostDetailsPage } from '../post-details/post-details';
import { SearchPage } from '../search/search';
import { FavouritesPage } from '../favourites/favourites';
import { ProfilePage } from '../profile/profile';
import { DownloadManicanPage } from '../download-manican/download-manican';
import { MoreButtonPopoverPage } from '../more-button-popover/more-button-popover';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  isFavourite:boolean = false;
  isLiked:boolean = false;

  allPosts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
    // this.getAllPosts();
    // this.listAllPosts();
  }

  gotoNotification(){
    this.navCtrl.push(NotificationPage);
  }
  gotoPost(){
    this.navCtrl.push(PostDetailsPage);
  }
  gotoComments(){
    this.navCtrl.push(CommentsPage);
  }
  
  gotoAddPost(){
    this.navCtrl.push(DownloadManicanPage);
  }
  gotoSearch(){
    this.navCtrl.push(SearchPage)
  }
  gotoFavourites(){
    this.navCtrl.push(FavouritesPage);
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
