/** Displays detailed information for a single product */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
    // , styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Details';
    product: IProduct;

    // Inject ActivatedRoute
    constructor(private _route: ActivatedRoute) {

    }

    // Get the parameter passed in to the URL and display it as the page title
    ngOnInit(): void {

        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

}
