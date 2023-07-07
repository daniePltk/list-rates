import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MockRatesDataService } from './mock-rates-data.service';
import { RatesListComponent } from './rates-list/rates-list.component';
import { RateComponent } from './rates-list/rate/rate.component';

import { FormsModule } from '@angular/forms';
import { RateNameComponent } from './rates-list/rate/rate-name/rate-name.component';
import { RateDetailsComponent } from './rates-list/rate/rate-details/rate-details.component';
import { RatePriceComponent } from './rates-list/rate/rate-price/rate-price.component';

@NgModule({
  declarations: [
    AppComponent, RatesListComponent, RateComponent, RateNameComponent, RateDetailsComponent, RatePriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MockRatesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
