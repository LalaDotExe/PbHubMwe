import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonText,
  IonLabel,
  IonButton,
  IonCardContent,
  IonCard,
  IonRow,
  IonCol,
  IonIcon,
  LoadingController,
  IonSpinner,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonIcon,
    IonCol,
    IonRow,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonInput,
    IonText,
    IonLabel,
    IonButton,
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
  ],
})
export class LoginpagePage implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false; // Variable to track loading state

  constructor(
    public navCntrl: NavController,
    private auth: Auth,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async login() {
    let loading; // Declare loading variable outside try block
    try {
      this.isLoading = true; // Set loading state to true
      loading = await this.loadingCtrl.create({
        message: 'Please wait...', // Message to display in the spinner
        translucent: true,
        cssClass: 'custom-loading',
      });
      await loading.present();

      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      if (userCredential && userCredential.user) {
        // Redirect to home page after successful login
        this.navCntrl.navigateRoot('/home');
      }
    } catch (error: any) {
      // Explicitly specify the type of 'error' as 'any'
      // Handle authentication errors
      console.error('Error signing in:', error);
      if (error.code === 'auth/user-not-found') {
        // Handle user not found error
        this.errorMessage = 'User not found';
      } else if (error.code === 'auth/wrong-password') {
        // Handle wrong password error
        this.errorMessage = 'Incorrect password';
      } else {
        // Handle other errors
        this.errorMessage = 'Incorrect password or username';
      }
    } finally {
      this.isLoading = false; // Set loading state to false
      if (loading) {
        await loading.dismiss();
      }
    }
  }

  gotoSignup() {
    this.navCntrl.navigateForward('signup');
  }
}
