import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.helloProduct();
  }

  helloProduct(){
    alert('Hello Product');
      }

}
