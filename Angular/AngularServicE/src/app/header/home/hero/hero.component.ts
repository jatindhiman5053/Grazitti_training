import { Component, inject } from '@angular/core';
import { subscribeService } from '../../../service/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  subService = inject(subscribeService);

  subscribe() {
    // let subservice = new subscribeService();
    this.subService.subscribebtnclicked('Yearly');
  }
}
