import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/cart`, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/cart`);
  }

  updateCartItem(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/cart/${product.id}`, product);
  }

  removeFromCart(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/${productId}`);
  }
}
