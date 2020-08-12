import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrderByPipe } from './shared/OrderBy.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
