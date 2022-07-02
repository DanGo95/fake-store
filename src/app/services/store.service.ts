import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable, map } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private url = 'https://fakestoreapi.com/products';

  constructor( private http: HttpClient ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct( id: number ): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get(`${this.url}/categories`).pipe(
      map(
        (categories: any) => categories = categories.map((name: string) => ({name}))
      )
    )
  }

  getProductsFromCategory( category: string ): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/category/${category}`);
  }

}
