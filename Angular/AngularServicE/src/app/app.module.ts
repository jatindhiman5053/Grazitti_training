import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { subscribeService } from './service/subscribe.service';
import { userService } from './service/user.service';
import { loggerService } from './service/logger.service';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [subscribeService, userService, loggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
