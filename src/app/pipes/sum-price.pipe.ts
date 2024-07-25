// src/app/pipes/sum-price.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'sumPrice',
})
export class SumPricePipe implements PipeTransform {
  transform(cartItems: Product[]): number {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }
}
