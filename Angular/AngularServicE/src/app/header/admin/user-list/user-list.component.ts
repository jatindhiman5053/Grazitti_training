import { Component, Inject } from '@angular/core';
import { userService } from '../../../service/user.service';
import { User } from '../../../Model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(private userService: userService) { }

  userList = this.userService.GetAllusers();

  ShowuserDetails(user: User){
    this.userService.OnShowuserDetail(user)
  }

}
