import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getCartCount } from 'src/app/store/cart/cart.reducer';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cartCount$ = store.select(getCartCount);
  }

  ngOnInit(): void {
    console.log(this.cartCount$);
  }
}