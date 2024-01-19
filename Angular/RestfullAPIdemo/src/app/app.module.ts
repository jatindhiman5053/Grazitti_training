import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokimonapiComponent } from './pokimonapi/pokimonapi.component';
import { PlaceholderapiComponent } from './placeholderapi/placeholderapi.component';
import { APIbuttonComponent } from './apibutton/apibutton.component';

@NgModule({
  declarations: [
    AppComponent,
    PokimonapiComponent,
    PlaceholderapiComponent,
    APIbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
