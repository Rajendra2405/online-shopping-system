import { createReducer, on, createSelector } from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
  clearCart,
  updateCartQuantity,
  paymentDone,
} from './cart.action';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/model/product.model';

export interface CartState {
  cart: Product[];
}

export const initialState: CartState = {
  cart: [],
};

const reducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const existingProduct = state.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      return {
        ...state,
        cart: state.cart.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        }),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }
  }),
  on(removeFromCart, (state, { productId }) => {
    return {
      ...state,
      cart: state.cart.filter((p) => p.id !== productId),
    };
  }),
  on(clearCart, (state) => {
    return {
      ...state,
      cart: [],
    };
  }),
  on(updateCartQuantity, (state, { productId, quantity }) => {
    return {
      ...state,
      cart: state.cart.map((p) => {
        if (p.id === productId) {
          return { ...p, quantity };
        }
        return p;
      }),
    };
  }),
  on(paymentDone, (state) => {
    return {
      ...state,
      cart: [],
    };
  })
);

export function cartReducer(state = initialState, action: any) {
  return reducer(state, action);
}

// Selectors
export const selectCartState = (state: AppState) => state.cart;

export const getCartCount = createSelector(
  selectCartState,
  (state: CartState) => state.cart.length
);

export const getCartProducts = createSelector(
  selectCartState,
  (state: CartState) => state.cart
);
