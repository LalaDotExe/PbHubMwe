import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonItem,
  IonList,
  IonLabel,
  IonText,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.page.html',
  styleUrls: ['./cartpage.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonText,
    IonLabel,
    IonList,
    IonItem,
    IonImg,
    IonCol,
    IonRow,
    IonGrid,
    IonCardContent,
    IonCard,
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class CartpagePage implements OnInit {
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
}
