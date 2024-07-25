import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((product) => product.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }
}
