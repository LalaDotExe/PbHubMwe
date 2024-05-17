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
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, mail } from 'ionicons/icons';
import { Auth, User } from '@angular/fire/auth';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
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
  user: User | null = null;
  userData: any = {}; // This will hold additional user data

  constructor(private auth: Auth, private firestore: Firestore) {
    addIcons({
      person: person,
      mail: mail,
    });
  }

  ngOnInit() {
    this.auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        const userDocRef = doc(this.firestore, `users/${user.uid}`);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.userData = userDoc.data();
        }
      }
    });
  }

  async save() {
    if (this.user) {
      const userDocRef = doc(this.firestore, `users/${this.user.uid}`);
      await updateDoc(userDocRef, {
        telephone: this.userData.telephone,
      });
    }
  }
}
