import { Component, inject } from '@angular/core';
import { subscribeService } from '../service/subscribe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})

export class HeaderComponent {
  router: Router = inject(Router)
  subService = inject(subscribeService)

  subscribe() { this.subService.subscribebtnclicked('Quartly'); }

  
  navigateAdmin() {
    this.router.navigateByUrl('admin');
  }


}
