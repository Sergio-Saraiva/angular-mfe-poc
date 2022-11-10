import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-poc-shell';
  elementUrlCart = 'http://localhost:9003/main.js';
  elementUrlProducts = 'http://localhost:9001/main.js';
  elementUrlProductDetail = 'http://localhost:9002/main.js';
  products: Product[] = [];
  productsString: string = '';
  addedNewItemEvent(newProduct: any) {
    console.log('shell mfe >>', this.products);
    console.log('shell mfe >>', this.productsString);
    this.products.push(JSON.parse(newProduct.detail));
    this.productsString = JSON.stringify(this.products);
    console.log('shell mfe >>', this.products);
    console.log('shell mfe >>', this.productsString);
  }
}
