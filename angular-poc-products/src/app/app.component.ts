import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-poc-products';
  @Output() addNewProduct = new EventEmitter<string>();

  addNewItem(product: Product) {
    this.addNewProduct.emit(JSON.stringify(product));
  }

  products: Product[] = [
    {
      id: 1,
      description: 'New product',
      name: 'Tv',
      price: 299,
      stock: 3,
    },
    {
      id: 2,
      description: 'used product',
      name: 'PS5',
      price: 499,
      stock: 10,
    },
    {
      id: 1,
      description: 'Old product',
      name: 'Car',
      price: 2999,
      stock: 3,
    },
  ];
}
