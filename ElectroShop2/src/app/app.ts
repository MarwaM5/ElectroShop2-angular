import { Component, signal } from '@angular/core';
interface FeaturedProduct {
  Name: string;
  Price: number;
  Description: string;
}
@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('ElectroShop2');

  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = 'USD';

  productNames: string[] = ['Laptop','Smartphone','Headphones','Smart Watch','Keyboard'];
  productPrices: number[] = [750,450,80,120,45];

  featuredProduct: FeaturedProduct = {
  Name: 'Laptop',
  Price: 750,
  Description: 'Perfect laptop'
};


storeStatus: string = '';

discountPercentage: number = 10;
finalPrice: number = 0;

total_Products: number = 0;
mostExpensivePrice: number = 0;
cheapestPrice: number = 0;
totalProductsValue: number = 0;
constructor() {
  if (this.isStoreOpen) {
    this.storeStatus = 'We Are Open';
  } else {
    this.storeStatus = 'We Are Closed';
  }

  if (this.discountPercentage > 0) {
    this.finalPrice = this.featuredProduct.Price - (this.featuredProduct.Price * this.discountPercentage / 100);
  } else {
    this.finalPrice = this.featuredProduct.Price;
  }
  

  

this.totalProducts = this.productPrices.length;

this.mostExpensivePrice = this.productPrices[0];
this.cheapestPrice = this.productPrices[0];

for (let i = 0; i < this.productPrices.length; i++) {

  this.totalProductsValue += this.productPrices[i];

  if (this.productPrices[i] > this.mostExpensivePrice) {
    this.mostExpensivePrice = this.productPrices[i];
  }

  if (this.productPrices[i] < this.cheapestPrice) {
    this.cheapestPrice = this.productPrices[i];
  }

}
}




}
