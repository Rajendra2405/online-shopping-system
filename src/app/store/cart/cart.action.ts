// src/app/store/cart/cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';


export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ productId: number }>()
);
export const clearCart = createAction('[Cart] Clear Cart');
export const updateCartQuantity = createAction(
  '[Cart] Update Cart Quantity',
  props<{ productId: number; quantity: number }>()
);
export const paymentDone = createAction('[Cart] Payment Done');