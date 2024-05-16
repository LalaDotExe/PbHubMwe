import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
         IonHeader, 
         IonTitle, 
         IonToolbar,
         IonButton, 
         IonBackButton,
         IonButtons,
         IonImg
         } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule,
            IonButton,
            IonBackButton,
            IonButtons,
            IonImg
          ]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
