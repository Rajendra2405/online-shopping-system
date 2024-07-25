import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { removeFromCart, updateCartQuantity } from 'src/app/store/cart/cart.action';
import { CartState } from 'src/app/store/cart/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<Product[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = this.store.select((state) => state.cart.cart);
    this.totalPrice$ = this.store
      .select((state) => state.cart.cart)
      .pipe(map((cart) => this.calculateTotalPrice(cart)));
  }

  ngOnInit(): void {}

  removeFromCart(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  increaseQuantity(product: Product) {
    this.store.dispatch(
      updateCartQuantity({
        productId: product.id,
        quantity: product.quantity + 1,
      })
    );
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      this.store.dispatch(
        updateCartQuantity({
          productId: product.id,
          quantity: product.quantity - 1,
        })
      );
    }
  }

  calculateTotalPrice(cart: Product[]): number {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}