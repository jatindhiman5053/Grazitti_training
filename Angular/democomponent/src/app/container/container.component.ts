import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  @ViewChild(ProductListComponent) productlistcomponent: ProductListComponent;

  searchtext: string = '';



  setSearchText(value: string) {
    this.searchtext = value;
  }

}
