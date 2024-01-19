import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainmenuComponent } from './header/mainmenu/mainmenu.component';
import { SearchcartComponent } from './header/searchcart/searchcart.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormcomponentComponent } from './feedback/formcomponent/formcomponent.component';
import { ReactiveformComponent } from './feedback/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ContainerComponent } from './container/container.component';
import { ProductdetailsComponent } from './container/productdetails/productdetails.component';
import { setbgc } from './Customdirectives/setbgc.directives';
import { HighlightdDirective } from './Customdirectives/highlightd.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainmenuComponent,
    SearchcartComponent,
    FooterMenuComponent,
    ProductListComponent,
    SearchComponent,
    FeedbackComponent,
    FormcomponentComponent,
    ReactiveformComponent,
    ProductComponent,
    FilterComponent,
    ContainerComponent,
    ProductdetailsComponent,
    setbgc,
    HighlightdDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
