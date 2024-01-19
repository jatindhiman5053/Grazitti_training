import { Component } from '@angular/core';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'pokimonapi',
  templateUrl: './pokimonapi.component.html',
  styleUrl: './pokimonapi.component.css'
})

export class PokimonapiComponent {
  limitedpoki: any;
  poki: any;
  pokiurl: any;


  constructor(private UserPost: ApidataService) { }

  ngOnInit(): void {
    this.UserPost.pokimon().subscribe((data: any) => {
      this.poki = data.results;
    });
  }

}
