import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private store: StoreService ) { }

  ngOnInit(): void {
    this.store.getAllCategories().subscribe( categories => console.log(categories) );
    this.store.getAllProducts().subscribe( products => console.log(products) );
  }

}
