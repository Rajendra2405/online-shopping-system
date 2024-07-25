import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/model/product.model';
import { clearCart, paymentDone } from 'src/app/store/cart/cart.action';
import { CartState, getCartProducts } from 'src/app/store/cart/cart.reducer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems$: Observable<Product[]>;
  totalPrice$: Observable<number>;

  paymentCompleted: boolean = false;
  constructor(private store: Store<AppState>) {
    this.cartItems$ = store.select(getCartProducts);
    this.totalPrice$ = this.cartItems$.pipe(
      map((items) =>
        items.reduce((total, item) => total + item.price * item.quantity, 0)
      )
    );
  }
  ngOnInit(): void {}

  checkout() {
    this.store.dispatch(clearCart());
    alert('Checkout successful!');
  }
  onProceedToPayment() {
    this.store.dispatch(paymentDone());
    this.paymentCompleted = true;
  }
}
