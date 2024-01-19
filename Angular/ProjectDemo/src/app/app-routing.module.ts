import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
