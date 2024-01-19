import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularswitch';

  tab: string = '';

  onhomeclick() {
    this.tab = 'home';
  }
  onproductclick() {
    this.tab = 'product';
  }
  onaboutclick() {
    this.tab = 'about';
  }
  oncontactclick() {
    this.tab = 'contact';
  }
}
