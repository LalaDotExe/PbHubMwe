import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"pbhub-bd1ef","appId":"1:740098056744:web:c9e62dad65bf8200e70b1d","storageBucket":"pbhub-bd1ef.appspot.com","apiKey":"AIzaSyCmKAIzBa_sAMdM6K_Fzxl-Q99QzhZuQdA","authDomain":"pbhub-bd1ef.firebaseapp.com","messagingSenderId":"740098056744","measurementId":"G-80V962YC9P"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()),
  ],
});
