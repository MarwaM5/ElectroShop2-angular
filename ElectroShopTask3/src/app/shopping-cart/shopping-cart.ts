import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
@Input() productName: string = '';
@Input() productPrice: number = 0;
@Input() quantity: number = 0;
@Input() totalPrice: number = 0;
}
