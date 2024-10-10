import { Component } from '@angular/core';

@Component({
  selector: 'app-spec-products',
  templateUrl: './spec-products.component.html',
  styleUrl: './spec-products.component.css'
})
export class SpecProductsComponent {

  productslist:any[]=[
    {
        name: 'Baseball Cap',
        img: 'Baseball Cap.png',
        price: '750.00',
        freeShipping: true,
        inStock: true
    },
    {
        name: 'Basketball Shoes',
        img: 'Basketball Shoes.png',
        price: '2300.00',
        freeShipping: true,
        inStock: true
    },
    {
        name: 'Bluetooth Headset',
        img: 'Bluetooth Headset.png',
        price: '1800.00',
        freeShipping: false,
        inStock: false
    },
    {
        name: 'Ladies Handbag',
        img: 'Ladies Handbag.png',
        price: '1200.00',
        freeShipping: false,
        inStock: true
    },
    {
        name: 'Short Sleeve T-shirt',
        img: 'Short Sleeve T-shirt.png',
        price: '2250.00',
        freeShipping: true,
        inStock: true
    },
    {
        name: "Men's Business Watch",
        img: 'Watch.png',
        price: '7500.00',
        freeShipping: true,
        inStock: false
    }
  ]
}
