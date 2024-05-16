import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class LoginpagePage implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Login Submitted!', this.credentials);
      // Add your login logic here
      // e.g., sending the data to your server for authentication
    }
  }
}
