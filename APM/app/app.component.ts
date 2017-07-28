/** Root component for the application */

// Import the Component and Product Service
import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

// Decorator
@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    providers: [ProductService]
})

// Export class AppComponent
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
