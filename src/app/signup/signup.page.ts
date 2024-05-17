import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
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
  IonInputPasswordToggle,
  IonCardContent,
  IonCard,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonLabel,
    IonText,
    IonInput,
    IonInputPasswordToggle,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
  ],
})
export class SignupPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    public navCntrl: NavController,
    private auth: Auth,
    private firestore: Firestore,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  async signup() {
    // Clear previous error message
    this.errorMessage = '';

    // Check if inputs are empty
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Signing up...',
    });
    await loading.present();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      const user = userCredential.user;

      // Save additional user data in Firestore
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await setDoc(userDocRef, {
        username: this.name,
        email: this.email,
        profile: '', // Initialize with an empty profile, you can add more fields as needed
      });

      await loading.dismiss();
      this.gotoLogin();
      return user;
    } catch (error) {
      await loading.dismiss();
      if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'An unknown error occurred.';
      }
      return null;
    }
  }

  gotoLogin() {
    this.navCntrl.navigateBack('loginpage');
  }
}
