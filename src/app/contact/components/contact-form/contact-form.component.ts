import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppUser } from 'src/app/shared/models/app-user';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  message: string;
  sendForm: FormGroup;


  constructor() {

  }

  ngOnInit(): void {
    this.sendForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    }
    );
  }


  // convenience getter for easy access to form fields
  get name() { return this.sendForm.get('name'); }
  get email() { return this.sendForm.get('email'); }


  send(data) {
    console.warn('Your order has been submitted', data);

    this.sendForm.reset();
  }

}
