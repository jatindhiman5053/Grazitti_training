import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Model/user';
import { userService } from '../../../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  Selecteduser!: User;

  userService = inject(userService)

  ngOnInit() {
    this.userService.OnuserDetailClicked.subscribe((data: User) => {
      this.Selecteduser = data;
      console.log(this.Selecteduser);
    });

  }
}
