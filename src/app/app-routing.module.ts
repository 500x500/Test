import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TableComponent} from './table/table.component';
import {PersonComponent} from './person/person.component';
import {CartComponent} from './cart/cart.component';

const ROUTES: Routes = [
  {path: 'shop', pathMatch: 'full', component: TableComponent},
  {path: 'cart', pathMatch: 'full', component: CartComponent},
  {path: 'person', pathMatch: 'full', component: PersonComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES, {useHash: true, onSameUrlNavigation: 'reload'}
  )],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
