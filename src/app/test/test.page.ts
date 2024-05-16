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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class TestPage implements OnInit {
  products$ = collectionData(
    collection(this.firestore, 'product')
  ) as Observable<Task[]>;
  constructor(private readonly firestore: Firestore) {}

  ngOnInit() {}
}

export interface Task {
  name: string;
  description: string;
}
