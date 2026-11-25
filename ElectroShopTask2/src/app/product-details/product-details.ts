import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
   productName: string = "Laptop";
  productDescription: string = "High-performance laptop";
  productPrice: number = 750;
  productImage: string = "https://imgs.search.brave.com/n5yLIM_nZGkj-4g7QOCuu1OTRVY5asb43OIQO_pVGts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2Fzc2V0/bGluay9pbWcvZ2xv/YmFsL2xhcHRvcC1k/ZWxsLWRzMTQyNzAt/cm93LXBpbmstZ2Fs/bGVyeS0xLWRsMTFp/MXcwLWxhcmdlLnBu/Zz9mbXQ9cG5nLWFs/cGhhJnBzY2FuPWF1/dG8mc2NsPTEmaGVp/PTgwNCZ3aWQ9MTA3/MiZxbHQ9MTAwLDAm/cmVzTW9kZT1zaGFy/cDImc2l6ZT0xMDcy/LDgwNA";
  quantity: number = 2;
  isAvailable: boolean = true;
  discountPercentage: number = 10;

  calculateDiscount() {
  return this.productPrice - (this.productPrice * this.discountPercentage / 100);
}
}
