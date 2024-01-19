import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',

})
export class AdminComponent {
  constructor(private route: Router, private userService: userService) { }

  name: string = '';
  gender: string = 'Male';
  Subtype: string = 'Yearly';
  status: string = 'Active';

  CreatenewUser(){
    this.userService.CreateUser(this.name,this.gender,this.Subtype,this.status);
    console.log(this.userService.users);
    
  }

  

}
