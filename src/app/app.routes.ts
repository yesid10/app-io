import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'main',
    loadComponent: ()=> import('./main/main.page').then(m => m.MainPage)
  },
  {
    path: 'products-list',
    loadComponent: () => import('./products-list/products-list.page').then( m => m.ProductsListPage)
  }
];
