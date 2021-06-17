import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    })
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit(form){
    console.log(form.value);
  }
}
