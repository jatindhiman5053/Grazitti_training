import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

  @Input() productListComp: ProductListComponent = undefined;
  
  product: Product;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

}
