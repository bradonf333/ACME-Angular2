// Import the Component Decorator
import { Component } from "@angular/core";

// Decorator
@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    `
})

// Export class AppComponent
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
