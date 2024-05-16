import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonAvatar,
  IonFabButton,
  IonFab,
  IonImg,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, trash, camera } from 'ionicons/icons';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonAvatar,
    IonFabButton,
    IonFab,
    IonButtons,
    IonBackButton,
  ],
})
export class ProfilepagePage implements OnInit {
  constructor() {
    addIcons({
      cart: cart,
      trash: trash,
      camera: camera,
    });
  }

  ngOnInit() {}
}
