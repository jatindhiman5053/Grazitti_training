import { Component } from '@angular/core';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'placeholderapi',
  templateUrl: './placeholderapi.component.html',
  styleUrl: './placeholderapi.component.css'
})

export class PlaceholderapiComponent {
  limitedpost: any;
  posts: any;

  constructor(private UserPost: ApidataService) { }

  ngOnInit(): void {
    this.UserPost.photos().subscribe((data: any) => {
      this.posts = data;
      this.limitedpost = data.slice(0, 20);
    });
  }
}

