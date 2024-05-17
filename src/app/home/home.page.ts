import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../product.service';
import { Observable, of } from 'rxjs';
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
  IonImg,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  heartOutline,
  cartOutline,
  cart,
  person,
  logOut,
  informationCircle,
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
    IonImg,
  ],
})
export class HomePage implements OnInit {
  products$: Observable<Product[]> = of([]);
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {
    addIcons({
      'home-outline': homeOutline,
      'heart-outline': heartOutline,
      'cart-outline': cartOutline,
      cart: cart,
      person: person,
      logout: logOut,
      informationcircle: informationCircle,
    });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.filteredProducts = products;
    });
  }

  filterProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
}
