import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonImg,
  IonThumbnail,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonGrid,IonRow,IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonGrid,IonRow,IonCol
  ],
})
export class TestPage implements OnInit {
  products$ = collectionData(
    collection(this.firestore, 'products')
  ) as Observable<Task[]>;
  constructor(private readonly firestore: Firestore) {}

  ngOnInit() {}
}

export interface Task {
  title: string;
  description: string;
  image: string;
  price: number;
}
