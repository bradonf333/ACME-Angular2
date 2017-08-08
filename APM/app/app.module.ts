/** Root module for the application */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductDetailGuard } from './products/product-guard.service';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule
    , HttpModule
    , RouterModule.forRoot([
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
