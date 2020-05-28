import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {MatMenuTrigger} from '@angular/material/menu';
import {CartService} from './cart.service';
import {CartElement} from './table/table.component';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Магазин';
  // ниже переменные для работы корзины при наведении
  cart: CartElement[];
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;
  cartLength: string;


  constructor(
    private router: Router,
    private renderer: Renderer2,
    private cartService: CartService,
  ) {
  }

  ngOnInit() {
    this.cartService.cart.subscribe(data => {
        if (data === null) {
          this.cartService.setCartArr([]);
        } else {
          if (data.length !== 0) {
            this.cartLength = JSON.parse(data).length.toString();
            this.cart = JSON.parse(data);
          }
        }
      }
    );
  }

  redirectTo(route) {
    this.router.navigate([`/${route}`]);
  }

  clearCart() {
    localStorage.clear();
    this.cartLength = '';
    this.cart = [];
    this.cartService.setCartArr([]);
  }
}
