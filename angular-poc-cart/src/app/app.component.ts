import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-poc-cart';
  products: Product[] = [];

  @Input()
  set productInput(pProductInput: string) {
    this.products = JSON.parse(pProductInput);
    console.log('cart mfe>>', this.products);
  }

  getTotalCartPrice() {
    let totalCartPrice: number = 0;
    this.products.map((p) => {
      totalCartPrice += p.price;
    });

    return totalCartPrice;
  }
}
