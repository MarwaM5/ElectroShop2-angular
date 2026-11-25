import { Component } from '@angular/core';

interface Product{
  name:string;
  description:string;
  price:number;
  image: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {


  products:Product[]=[
    {name: "Laptop", description: "High-performance laptop", price: 750, image: "https://imgs.search.brave.com/n5yLIM_nZGkj-4g7QOCuu1OTRVY5asb43OIQO_pVGts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2Fzc2V0/bGluay9pbWcvZ2xv/YmFsL2xhcHRvcC1k/ZWxsLWRzMTQyNzAt/cm93LXBpbmstZ2Fs/bGVyeS0xLWRsMTFp/MXcwLWxhcmdlLnBu/Zz9mbXQ9cG5nLWFs/cGhhJnBzY2FuPWF1/dG8mc2NsPTEmaGVp/PTgwNCZ3aWQ9MTA3/MiZxbHQ9MTAwLDAm/cmVzTW9kZT1zaGFy/cDImc2l6ZT0xMDcy/LDgwNA", isAvailable: true},
    {name: "Smartphone", description: "Latest smartphone", price: 450, image: "https://imgs.search.brave.com/sMo4EKc6kqfRyiIrpOSa-K7WNCQFxSz7Fj6aeu0JbLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzIv/NGY1MGI2ZWMtNDZi/MS00OTNjLWJlNjkt/MWI0ZWRmMzI1ZGM4/LmpwZw", isAvailable: true},
    {name: "Headphones", description: "Wireless headphones", price: 80, image: "https://imgs.search.brave.com/2hxciNkqtuV9G8T9VBzn-4mOHsv0uYqSKmljtidwoZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEtTFR5UmhWdkwu/anBn", isAvailable: true},
    {name: "Smart Watch", description: "Smart fitness watch", price: 120, image: "https://imgs.search.brave.com/CELkJTsvNj-nkTL3qokB8e25K3A7IByvEUaOM1f7RuQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxMEpsNGRVQjdM/LmpwZw", isAvailable: true},
    {name: "Keyboard", description: "Mechanical keyboard", price: 45, image: "https://imgs.search.brave.com/0oH7ptyEHRxojYBqUfjkp1taLI2bNaXu3WwXQOBtdFs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFWclZTaUlSR0wu/anBn", isAvailable: false},
  ]

  buyNow(productName: string) {
  alert(productName + ' added to cart!');
}

}
