import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule
        , HttpModule
        , RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id',
                canActivate: [ProductDetailGuard]
                , component: ProductDetailComponent
            }
        ])
    ],
    exports: [],
    providers: [ ProductService, ProductDetailGuard]
})
export class ProductModule { }
