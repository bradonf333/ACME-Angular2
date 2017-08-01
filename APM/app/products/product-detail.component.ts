/** Displays detailed information for a single product */

import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-product-detail',
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
    // , styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent {

    pageTitle: string = 'Product Details';
    product: IProduct;

}
