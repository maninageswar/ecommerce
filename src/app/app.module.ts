import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { KartComponent } from './components/kart/kart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { ViewProductComponent } from './components/view-product/view-product.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'kart', component: KartComponent },
  { path: 'home/product/:id', component: ViewProductComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    KartComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
