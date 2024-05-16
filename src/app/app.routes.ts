import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'profilepage',
    loadComponent: () =>
      import('./profilepage/profilepage.page').then((m) => m.ProfilepagePage),
  },

  {
    path: 'loginpage',
    loadComponent: () =>
      import('./loginpage/loginpage.page').then((m) => m.LoginpagePage),
  },
  {
    path: 'cartpage',
    loadComponent: () =>
      import('./cartpage/cartpage.page').then((m) => m.CartpagePage),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./details/details.page').then((m) => m.DetailsPage),
  },
  {
    path: 'homeadmin',
    loadComponent: () => import('./homeadmin/homeadmin.page').then( m => m.HomeadminPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },  {
    path: 'test',
    loadComponent: () => import('./test/test.page').then( m => m.TestPage)
  },


];
