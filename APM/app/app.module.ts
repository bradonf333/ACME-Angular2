/** Root module for the application */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './products/product-list.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-guard.service';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule
    , HttpModule
    , RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
      canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ]
  , declarations: [
    AppComponent, WelcomeComponent
  ]
  , providers: [ ProductDetailGuard ]
  , bootstrap: [AppComponent]
})
export class AppModule { }
