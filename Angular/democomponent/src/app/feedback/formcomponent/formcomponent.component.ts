import { Component } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrl: './formcomponent.component.css'
})
export class FormcomponentComponent {
  userfristname: String = '';
  userlastname: String = '';
  usercountry: String = '';
  userstate: String = '';
  usercity: String = '';

  submitData(form: any) {
    this.userfristname = form.value.firstName;
    this.userlastname = form.value.lastName;
    this.usercountry = form.value.country;
    this.userstate = form.value.state;
    this.usercity = form.value.city;

    console.log(this.userfristname);
    console.log(this.userlastname);
    console.log(this.usercountry);
    console.log(this.userstate);
    console.log(this.usercity);

  }
}
