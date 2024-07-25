import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { addToCart } from 'src/app/store/cart/cart.action';
import { loadProducts } from 'src/app/store/products/products.actions';
import { ProductsState } from 'src/app/store/products/products.reducer';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<{ products: ProductsState }>) {
    this.products$ = store.select((state) => state.products.products);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  addToCart(product: Product) {
    console.log(product    )
    this.store.dispatch(addToCart({ product }));
  }
}
