import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBadge,
  IonMenuButton,
  IonIcon,
  IonButton,
  IonItem,
  IonFooter,
  IonLabel,
  IonCard,
  IonList,
  IonRow,
  IonCol,
  IonGrid,
  IonMenu,
  IonSearchbar,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonApp,IonImg
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  heartOutline,
  cartOutline,
  cart,
  person,
  logOut,informationCircle
} from 'ionicons/icons';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonSearchbar,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBadge,
    IonMenuButton,
    IonIcon,
    IonFooter,
    IonLabel,
    IonCard,
    IonList,
    IonRow,
    IonCol,
    IonGrid,
    IonMenu,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonBadge,IonImg
  ],
})
export class HomePage implements OnInit {
  products$: Observable<Task[]>;

  constructor(private readonly firestore: Firestore) {
    this.products$ = collectionData(collection(this.firestore, 'products')) as Observable<Task[]>;
  
    
    addIcons({
      'home-outline': homeOutline,
      'heart-outline': heartOutline,
      'cart-outline': cartOutline,
      'cart': cart,
      'person': person,
      'logout': logOut,
      'informationcircle' :informationCircle
    });

    
  }

  ngOnInit() {}
}

export interface Task {
  title: string;
  description: string;
  image: string;
  price: number;
}






