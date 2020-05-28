import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

export interface CartElement {
  id: number;
  name: string;
  price: number;
  attr: {
    color: string;
    format: string;
  };
}

const ELEMENT_DATA: CartElement[] = [
  {id: 1, name: 'Бумага', price: 1000, attr: {color: 'белый', format: 'А4'}},
  {id: 2, name: 'Бумага', price: 2000, attr: {color: 'белый', format: 'А3'}},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cart = [];

  constructor(
    private  cartService: CartService,
  ) {
  }

  displayedColumns: string[] = ['id', 'name', 'price', 'attr.color', 'attr.format', 'cart'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  addToCart(element: any) {
    if (JSON.parse(localStorage.getItem('cart'))) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      this.pushToCart(element);
    } else {
      this.cart = [];
      this.pushToCart(element);
    }
  }

  pushToCart(element) {
    this.cart.push(element);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartService.setCartArr(localStorage.getItem('cart'));
  }
}

