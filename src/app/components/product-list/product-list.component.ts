import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categories !: Category[];
  products !: Product[]; 

  constructor( private store: StoreService ) { }

  ngOnInit(): void {
    this.store.getAllCategories().subscribe( categories => {
      console.log(categories);
      this.categories = categories;
    });
    this.store.getAllProducts().subscribe( products => {
      console.log(products);
      this.products = products;
    });
  }

}
