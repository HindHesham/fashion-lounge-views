import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder
              , private toastCtrl: ToastController) {
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPass: ['', Validators.compose([Validators.required])]
  });
  }

  goback() {
    this.navCtrl.pop();
  }
  onKeyPress(event) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode == 32 || event.keyCode == 46) ||
        (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
      return true;
    }
    else {
      return false;
    }
  }

  registerUser(name,email,password,confirmPass) {
    this.navCtrl.push(LoginPage);
    // if(!this.registerForm.valid){
    //   this.submitAttempt = true;
    // } else {
    //   this.submitAttempt = false;
    //   let loader = this.loadingCtrl.create({
    //     content: 'Please wait....',
    //   });
  
    //   loader.present().then(() => {
    //     this.userProvider.registerUser(name, email, password)
    //     .subscribe(data=> {
    //       console.log('dataaaa', data.msg, data);
    //         if(data.msg=="name_Required") {
    //           console.log("name required");
    //         } else if(data.msg=="name_Required"){
    //           console.log("email required");
    //         } else if (data.msg == "password_Required") {
    //           console.log("password reqired")
    //         } else if(data[1] == "invalid email") {
    //           let toast = this.toastCtrl.create({
    //             message: 'Invalid email pattern',
    //             duration: 3000,
    //             position: 'bottom'
    //           }); toast.present();
    //         } else if(password != confirmPass) {
    //           let toast = this.toastCtrl.create({
    //             message: 'Password fields are not matching',
    //             duration: 3000,
    //             position: 'bottom'
    //           }); toast.present();
    //         } else if(data[1] == "email exist in the database") {
    //           let toast = this.toastCtrl.create({
    //             message: 'this email is exist',
    //             duration: 3000,
    //             position: 'bottom'
    //           }); toast.present();
    //         } else if(data.msg == "User created successfully") {
    //           let toast = this.toastCtrl.create({
    //             message: 'user created successfully',
    //             duration: 3000,
    //             position: 'bottom'
    //           }); toast.present();
    //           this.navCtrl.push(LoginPage);
    //         } else {
              
    //         }
    //         loader.dismiss();
    //       },
    //     )
    //     },
    //     (err)=> {
    //       loader.dismiss();
    //       console.log('errrrror', err)
    //     }
    //   )
    // }
  }

}
