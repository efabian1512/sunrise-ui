import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  form = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.email, Validators.required]),
    senderPhone: new FormControl(),
    message: new FormControl('', Validators.required)
  });

  constructor(private contactService: ContactService) {

  }
  get name() {
    return this.form.get('senderName');
  }

  get email() {
    return this.form.get('senderEmail');
  }
  get phone() {
    return this.form.get('senderPhone');
  }
  get message() {
    return this.form.get('message');
  }

  save(formValue: {[key: string]: string | null}) {
    this.contactService.saveMessage(formValue).subscribe((resp: any)=> console.log(resp));
    this.form.reset();
  }
}
