import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { RegisterPage } from '../pages/register/register';
import { AddProfileImgPage } from '../pages/add-profile-img/add-profile-img';
import { SaveProfileImgPage } from '../pages/save-profile-img/save-profile-img';
import { PostDetailsPage } from '../pages/post-details/post-details';
import { CommentsPage } from '../pages/comments/comments';
import { NotificationPage } from '../pages/notification/notification'; 
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile'; 
import { ShowPostsPage } from '../pages/show-posts/show-posts';
import { FavouritesPage } from '../pages/favourites/favourites';
import { FollowersPage } from '../pages/followers/followers';
import { FollowingPage } from '../pages/following/following';
import { DownloadManicanPage } from '../pages/download-manican/download-manican';
import { FullSizeDownloadManicanPage } from '../pages/full-size-download-manican/full-size-download-manican';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { MoreButtonPopoverPage } from '../pages/more-button-popover/more-button-popover';
import { FilterPopoverPage } from '../pages/filter-popover/filter-popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    RegisterPage,
    AddProfileImgPage,
    
    SaveProfileImgPage,
    
    PostDetailsPage,
    CommentsPage,
    NotificationPage,
    ProfilePage,
    EditProfilePage,
    ShowPostsPage,
    FavouritesPage,
    FollowersPage,
    FollowingPage,
    DownloadManicanPage,
    FullSizeDownloadManicanPage,
    SearchPage,
    SettingsPage,
    ChangePasswordPage,
    MoreButtonPopoverPage,
    FilterPopoverPage
  ],
  imports: [
    [HttpModule],
    BrowserModule,
    IonicModule.forRoot(MyApp,{scrollPadding: true,
      scrollAssist: true,
      autoFocusAssist: false,
      tabsPlacement: 'bottom',
    platforms: {
      android: {
        tabsPlacement: 'top'
      },
      ios: {
        tabsPlacement: 'top'
      },
      windows:
      {
        tabsPlacement: 'top'
      }
    }
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    RegisterPage,
    AddProfileImgPage,
    
    SaveProfileImgPage,
    
    PostDetailsPage,
    CommentsPage,
    NotificationPage,
    ProfilePage,
    EditProfilePage,
    ShowPostsPage,
    FavouritesPage,
    FollowersPage,
    FollowingPage,
    DownloadManicanPage,
    FullSizeDownloadManicanPage,
    SearchPage,
    SettingsPage,
    ChangePasswordPage,
    MoreButtonPopoverPage,
    FilterPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
