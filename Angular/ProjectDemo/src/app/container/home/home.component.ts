import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  product: any;

  constructor(private products: ProductDataService) { }

  ngOnInit(): void {
    this.products.product().subscribe((Data) => {
      this.product = Data;
      console.log(this.product);
    })
  }
}
