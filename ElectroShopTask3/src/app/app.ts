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

  productName = signal('Laptop');

 productDescription = signal('Dell Laptop, Core i7, 16GB RAM');

 productPrice = signal(850);

 isAvailable = signal(true);





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


cartProductName: string = '';
cartProductPrice: number = 0;
cartQuantity: number = 0;
cartTotalPrice: number = 0;

addToCart(name: string, quantity: number) {
  this.cartProductName = name;
  this.cartProductPrice = this.productPrice();
  this.cartQuantity = quantity;
  this.cartTotalPrice = this.cartProductPrice * quantity;
}


changeProduct() {
  this.productName.set('Wireless Headphones');
  this.productDescription.set('Bluetooth Headphones');
  this.productPrice.set(120);
  this.isAvailable.set(true);
}



}
