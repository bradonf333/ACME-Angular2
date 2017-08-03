/** Displays detailed information for a single product */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
    // , styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent {

    pageTitle: string = 'Product Details';
    product: IProduct;

    // Inject ActivatedRoute
    constructor(private _route: ActivatedRoute) {

    }

}
