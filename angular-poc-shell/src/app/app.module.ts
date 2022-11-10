import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, LazyElementsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
