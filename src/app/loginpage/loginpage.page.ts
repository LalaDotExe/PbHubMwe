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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
  standalone: true,
  imports: [
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

  constructor(public navCntrl: NavController, private auth: Auth) {}

  ngOnInit() {}

  async login() {
    try {
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
    }
  }

  gotoSignup() {
    this.navCntrl.navigateForward('signup');
  }
}
