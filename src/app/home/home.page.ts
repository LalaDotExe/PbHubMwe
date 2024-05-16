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
  IonApp,
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
    IonBadge,
  ],
})
export class HomePage implements OnInit {
  productOfTheDay: any;
  product_Popular: any;
  Product_Trending: any;

  constructor(private router: Router) {
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

  ngOnInit() {
    // You can fetch the product data here from an API or service
  }

  openProductDetails(product: any, category: string) {
    // Handle navigation to product details page
    // Pass necessary data using query params or a state management solution
    this.router.navigate(['/product-details'], {
      queryParams: {
        product: JSON.stringify(product),
        category: category,
      },
    });
  }
}
