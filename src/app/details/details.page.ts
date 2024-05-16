import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
         IonHeader, 
         IonTitle, 
         IonToolbar, 
         IonButton, 
         IonIcon, 
         IonCard, 
         IonImg, 
         IonCardHeader, 
         IonCardTitle, 
         IonItem, 
         IonLabel, 
         IonCardContent, 
         IonButtons, 
         IonInput
        } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule, 
            IonButton, 
            IonIcon, 
            IonCard, 
            IonImg, 
            IonCardHeader, 
            IonCardTitle, 
            IonItem, 
            IonLabel, 
            IonCardContent, 
            IonButtons, 
            IonInput,]
})
export class DetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
