import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
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

  constructor(public navCntrl: NavController, private auth: Auth) {}

  ngOnInit() {}

  async signup() {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    return user;
  }

  gotoLogin() {
    this.navCntrl.navigateBack('login');
  }
}
