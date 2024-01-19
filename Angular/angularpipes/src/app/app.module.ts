import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Percentagepipe } from './percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Percentagepipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
