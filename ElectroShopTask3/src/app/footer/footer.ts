import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName = "ElectroShop";
 storeAddress = "Amman, Jordan";
 contactEmail = "support@electroshop.com";
 copyrightMessage = "© 2026 ElectroShop. All rights reserved.";
}

