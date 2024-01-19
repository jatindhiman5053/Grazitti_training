import { Component, inject } from '@angular/core';
import { subscribeService } from '../../../service/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  subService = inject(subscribeService)

  subscribe() {
    // let subservice = new subscribeService();
    this.subService.subscribebtnclicked('monthly');
  }
}
