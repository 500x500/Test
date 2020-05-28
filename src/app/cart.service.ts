import {BehaviorSubject} from 'rxjs';

export class CartService {
  cart = new BehaviorSubject<any>(localStorage.getItem('cart'));


  setCartArr(cart) {
    this.cart.next(cart);
  }

}

