import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormValidation } from '../../common/constant';
@Component({
  selector: 'reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  loginform = new FormGroup({
    username: new FormControl('',Validators.compose([Validators.required, Validators.pattern(FormValidation.USERNAME)])),
    password: new FormControl('',Validators.compose([Validators.required, Validators.pattern(FormValidation.PASSWORD)])),
  })

  loginUserForm(){
    console.log(this.loginform.value);
  }

  get username(){
    return this.loginform.get('username');
  }

  get password(){
    return this.loginform.get('password');
  }
}
