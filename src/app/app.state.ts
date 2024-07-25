import { ProductsState } from './store/products/products.reducer';
import { CartState } from './store/cart/cart.reducer';

export interface AppState {
  products: ProductsState;
  cart: CartState;
}
