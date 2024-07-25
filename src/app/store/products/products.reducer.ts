import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from './products.actions';
import { Product } from 'src/app/model/product.model';

export interface ProductsState {
  products: Product[];
  error: any;
}

export const initialState: ProductsState = {
  products: [],
  error: null,
};

const _productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error }))
);

export function productsReducer(state: any, action: any) {
  return _productsReducer(state, action);
}
