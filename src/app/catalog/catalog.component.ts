import { Component } from '@angular/core';

import { Product } from "../models/product";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})


export class CatalogComponent {
  product1 = new Product(1,"Prix et Discount2",45,0.5);
  product2 = new Product(1,"Discount2",64,0);
  product3 = new Product(1,"sansPrix1",0,0);
  product4 = new Product(1,"sansPrix2",0,0);
  product5 = new Product(1,"Prix et Discount1",45,0.5);
  product6 = new Product(1,"test1",72,0);
  product7 = new Product(1,"Test2",0,0);
  product8 = new Product(1,"Test2",80,0.5);
  
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
    this.product6,
    this.product7,
    this.product8,
  ]

  getProductsWOprice(){
    let result = [];
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].price === 0){
        result.push(this.products[i]);
      }
    }

    return result;
  }

  getProductsWithDiscount(){
    let result = [];
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].discount > 0){
        result.push(this.products[i]);
      }
    }

    return result;
  }

  getProductsWithPriceWODiscount(){
    let result = [];
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].price > 0 && this.products[i].discount === 0 ){
        result.push(this.products[i]);
      }
    }

    return result;
  }


}
