import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProplusPage } from './proplus.page';

const routes: Routes = [
  {
    path: '',
    component: ProplusPage
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./templates/templates.module').then( m => m.TemplatesPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProplusPageRoutingModule {}
