import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'apicalldemo';

  users:any;
  constructor(private userData:UsersDataService){
  }
  ngOnInit(): void {
    this.userData.user().subscribe((data)=>{
      this.users= data;
      console.log(this.users)
    })
  }
}
