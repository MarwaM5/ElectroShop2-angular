import { Component ,Input, Output, EventEmitter,  signal  } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  //productName: string = "Laptop";
  @Input() productName: string = '';
  //productDescription: string = "Dell Laptop, Core i7, 16GB RAM";
   @Input() productDescription: string = '';
  //productPrice: number = 850;
  @Input() productPrice: number = 0;
  productImage: string = "https://imgs.search.brave.com/n5yLIM_nZGkj-4g7QOCuu1OTRVY5asb43OIQO_pVGts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2Fzc2V0/bGluay9pbWcvZ2xv/YmFsL2xhcHRvcC1k/ZWxsLWRzMTQyNzAt/cm93LXBpbmstZ2Fs/bGVyeS0xLWRsMTFp/MXcwLWxhcmdlLnBu/Zz9mbXQ9cG5nLWFs/cGhhJnBzY2FuPWF1/dG8mc2NsPTEmaGVp/PTgwNCZ3aWQ9MTA3/MiZxbHQ9MTAwLDAm/cmVzTW9kZT1zaGFy/cDImc2l6ZT0xMDcy/LDgwNA";
  //isAvailable: boolean = true;
  @Input() isAvailable: boolean = false;
  quantity = signal(1);
  discountPercentage: number = 10;

  @Output() productAdded = new EventEmitter<{ name: string, quantity: number }>();
  

  calculateDiscount() {
  return this.productPrice - (this.productPrice * this.discountPercentage / 100);
}

increaseQuantity() {
    this.quantity.update(value => value + 1);
  }

  decreaseQuantity() {
    this.quantity.update(value => value > 1 ? value - 1 : 1);
  }

  addToCart() {
  this.productAdded.emit({
    name: this.productName,
    quantity: this.quantity()
  });
}
}
