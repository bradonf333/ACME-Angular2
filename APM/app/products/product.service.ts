import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

    // Represents a web api url that would have access to the list of products
    private _productUrl = 'api/products/products.json';

    /**
     * Constructor to inject the Http Service from Angular
     */
    constructor(private _http: Http) {
    }

    /** 
     * Returns a list of IProducts by sending an http request to the 
     * given url and casting the json response into an IProduct[]
     */
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json());
    }
}
