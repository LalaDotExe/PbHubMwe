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
import { addIcons } from 'ionicons';
import { arrowForward } from 'ionicons/icons';
import{LocalNotifications, ScheduleOptions} from '@capacitor/local-notifications';

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
  constructor() {
    addIcons({
      'arrow-forward': arrowForward,
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}


  async scheduledNotification() {
    let options: ScheduleOptions = {
      notifications: [
        {
          title: 'Your order is placed successfully',
          body: 'Your order will be delivered soon',
          id: Date.now(), // unique ID for each notification
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          largeIcon:'res://drawable/icon_foreground.png',
          smallIcon:'res://drawable/icon_foreground.png',
          actionTypeId: 'track_order', // action button
          extra: null
        }
      ]
    };
  
    const scheduled = await LocalNotifications.schedule(options);
    if (!scheduled) {
      console.error('Failed to schedule notification');
    }
  
    try {
      await LocalNotifications.schedule(options);
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
}