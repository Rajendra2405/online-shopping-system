import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './store/products/products.reducer';
import { ProductsEffects } from './store/products/products.effects';
import { CartEffects } from './store/cart/cart.effects';
import { SumPricePipe } from './pipes/sum-price.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { cartReducer } from './store/cart/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CartComponent,
    CheckoutComponent,
    SumPricePipe,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productsReducer, cart: cartReducer }),
    EffectsModule.forRoot([ProductsEffects, CartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
