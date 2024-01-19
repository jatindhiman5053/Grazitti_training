import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { HeroComponent } from './header/hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
