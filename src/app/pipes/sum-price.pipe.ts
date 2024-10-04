// src/app/pipes/sum-price.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'sumPrice',
})
export class SumPricePipe implements PipeTransform {
  transform(cartItems:any): number {
    return cartItems.price;
  }
}
