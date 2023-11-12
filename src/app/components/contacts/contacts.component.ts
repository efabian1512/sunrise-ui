import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required)
  });

  constructor() {

  }
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
  get address() {
    return this.form.get('message');
  }

  save(formValue: any) {
    console.log(formValue);
    this.form.reset();
  }
}
